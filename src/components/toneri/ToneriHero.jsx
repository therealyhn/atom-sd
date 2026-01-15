export default function ToneriHero() {
    return (
        <section className="bg-obsidian bg-no-repeat bg-cover relative border-b border-pewter">

            {/* Background Texture/Gradient if needed, keeping simple for now */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-hero-grid bg-grid-40 opacity-90" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-hero-noise opacity-[0.09]" />

            <div className="mx-auto w-full px-6 py-8 sm:px-8 sm:py-12 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-black/70">Katalog</p>
                    <h1 className="text-h2 sm:text-h1 xl:text-display font-medium text-black">Toneri</h1>
                    <p className="max-w-2xl text-body text-black/70">
                        Pregled artikala
                    </p>
                </div>
            </div>
        </section>
    )
}
