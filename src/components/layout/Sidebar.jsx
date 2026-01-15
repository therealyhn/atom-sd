import { NavLink } from 'react-router-dom'
import Divider from '../ui/Divider'
import Chip from '../ui/Chip'

export default function Sidebar({ className = '', isOpen = false, onToggle }) {
    const navItems = [
        { label: '00 / Početna', sub: 'Početna', href: '/', isRoute: true },
        { label: '01 / Toneri', sub: 'Kompatibilni', href: '/toneri', isRoute: true },
        { label: '02 / Štampači', sub: 'Laserski', href: '/stampaci', isRoute: true },
        { label: '03 / Vage', sub: 'Digitalne i industrijske', href: '#vage' },
        { label: '04 / Ventilatori', sub: 'zavese', href: '#ventilatori' },
        { label: '05 / Kontakt', sub: 'Lokacije', href: '#kontakt' },
    ]

    return (
        <aside className={`fixed top-0 left-0 hidden h-screen ${isOpen ? 'w-72 xl:w-80 2xl:w-96' : 'w-20 xl:w-24 2xl:w-28'} flex-col justify-between border-r border-pewter bg-obsidian p-4 lg:p-8 transition-[width] duration-300 lg:flex ${className}`}>
            {/* Top: Logo / Header */}

            <div className="flex flex-col gap-4 items-center">
                <div className="w-full flex items-center justify-center">
                    <button
                        type="button"
                        onClick={onToggle}
                        className="group flex flex-col gap-1.5 p-2 focus:outline-none"
                        aria-label="Toggle sidebar"
                        aria-expanded={isOpen}
                    >
                        <span
                            className={`h-px w-8 origin-center bg-vapor transition-all duration-300 group-hover:bg-brandblue
                                    ${isOpen ? 'translate-y-[4px] rotate-45' : ''
                                }`}
                        />
                        <span
                            className={`h-px w-8 origin-center bg-vapor transition-all duration-300 group-hover:bg-brandblue
                                    ${isOpen ? 'w-6 -translate-y-[3px] -rotate-45' : 'w-4 self-end'
                                }`}
                        />
                    </button>
                </div>

                {isOpen && (
                    <div className="flex flex-col items-center">
                        <img src="/img/logo.png" alt="ATOM SISTEM" className="w-20 xl:w-24 2xl:w-28" />
                        <Chip className="mt-4">UVOZ / IZVOZ / DISTRIBUCIJA</Chip>
                    </div>
                )}
            </div>

            {/* Middle: Navigation */}
            <nav className={`flex flex-col gap-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {navItems.map((item) =>
                    item.isRoute ? (
                        <NavLink
                            key={item.label}
                            to={item.href}
                            className="group flex flex-col gap-1 text-lg text-vapor hover:text-brandblue transition-colors duration-300
                        border-b border-charcoal"
                        >
                            <div className="flex items-center justify-between">
                                <span>{item.label}</span>
                                <span className="h-px w-0 bg-brandblue transition-all duration-300 group-hover:w-14 h-1" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wider text-pewter group-hover:text-steel transition-colors">
                                {item.sub}
                            </span>
                        </NavLink>
                    ) : (
                        <a
                            key={item.label}
                            href={item.href}
                            className="group flex flex-col gap-1 text-lg text-vapor hover:text-brandblue transition-colors duration-300
                        border-b border-charcoal"
                        >
                            <div className="flex items-center justify-between">
                                <span>{item.label}</span>
                                <span className="h-px w-0 bg-brandblue transition-all duration-300 group-hover:w-14 h-1" />
                            </div>
                            <span className="text-[10px] uppercase tracking-wider text-pewter group-hover:text-steel transition-colors">
                                {item.sub}
                            </span>
                        </a>
                    )
                )}
            </nav>

            {/* Bottom: Contact Meta */}
            <div className={`flex flex-col gap-4 text-xs text-steel transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Divider accent="left" />
                <div className="flex flex-col gap-1">
                    <p className="text-vapor font-medium">Atom Sistem d.o.o.</p>
                    <p>Milentija Popovića 32A, Lok 26</p>
                    <p>Novi Beograd</p>
                </div>
                <div className="flex flex-col gap-1 font-mono mt-2">
                    <a href="mailto:dejan@atomsd.com" className="hover:text-brandblue transition-colors">
                        dejan@atomsd.com
                    </a>
                    <a href="tel:0116409844" className="hover:text-brandblue transition-colors">
                        011 640 9844
                    </a>
                    <a href="tel:062414243" className="hover:text-brandblue transition-colors">
                        062 41 42 43
                    </a>
                </div>
            </div>
        </aside>
    )
}
