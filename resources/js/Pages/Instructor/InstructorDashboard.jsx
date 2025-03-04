import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { Head, usePage } from "@inertiajs/react";
import { SidebarProvider } from "../Frontend/Dashboard/Components/SidebarContext";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function InsturctorDashboard({ title, children }) {
    const { instructor } = usePage().props;

    return (
        <>
            <SidebarProvider>
                <DashboardLayout>
                    <Head title="Instructor Dashboard" />
                    <div className="">
                        <div>
                            {title && (
                                <p className="dashboard-title">{title}</p>
                            )}
                            <main className="content-area">{children}</main>
                        </div>
                    </div>
                </DashboardLayout>
            </SidebarProvider>
        </>
    );
}
