import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { Head, usePage } from "@inertiajs/react";
import { SidebarProvider } from "../Frontend/Dashboard/Components/SidebarContext";
import DashboardLayout from "../../Layouts/DashboardLayout";

export default function AdminDashboard({ title, children }) {
    const { admin } = usePage().props;

    return (
        <>
            <SidebarProvider>
                <DashboardLayout>
                    <Head title="Admin Dashboard" />
                    <div className="">
                        <div>
                            {title && (
                                <p className="text-4xl font-bold text-[#333] pl-[30px]">
                                    {title}
                                </p>
                            )}
                            <main className="content-area text-black">
                                {children}
                            </main>
                        </div>
                    </div>
                </DashboardLayout>
            </SidebarProvider>
        </>
    );
}
