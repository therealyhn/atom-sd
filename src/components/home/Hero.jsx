import Button from '../ui/Button'
import PromoSection from './PromoSection'

export default function Hero() {
    return (
        <div id="hero" className="w-full xl:h-full bg-white text-black relative flex flex-col justify-center">
            <div className="mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-pewter border-l border-r border-pewter mx-auto max-w-[1920px]">
                    <div className="flex flex-col justify-center p-8 lg:p-24 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandblue to-transparent" />
                        <div className="pointer-events-none absolute inset-0 z-0 bg-hero-grid bg-grid-40 opacity-30" />

                        <div className="relative z-10 flex flex-col gap-8 max-w-2xl">
                            <div className="flex items-center gap-4">
                                <span className="px-2 py-1 bg-obsidian border border-pewter text-[10px] font-mono uppercase tracking-widest text-pewter">
                                    EST. 2005
                                </span>
                                <span className="h-px w-12 bg-pewter"></span>
                                <span className="text-xs font-mono uppercase tracking-widest text-brandblue font-bold">
                                    Smederevo HQ
                                </span>
                            </div>

                            <div>
                                <h1 className="text-4xl sm:text-5xl xl:text-7xl font-medium tracking-tight leading-[0.9] mb-4 text-black">
                                    UVOZ, IZVOZ <br />
                                    <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-r from-black to-pewter">
                                        I DISTRIBUCIJA
                                    </span>
                                </h1>
                                <p className="text-md text-steel max-w-lg leading-relaxed border-l-2 border-brandblue pl-6">
                                    Atom Sistem d.o.o. Smederevo je privatno preduzece koje razvija svoje poslovanje u oblasti uvoza,
                                    izvoza i distribucije kompatibilnih tonera za laserske stampace, digitalnih vaga, vazdusnih zavesa,
                                    mesorezmica i mlinova za meso.
                                </p>
                            </div>

                            <div className="bg-pewter/5 p-6 border-l border-pewter italic text-sm text-steel/80 max-w-md">
                                "Uvek ŽÎemo se truditi da budemo u trendu savremenog poslovanja i da svojim klijentima pruóimo ­to kvalitetniju uslugu."
                            </div>

                            <div className="flex flex-wrap gap-4 mt-4">
                                <Button variant="primary"><a href="#contact">KONTAKT</a></Button>
                                {/* <Button variant="outline"><a href="#products">Na­i Proizvodi</a></Button> */}
                            </div>

                            <div className="lg:hidden">
                                <PromoSection variant="mobile" />
                            </div>
                        </div>
                    </div>

                    <PromoSection />
                </div>
            </div>
        </div>
    )
}
