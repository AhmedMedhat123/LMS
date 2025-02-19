import Sidebar from './Components/Sidebar'
import { Navbar } from './Components/Navbar'
import { Head } from '@inertiajs/react'

export default function AdminDashboard() {
    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="dashboard-container">
                <Sidebar />
                <div className="dashboard-content">
                    <Navbar />
                    <main className="content-area">
                        {/* Your main content here */}
                    </main>
                </div>
            </div>
        </>
    )
}
