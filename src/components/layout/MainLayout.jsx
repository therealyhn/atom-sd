import MobileNav from './MobileNav'
import TopNav from './TopNav'

export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-obsidian">
            <TopNav />
            <MobileNav />
            <main className="flex-1 min-w-0 relative selection:bg-signal-orange selection:text-obsidian">
                {children}
            </main>
        </div>
    )
}
