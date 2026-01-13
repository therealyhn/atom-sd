import Divider from '../ui/Divider'
import Chip from '../ui/Chip'

export default function Sidebar({ className = '' }) {
    const navItems = [
        { label: '01 / Toneri', sub: 'Kompatibilni', href: '#toneri' },
        { label: '02 / Štampači', sub: 'Laserski', href: '#stampaci' },
        { label: '03 / Vage', sub: 'Digitalne i industrijske', href: '#vage' },
        { label: '04 / Ventilatori', sub: 'i zavese', href: '#ventilatori' },
        { label: '05 / Kontakt', sub: 'Lokacije', href: '#kontakt' },
    ]

    return (
        <aside className={`fixed top-0 left-0 hidden h-screen w-96 flex-col justify-between border-r border-pewter bg-obsidian p-8 lg:flex ${className}`}>
            {/* Top: Logo / Header */}

            <div className="flex flex-col gap-8 items-center">
                <img src="/img/logo-full.png" alt="ATOM SISTEM" className="w-76" />
                <Chip>UVOZ / IZVOZ / DISTRIBUCIJA</Chip>
            </div>

            {/* Middle: Navigation */}
            <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="group flex flex-col gap-1 text-lg text-vapor hover:text-brandblue transition-colors duration-300
                        border-b border-charcoal"
                    >
                        <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            <span className="h-px w-0 bg-brandblue transition-all duration-300 group-hover:w-14" />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-pewter group-hover:text-steel transition-colors">
                            {item.sub}
                        </span>
                    </a>
                ))}
            </nav>

            {/* Bottom: Contact Meta */}
            <div className="flex flex-col gap-4 text-xs text-steel">
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
