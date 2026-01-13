import { useState } from 'react'
import Sidebar from './Sidebar'
import MobileNav from './MobileNav'

export default function MainLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex flex-col min-h-screen bg-obsidian lg:flex-row">
            {/* Sticky Desktop Rail */}
            <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen((prev) => !prev)} />

            {/* Mobile Top Bar */}
            <MobileNav />

            {/* Main Content Area */}
            <main
                className={`flex-1 min-w-0 transition-[margin] duration-300 relative selection:bg-signal-orange selection:text-obsidian ${
                    isSidebarOpen ? 'lg:ml-72' : 'lg:ml-20'
                }`}
            >
                {children}
            </main>
        </div>
    )
}
