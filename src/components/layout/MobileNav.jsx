import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Divider from '../ui/Divider'
import Chip from '../ui/Chip'

export default function MobileNav({ className = '' }) {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { label: '01 / Toneri', sub: 'Kompatibilni', href: '/toneri', isRoute: true },
        { label: '02 / Štampači', sub: 'Laserski', href: '#stampaci' },
        { label: '03 / Vage', sub: 'Digitalne i industrijske', href: '#vage' },
        { label: '04 / Ventilatori', sub: 'i zavese', href: '#ventilatori' },
        { label: '05 / Kontakt', sub: 'Lokacije', href: '#kontakt' },
    ]

    return (
        <header className={`sticky top-0 z-50 flex h-full items-center justify-between border-b border-pewter bg-obsidian/95 p-4 lg:hidden backdrop-blur-sm ${className}`}>
            {/* Brand */}
            <div className="flex items-center gap-3">
                <img src="/img/logo-full.png" alt="ATOM SISTEM" className="w-36 sm:w-44" />
                <Chip className="!py-0.5 !text-[10px]">D.O.O.</Chip>
            </div>

            {/* Hamburger Toggle */}
            <button
                onClick={() => setIsOpen(true)}
                className="group flex flex-col gap-1.5 p-2 focus:outline-none"
                aria-label="Open menu"
            >
                <span className="h-px w-6 bg-vapor transition-transform group-hover:bg-signal-orange" />
                <span className="h-px w-4 self-end bg-vapor transition-transform group-hover:w-6 group-hover:bg-signal-orange" />
            </button>

            {/* Drawer Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-obsidian h-screen flex flex-col animate-reveal">
                    <div className="flex items-center justify-between border-b border-pewter p-4">
                        <span className="font-sans font-semibold text-vapor">MENI</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-steel hover:text-signal-orange"
                        >
                            ZATVORI [X]
                        </button>
                    </div>

                    <nav className="flex flex-col p-8 gap-6 overflow-y-auto">
                        {navItems.map((item) =>
                            item.isRoute ? (
                                <NavLink
                                    key={item.label}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex flex-col gap-1"
                                >
                                    <span className="text-2xl font-light text-vapor group-hover:pl-4 transition-all group-hover:text-signal-orange">
                                        {item.label}
                                    </span>
                                    <span className="text-xs text-steel uppercase tracking-widest pl-0 group-hover:pl-4 transition-all">
                                        {item.sub}
                                    </span>
                                </NavLink>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex flex-col gap-1"
                                >
                                    <span className="text-2xl font-light text-vapor group-hover:pl-4 transition-all group-hover:text-signal-orange">
                                        {item.label}
                                    </span>
                                    <span className="text-xs text-steel uppercase tracking-widest pl-0 group-hover:pl-4 transition-all">
                                        {item.sub}
                                    </span>
                                </a>
                            )
                        )}
                    </nav>

                    <div className="mt-auto p-8">
                        <Divider className="mb-6" />
                        <div className="flex flex-col gap-2 text-sm text-steel">
                            <p>Milentija Popovića 32A, Lok 26</p>
                            <p>Novi Beograd</p>
                            <a href="tel:062414243" className="text-vapor mt-2 block">062 41 42 43</a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
