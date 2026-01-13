export default function ProductCategories() {
    const categories = [
        {
            id: 'toneri',
            title: 'Kompatibilni Toneri',
            desc: 'Za laserske štampače visokog kvaliteta.',
            index: '01'
        },
        {
            id: 'vage',
            title: 'Digitalne Vage',
            desc: 'Precizno merenje za industriju i trgovinu.',
            index: '02'
        },
        {
            id: 'zavese',
            title: 'Vazdušne Zavese',
            desc: 'Održavanje klimatizacije i ušteda energije.',
            index: '03'
        },
        {
            id: 'mesoreznice',
            title: 'Mesoreznice i Mlinovi',
            desc: 'Profesionalna oprema za obradu mesa.',
            index: '04'
        }
    ]

    return (
        <div id="products" className="py-20">
            <div className="px-6 lg:px-12 flex items-end justify-between mb-12 border-b border-pewter pb-6">
                <h2 className="text-h2 text-vapor">Kategorije Proizvoda</h2>
                <span className="hidden md:block text-xs font-mono text-signal-orange">SCROLL TO EXPLORE ↓</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-pewter border border-pewter">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="group relative bg-obsidian p-10 min-h-[300px] flex flex-col justify-between hover:bg-charcoal transition-colors duration-500"
                    >
                        {/* Corner Mark */}
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-pewter group-hover:border-signal-orange transition-colors" />

                        {/* Content */}
                        <div className="flex justify-between items-start">
                            <span className="font-mono text-xl text-steel/30 font-bold group-hover:text-signal-orange transition-colors">
                                {cat.index}
                            </span>
                            <div className="h-8 w-8 rounded-full border border-pewter flex items-center justify-center group-hover:border-signal-orange group-hover:bg-signal-orange group-hover:text-obsidian transition-all">
                                ↗
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-medium text-vapor mb-2 group-hover:translate-x-2 transition-transform">
                                {cat.title}
                            </h3>
                            <p className="text-steel text-sm max-w-xs group-hover:text-stone-300">
                                {cat.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
