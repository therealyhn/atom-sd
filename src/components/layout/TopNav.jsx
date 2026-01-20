import { NavLink } from 'react-router-dom'
// import Chip from '../ui/Chip'   

export default function TopNav() {
    const navItems = [
        { label: 'Početna', number: '01', href: '/', isRoute: true },
        { label: 'Toneri', number: '02', href: '/toneri', isRoute: true },
        { label: 'Štampači', number: '03', href: '/stampaci', isRoute: true },
        { label: 'Vage / Paletari', number: '04', href: '/vage', isRoute: true },
        { label: 'Zavese / Ventilatori', number: '05', href: '/zavese', isRoute: true },
        { label: 'Kontakt', number: '06', href: '/kontakt', isRoute: true },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-pewter bg-white relative hidden lg:block">
            <div className="mx-auto w-full">
                <div className="flex h-20 items-stretch divide-x divide-pewter border-l border-r border-pewter mx-auto max-w-[1920px]">

                    {/* Brand / Logo */}
                    <div className="flex w-64 shrink-0 flex-col justify-center items-center px-8 bg-white">
                        <img src="/img/logo-full.png" alt="ATOM SISTEM" className="h-16 w-auto self-center" />
                    </div>

                    {/* Navigation Rail */}
                    <nav className="flex flex-1 items-stretch overflow-x-auto no-scrollbar">
                        {navItems.map((item) => {
                            const className = ({ isActive }) =>
                                `group flex min-w-[140px] flex-1 flex-col justify-between border-r border-pewter px-6 py-4 hover:bg-pewter/5 transition-all relative ${isActive ? 'bg-pewter/5 shadow-inner' : 'bg-white'
                                }`

                            const Content = ({ isActive }) => (
                                <>
                                    <div className="flex items-center justify-between">
                                        <span className={`font-mono text-[12px] font-bold transition-colors ${isActive ? 'text-brandblue' : 'text-pewter group-hover:text-brandblue'}`}>
                                            {item.number}
                                        </span>
                                        {isActive && <div className="h-1.5 w-1.5 bg-brandblue rounded-full absolute top-4 right-4" />}
                                    </div>
                                    <span className={`font-sans text-[12px] font-medium uppercase tracking-wider transition-colors ${isActive ? 'text-pewter' : 'text-gray-600 group-hover:text-brandblue'}`}>
                                        {item.label}
                                    </span>
                                    <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-brandblue transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                </>
                            )

                            return item.isRoute ? (
                                <NavLink key={item.number} to={item.href} className={className}>
                                    {({ isActive }) => <Content isActive={isActive} />}
                                </NavLink>
                            ) : (
                                <a key={item.number} href={item.href} className={className({ isActive: false })}>
                                    <Content isActive={false} />
                                </a>
                            )
                        })}
                    </nav>

                    {/* Contact / Action Area */}
                    <div className="flex flex-col justify-center gap-1 px-8 bg-obsidian text-pewter shrink-0 min-w-[200px] hover:bg-brandblue transition-colors group cursor-pointer">
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-80">Pozovite Nas</span>
                        <a href="tel:0116409844" className="font-mono text-lg font-bold tracking-tight">
                            011 640 9844
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
