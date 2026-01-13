import Button from '../ui/Button'
import Chip from '../ui/Chip'

export default function Hero() {
    return (
        <div id="hero" className="w-full lg:h-full flex items-center justify-between px-6 py-12 lg:py-0 lg:px-16 gap-12 overflow-hidden bg-obsidian relative">
            {/* Background Texture/Gradient if needed, keeping simple for now */}

            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center gap-8 max-w-3xl z-10">
                <div className="flex items-center gap-4">
                    <Chip>EST. 2005</Chip>
                    <span className="h-px w-12 bg-pewter"></span>
                    <span className="text-xs font-mono text-steel uppercase tracking-widest">Atom Sistem d.o.o.</span>
                </div>

                <h1 className="font-sans text-display font-medium text-black leading-[0.9] -ml-1">
                    UVOZ, IZVOZ <br />
                    <span className="text-charcoal">I DISTRIBUCIJA</span>
                </h1>

                <p className="max-w-xl text-steel text-lg leading-relaxed border-l-2 border-brandblue pl-6">
                    Atom Sistem d.o.o. Smederevo je privatno preduzeće koje razvija svoje poslovanje u oblasti
                    uvoza, izvoza i distribucije kompatibilnih tonera za laserske štampače, digitalnih vaga,
                    vazdušnih zavesa, mesoreznica i mlinova za meso.
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                    <Button variant="primary">NAŠI PROIZVODI</Button>
                    <Button variant="outline">KONTAKT</Button>
                </div>

                <div className="mt-8 p-6 border border-brandblue max-w-lg rounded-sm">
                    <p className="text-sm italic text-steel">
                        "Uvek ćemo se truditi da budemo u trendu savremenog poslovanja i da svojim klijentima
                        pružimo što kvalitetniju uslugu radi zadovoljenja njihovih želja i potreba."
                    </p>
                </div>
            </div>

            {/* Right Logo */}
            <div className="hidden lg:flex flex-1 h-full items-center justify-center p-8 opacity-20 hover:opacity-100 transition-opacity duration-700">
                <img
                    src="/img/logo.png"
                    alt="Atom Sistem"
                    className="max-h-[80%] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-2xl"
                />
            </div>
        </div>
    )
}
