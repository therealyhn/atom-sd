import Button from '../ui/Button'
import Chip from '../ui/Chip'

export default function Hero() {
    return (
        <div id="intro" className="min-h-[70vh] flex flex-col justify-center gap-8 py-20 px-6 lg:px-12">
            <div className="flex items-center gap-4">
                <Chip>EST. 2005</Chip>
                <span className="h-px w-12 bg-pewter"></span>
                <span className="text-xs font-mono text-steel uppercase tracking-widest">Atom Sistem d.o.o.</span>
            </div>

            <h1 className="font-sans text-display font-medium text-vapor leading-[0.9] -ml-1">
                UVOZ, IZVOZ <br />
                <span className="text-steel">I DISTRIBUCIJA</span>
            </h1>

            <p className="max-w-2xl text-steel text-lg leading-relaxed border-l-2 border-signal-orange pl-6">
                Atom Sistem d.o.o. Smederevo je privatno preduzeće koje razvija svoje poslovanje u oblasti
                uvoza, izvoza i distribucije kompatibilnih tonera za laserske štampače, digitalnih vaga,
                vazdušnih zavesa, mesoreznica i mlinova za meso.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
                <Button variant="primary">NAŠI PROIZVODI</Button>
                <Button variant="outline">KONTAKT</Button>
            </div>

            <div className="mt-12 p-6 bg-charcoal border border-pewter max-w-xl">
                <p className="text-sm italic text-stone-400">
                    "Uvek ćemo se truditi da budemo u trendu savremenog poslovanja i da svojim klijentima
                    pružimo što kvalitetniju uslugu radi zadovoljenja njihovih želja i potreba."
                </p>
            </div>
        </div>
    )
}
