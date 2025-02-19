import Sidebar from './Components/Sidebar'
import { Navbar } from './Components/Navbar'

export default function AdminDashboard() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <Navbar />
                <main className="content-area">
                    {/* Your main content here */}
                </main>
            </div>
        </div>
    )
}
