import Button from '../ui/Button'
import Chip from '../ui/Chip'
import PromoSwiper from '../ui/PromoSwiper'

export default function Hero() {
    return (
        <div id="hero" className="w-full xl:h-full border-l border-pewter flex items-center 
        justify-between px-4 py-8 sm:px-8 sm:py-12 xl:py-0 xl:px-16 2xl:px-24 gap-8 md:gap-12 xl:gap-16 overflow-hidden 
        bg-obsidian bg-no-repeat bg-cover relative">
            {/* Background Texture/Gradient if needed, keeping simple for now */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-hero-grid bg-grid-40 opacity-90" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-hero-noise opacity-[0.09]" />
            {/* <img
                src="/img/logo.png"
                alt=""
                className="pointer-events-none absolute inset-0 z-0 h-full w-full object-contain opacity-[0.05] scale-[3]"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
            /> */}

            {/* Left Content */}
            <div className="flex-1 w-full flex flex-col justify-start gap-4 md:gap-6 xl:justify-center max-w-3xl z-10">
                <div className="flex flex-wrap items-center">
                    {/* <Chip variant="black">EST. 2005</Chip>
                    <span className="hidden sm:block h-px w-12 bg-black"></span> */}
                    <img
                        src="/img/logo-full.png"
                        alt="Atom Sistem"
                        className="h-12 sm:h-16 xl:h-20 w-auto"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <h1 className="font-sans text-h2 sm:text-h1 xl:text-display font-medium text-black xl:-ml-1">
                    UVOZ, IZVOZ <br />
                    <span className="text-black">I DISTRIBUCIJA</span>
                </h1>

                <p className="max-w-xl text-black text-body xl:text-lg leading-relaxed border-l-2 border-black pl-4">
                    Atom Sistem d.o.o. Smederevo je privatno preduzeće koje razvija svoje poslovanje u oblasti
                    uvoza, izvoza i distribucije kompatibilnih tonera za laserske štampače, digitalnih vaga,
                    vazdušnih zavesa, mesoreznica i mlinova za meso.
                </p>

                <div className="max-w-lg rounded-sm">
                    <p className="text-sm italic text-black">
                        "Uvek ćemo se truditi da budemo u trendu savremenog poslovanja i da svojim klijentima
                        pružimo što kvalitetniju uslugu radi zadovoljenja njihovih želja i potreba."
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-4 sm:items-center">
                    {/* <Button variant="primary">NAŠI PROIZVODI</Button> */}
                    <Button variant="primary">KONTAKT</Button>
                </div>
            </div>

            {/* Right Promo */}
            <div className="hidden lg:flex flex-1 h-full items-center justify-center p-8">
                <PromoSwiper />
            </div>
        </div>
    )
}
