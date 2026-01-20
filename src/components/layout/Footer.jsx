import { useState } from 'react'
import { Link } from 'react-router-dom'
import LegalModal from '../ui/LegalModal'

export default function Footer() {
    const [legalType, setLegalType] = useState(null)

    return (
        <footer className="border-t border-pewter bg-white text-steel relative z-10 w-full">
            <div className="mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-pewter border-l border-r border-pewter mx-auto max-w-[1920px]">
                    <div className="p-8 lg:p-12 flex flex-col justify-between h-full min-h-[300px]">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-pewter/50">
                                    EST. 2005
                                </span>
                                <span className="h-px w-8 bg-pewter/20"></span>
                            </div>
                            <img src="/img/logo-full.png" alt="Atom Sistem" className="h-10 w-auto self-start" />
                        </div>
                        <div className="mt-auto">
                            <p className="text-sm text-steel/80 max-w-xs leading-relaxed">
                                Distribucija i servis birotehničke opreme, potrošnog materijala i industrijskih rešenja.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col h-full hover:bg-pewter/5 transition-colors group">
                        <span className="text-4xl font-mono font-bold text-pewter/5 group-hover:text-brandblue/10 transition-colors mb-6 block">01</span>
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brandblue mb-6">
                            Proizvodi
                        </h4>
                        <ul className="space-y-4 text-sm font-medium flex-1">
                            <li><Link to="/toneri" className="block text-black hover:text-brandblue hover:translate-x-2 transition-all">Toneri & Kertridži</Link></li>
                            <li><Link to="/stampaci" className="block text-black hover:text-brandblue hover:translate-x-2 transition-all">Štampači & Oprema</Link></li>
                            <li><a href="#vage" className="block text-black hover:text-brandblue hover:translate-x-2 transition-all">Digitalne Vage</a></li>
                            <li><Link to="/zavese" className="block text-black hover:text-brandblue hover:translate-x-2 transition-all">Vazdušne Zavese</Link></li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-pewter/10">
                            <a href="#" className="text-xs font-mono uppercase tracking-widest text-pewter group-hover:text-brandblue flex items-center gap-2">
                                Preuzmi Katalog <span className="text-lg leading-none">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col h-full hover:bg-pewter/5 transition-colors group">
                        <span className="text-4xl font-mono font-bold text-pewter/5 group-hover:text-brandblue/10 transition-colors mb-6 block">02</span>
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brandblue mb-6">
                            Kontakt
                        </h4>
                        <ul className="space-y-6 text-sm text-steel flex-1">
                            <li className="flex flex-col gap-1">
                                <span className="text-xs font-mono uppercase opacity-50">Centrala</span>
                                <span className="font-medium text-black">Milentija Popovića 32A/26</span>
                                <span className="font-medium text-black">Novi Beograd</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-xs font-mono uppercase opacity-50">Kontakt</span>
                                <a href="mailto:office@atomsd.com" className="text-black hover:text-brandblue transition-colors">office@atomsd.com</a>
                                <a href="tel:0116409844" className="text-black hover:text-brandblue transition-colors">011 640 9844</a>
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col h-full hover:bg-pewter/5 transition-colors group bg-pewter/5">
                        <span className="text-4xl font-mono font-bold text-pewter/5 group-hover:text-brandblue/10 transition-colors mb-6 block">03</span>
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brandblue mb-6">
                            Podaci firme
                        </h4>
                        <ul className="space-y-4 text-sm text-steel flex-1">
                            <li className="flex justify-between border-b border-pewter/10 pb-2">
                                <span>PIB</span>
                                <span className="font-mono font-bold text-black">103956421</span>
                            </li>
                            <li className="flex justify-between border-b border-pewter/10 pb-2">
                                <span>Matični broj</span>
                                <span className="font-mono font-bold text-black">20059381</span>
                            </li>
                            <li className="flex justify-between border-b border-pewter/10 pb-2">
                                <span>Žiro račun</span>
                                <span className="font-mono font-bold text-black">160-254-88</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link to="/kontakt" className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-brandblue text-white text-xs font-mono uppercase tracking-widest hover:bg-black transition-colors">
                                Zatraži Ponudu
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-pewter text-white border-t border-pewter">
                <div className="mx-auto max-w-[1920px] px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest opacity-60">
                    <div className="flex gap-4">
                        <span>© 2026 Atom Sistem doo</span>
                        <span className="hidden md:inline">|</span>
                        <span>Sva prava zadržana</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setLegalType('privacy')}
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </button>
                        <span className="hidden md:inline">|</span>
                        <button
                            type="button"
                            onClick={() => setLegalType('terms')}
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </button>
                        <span className="hidden md:inline">|</span>
                        <span>
                            Dizajnirano i Razvijeno od strane
                            <a href="https://jovanljusic.com" target="_blank" rel="noopener noreferrer" className="text-obsidian hover:text-brandblue transition-colors"> Jovan Ljušić</a>
                        </span>
                    </div>
                </div>
            </div>

            <LegalModal isOpen={Boolean(legalType)} type={legalType} onClose={() => setLegalType(null)} />
        </footer>
    )
}
