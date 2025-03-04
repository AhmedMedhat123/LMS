import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SidebarProvider } from "../Pages/Frontend/Dashboard/Components/SidebarContext";
import { usePage } from "@inertiajs/react";
import { Toaster, toast } from "react-hot-toast";

// Dynamic imports based on user type
import AdminHeader from "../Pages/Admin/Components/Header";
import InstructorHeader from "../Pages/Instructor/Components/Header";
import StudentHeader from "../Pages/Frontend/Dashboard/Components/Header";

import AdminSidebar from "../Pages/Admin/Components/Sidebar";
import InstructorSidebar from "../Pages/Instructor/Components/Sidebar";
import StudentSidebar from "../Pages/Frontend/Dashboard/Components/Sidebar";

const DashboardLayout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const { flash, user, admin, instructor, auth } = usePage().props;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (flash?.message) {
            const type = flash.alertType || "success";
            toast[type](flash.message);
        }
    }, [flash]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // Select Header and Sidebar based on user role
    const getHeader = () => {
        switch (auth.user.role) {
            case "admin":
                return <AdminHeader admin={admin} />;
            case "instructor":
                return <InstructorHeader instructor={instructor} />;
            case "user":
                return <StudentHeader user={user} />;
            default:
                return null;
        }
    };

    const getSidebar = () => {
        switch (auth.user.role) {
            case "admin":
                return <AdminSidebar />;
            case "instructor":
                return <InstructorSidebar />;
            case "user":
                return <StudentSidebar />;
            default:
                return null;
        }
    };

    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    httpEquiv="content-type"
                    content="text/html; charset=utf-8"
                />
                <meta name="author" content="TechyDevs" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Aduca - Education HTML Template</title>
                {/* Google fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                {/* Favicon */}
                <link rel="icon" sizes="16x16" href="/images/favicon.png" />
                {/* inject:css */}
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/line-awesome.css" />
                <link
                    rel="stylesheet"
                    href="/assets/css/owl.carousel.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/owl.theme.default.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/bootstrap-select.min.css"
                />
                <link rel="stylesheet" href="/assets/css/fancybox.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
            </Helmet>

            {loading ? (
                <div className="preloader">
                    <div className="loader">
                        <svg className="spinner" viewBox="0 0 50 50">
                            <circle
                                className="path"
                                cx={25}
                                cy={25}
                                r={20}
                                fill="none"
                                strokeWidth={5}
                            />
                        </svg>
                    </div>
                </div>
            ) : (
                <SidebarProvider>
                    {getHeader()}
                    <Toaster position="top-right" reverseOrder={false} />
                    <section className="dashboard-area">
                        {getSidebar()}
                        <div className="dashboard-content-wrap">
                            <div className="container-fluid">
                                <div>{children}</div>
                            </div>
                        </div>
                    </section>
                    <div onClick={scrollToTop} id="scroll-top">
                        <i className="la la-arrow-up" title="Go top" />
                    </div>
                </SidebarProvider>
            )}
        </HelmetProvider>
    );
};

export default DashboardLayout;
