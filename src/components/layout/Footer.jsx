import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="border-t-4 border-pewter bg-white text-steel relative z-10">
            {/* Main Grid */}
            <div className="mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-pewter border-b border-pewter">

                    {/* Brand Section */}
                    <div className="lg:col-span-4 p-8 lg:p-16 flex flex-col justify-between">
                        <div className="flex flex-col gap-6">
                            <img src="/img/logo-full.png" alt="Atom Sistem" className="h-8 w-auto self-start" />
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-brandblue"></span>
                                <span className="text-xs font-mono uppercase tracking-widest text-brandblue font-bold">Est. 2005</span>
                            </div>
                        </div>
                        <p className="mt-8 text-sm leading-relaxed max-w-sm text-steel">
                            Lider u uvozu i distribuciji kancelarijskog materijala, industrijske opreme i rešenja za poslovanje.
                            <br /><br />
                            <span className="font-mono text-xs opacity-60 uppercase">Smederevo — Beograd</span>
                        </p>
                    </div>

                    {/* Navigation Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-pewter">
                        {/* Proizvodi */}
                        <div className="p-8 lg:p-12">
                            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brandblue mb-6 flex items-center gap-2">
                                <span className="w-1 h-3 bg-brandblue inline-block"></span>
                                Katalog
                            </h4>
                            <ul className="space-y-3 text-sm font-medium">
                                <li><Link to="/toneri" className="block py-1 hover:text-brandblue hover:translate-x-1 transition-all">Toneri & Kertridži</Link></li>
                                <li><Link to="/stampaci" className="block py-1 hover:text-brandblue hover:translate-x-1 transition-all">Štampači & Oprema</Link></li>
                                <li><a href="#vage" className="block py-1 hover:text-brandblue hover:translate-x-1 transition-all">Digitalne Vage</a></li>
                                <li><a href="#ventilatori" className="block py-1 hover:text-brandblue hover:translate-x-1 transition-all">Vazdušne Zavese</a></li>
                            </ul>
                        </div>

                        {/* Kontakt */}
                        <div className="p-8 lg:p-12">
                            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brandblue mb-6 flex items-center gap-2">
                                <span className="w-1 h-3 bg-brandblue inline-block"></span>
                                Kontakt
                            </h4>
                            <ul className="space-y-3 text-sm text-steel">
                                <li className="flex flex-col">
                                    <span className="text-xs font-mono uppercase opacity-50 mb-1">Adresa</span>
                                    <span>Milentija Popovića 32A/26</span>
                                    <span>Novi Beograd</span>
                                </li>
                                <li className="flex flex-col pt-2">
                                    <span className="text-xs font-mono uppercase opacity-50 mb-1">Email / Tel</span>
                                    <a href="mailto:dejan@atomsd.com" className="hover:text-brandblue transition-colors font-medium">dejan@atomsd.com</a>
                                    <a href="tel:0116409844" className="hover:text-brandblue transition-colors font-medium">011 640 9844</a>
                                </li>
                            </ul>
                        </div>

                        {/* Info / Lokacije */}
                        <div className="p-8 lg:p-12 bg-pewter/5">
                            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brandblue mb-6 flex items-center gap-2">
                                <span className="w-1 h-3 bg-brandblue inline-block"></span>
                                Info
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li><span className="block text-xs font-mono uppercase opacity-50 mb-1">PIB</span> 123456789</li>
                                <li><span className="block text-xs font-mono uppercase opacity-50 mb-1">Matični Broj</span> 12345678</li>
                                <li className="pt-4">
                                    <Link to="/kontakt" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-brandblue text-brandblue pb-0.5 hover:bg-brandblue hover:text-white transition-all">
                                        Svi Podaci →
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="border-t border-pewter bg-white px-6 py-4 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-pewter leading-none">
                <div className="flex gap-4">
                    <span>© 2026 Atom Sistem</span>
                    <span className="hidden md:inline text-pewter/30">|</span>
                    <span>All Rights Reserved</span>
                </div>
                <div className="flex gap-1 items-center">
                    <span>Developed & Designed by:</span>
                    <a href="https://jovanljusic.com" target="_blank" rel="noopener noreferrer" className="text-brandblue hover:text-pewter transition-colors font-bold">
                        Jovan Ljušić
                    </a>
                </div>
            </div>
        </footer>
    )
}
