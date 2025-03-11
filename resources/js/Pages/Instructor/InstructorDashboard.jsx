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
                            {instructor.status === "0" ? (
                                <div className="alert alert-warning">
                                    Your account is not yet approved by admin.
                                    You can't access the dashboard until your
                                    account is approved.
                                </div>
                            ) : null}
                            {title && (
                                <p className="text-4xl font-bold text-[#333] pl-[30px]">
                                    {title}
                                </p>
                            )}
                            <main className="content-area">{children}</main>
                        </div>
                    </div>
                </DashboardLayout>
            </SidebarProvider>
        </>
    );
}
