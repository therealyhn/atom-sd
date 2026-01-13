import Sidebar from './Sidebar'
import MobileNav from './MobileNav'

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-obsidian lg:flex-row">
            {/* Sticky Desktop Rail */}
            <Sidebar />

            {/* Mobile Top Bar */}
            <MobileNav />

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 lg:ml-72 relative selection:bg-signal-orange selection:text-obsidian">
                {children}
            </main>
        </div>
    )
}
