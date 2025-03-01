import { useEffect, useState } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { SidebarProvider } from "./Components/SidebarContext";


const DashboardLayout = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate content loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust timing as needed

        return () => clearTimeout(timer); // Cleanup
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    // useEffect(() => {
    //     const loadScript = (src) => {
    //         if (document.querySelector(`script[src = "${src}"]`)) return; // Avoid loading the same script twice
    //         const script = document.createElement("script");
    //         script.src = src;
    //         script.async = false; // Ensures scripts execute in order
    //         document.body.appendChild(script);
    //     };

    //     const scripts = [
    //         "assets/js/jquery-3.4.1.min.js",
    //         "assets/js/bootstrap.bundle.min.js",
    //         "assets/js/bootstrap-select.min.js",
    //         "assets/js/owl.carousel.min.js",
    //         "assets/js/isotope.js",
    //         "assets/js/jquery.counterup.min.js",
    //         "assets/js/fancybox.js",
    //         // "assets/js/chart.js",
    //         // "assets/js/doughnut-chart.js",
    //         // "assets/js/bar-chart.js",
    //         // "assets/js/line-chart.js",
    //         "assets/js/datedropper.min.js",
    //         "assets/js/emojionearea.min.js",
    //         "assets/js/animated-skills.js",
    //         "assets/js/jquery.MultiFile.min.js",
    //         "assets/js/main.js"
    //     ];

    //     scripts.forEach(loadScript);

    //     return () => {
    //         scripts.forEach((src) => {
    //             const script = document.querySelector(`script[src = "${src}"]`);
    //             if (script) document.body.removeChild(script);
    //         });
    //     };
    // }, []);


    return (
        <HelmetProvider>
            <Helmet>
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <meta name="author" content="TechyDevs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Aduca -  Education HTML Template</title>
                {/* Google fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
                {/* Favicon */}
                <link rel="icon" sizes="16x16" href="images/favicon.png" />
                {/* inject:css */}
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/line-awesome.css" />
                <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="assets/css/bootstrap-select.min.css" />
                <link rel="stylesheet" href="assets/css/fancybox.css" />
                <link rel="stylesheet" href="assets/css/style.css" />

            </Helmet>

            {/* Preloader */}
            {loading && (
                <div className="preloader">
                    <div className="loader">
                        <svg className="spinner" viewBox="0 0 50 50">
                            <circle className="path" cx={25} cy={25} r={20} fill="none" strokeWidth={5} />
                        </svg>
                    </div>
                </div>
            )}

            {/* Page Content */}
            {!loading && (
                <>
                    <SidebarProvider>

                        <Header />

                        <section className="dashboard-area">
                            <Sidebar />
                            <div>{children}</div>
                        </section>

                    </SidebarProvider>

                    <div onClick={scrollToTop} id="scroll-top">
                        <i className="la la-arrow-up" title="Go top" />
                    </div>
                </>
            )}
        </HelmetProvider>
    );
};

export default DashboardLayout;
