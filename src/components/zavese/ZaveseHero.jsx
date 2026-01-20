export default function ZaveseHero() {
    return (
        <section className="bg-obsidian bg-no-repeat bg-cover relative border-b border-pewter">
            <div className="pointer-events-none absolute inset-0 z-0 bg-hero-grid bg-grid-40 opacity-90" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-hero-noise opacity-[0.09]" />

            <div className="mx-auto w-full px-6 py-12 sm:px-8 lg:px-16 xl:px-24 relative z-10">
                <div className="flex flex-col gap-6 border-l-2 border-brandblue pl-6">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-brandblue"></span>
                        <p className="text-xs font-mono uppercase tracking-widest text-brandblue font-bold">Katalog</p>
                    </div>
                    <h1 className="text-h2 sm:text-h1 xl:text-display font-medium text-black tracking-tight leading-none">
                        ZAVESE / VENTILATORI
                    </h1>
                    <p className="max-w-lg text-body text-steel font-mono text-sm leading-relaxed">
                        // PREGLED ARTIKALA
                    </p>
                </div>
            </div>
        </section>
    )
}
