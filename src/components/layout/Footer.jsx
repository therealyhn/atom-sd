export default function Footer() {
    return (
        <footer className="border-t border-pewter bg-obsidian text-black">
            <div className="mx-auto w-full px-6 py-6 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-4 lg:pr-10 lg:border-r lg:border-black/20">
                        <div className="flex items-center gap-4">
                            <img src="/img/logo-full.png" alt="Atom Sistem" className="h-6 w-auto" />
                            <span className="h-px w-10 bg-black/40" />
                            <span className="text-xs font-mono uppercase tracking-widest text-black/70">Smederevo</span>
                        </div>
                        <p className="mt-6 max-w-xs text-sm text-black/70">
                            Uvoz, izvoz i distribucija kompatibilnih tonera, digitalnih vaga, vazdušnih zavesa,
                            mesoreznica i mlinova za meso.
                        </p>
                    </div>

                    <div className="lg:col-span-8 lg:pl-10">
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-widest text-black/70">Proizvodi</h4>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li><a href="#toneri" className="hover:text-brandblue transition-colors">Toneri</a></li>
                                    <li><a href="#stampaci" className="hover:text-brandblue transition-colors">Štampači</a></li>
                                    <li><a href="#vage" className="hover:text-brandblue transition-colors">Vage</a></li>
                                    <li><a href="#ventilatori" className="hover:text-brandblue transition-colors">Zavese</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-widest text-black/70">Kontakt</h4>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>Milentija Popovića 32A, Lok 26</li>
                                    <li>Novi Beograd</li>
                                    <li><a href="mailto:dejan@atomsd.com" className="hover:text-brandblue transition-colors">dejan@atomsd.com</a></li>
                                    <li><a href="tel:0116409844" className="hover:text-brandblue transition-colors">011 640 9844</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-widest text-black/70">Lokacije</h4>
                                <ul className="mt-4 space-y-2 text-sm">
                                    <li>Smederevo</li>
                                    <li>Beograd</li>
                                    <li>Region</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-black/20 pt-6 text-xs text-black/60">
                    <span>© 2026 Atom Sistem d.o.o.</span>
                    <span>Dizajnirano i izrađano od strane
                        <a href="https://jovanljusic.com" target="_blank" rel="noopener noreferrer" className="hover:text-brandblue transition-colors"> Jovan Ljušić</a></span>
                    <span>All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}
