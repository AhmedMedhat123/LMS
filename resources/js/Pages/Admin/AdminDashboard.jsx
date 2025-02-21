import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import { Navbar } from "./Components/Navbar";
import { Head, usePage } from "@inertiajs/react";
import { Toaster, toast } from "react-hot-toast";

export default function AdminDashboard({ title, children }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(window.innerWidth < 1024);
    const { flash } = usePage().props;
    const { admin } = usePage().props;
    useEffect(() => {
        if (flash?.message) {
            const type = flash.alertType || "success";
            toast[type](flash.message);
        }
    }, [flash]);

    return (
        <>
            <Head title="Admin Dashboard" />
            <Toaster position="top-right" reverseOrder={false} />
            <div className="dashboard-container">
                <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
                <div className={`dashboard-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
                    <Navbar admin={admin} />
                    {title && <p className="dashboard-title">{title}</p>}
                    <main className="content-area">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}

