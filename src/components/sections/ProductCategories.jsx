export default function ProductCategories() {
    const categories = [
        {
            id: 'toneri',
            title: 'Kompatibilni Toneri',
            desc: 'Za laserske štampače visokog kvaliteta.',
            index: '01'
        },
        {
            id: 'stampaci',
            title: 'Štampači',
            desc: 'Profesionalna oprema za obradu mesa.',
            index: '02'
        },
        {
            id: 'vage',
            title: 'Digitalne Vage',
            desc: 'Precizno merenje za industriju i trgovinu.',
            index: '03'
        },
        {
            id: 'zavese',
            title: 'Vazdušne Zavese',
            desc: 'Održavanje klimatizacije i ušteda energije.',
            index: '04'
        },

    ]

    return (
        <div id="products" className="w-full lg:h-full">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:h-full divide-y lg:divide-y-0 lg:divide-x divide-pewter">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="group relative bg-obsidian p-8 flex flex-col justify-between hover:bg-stone-300 transition-colors duration-500 min-h-[200px] lg:min-h-0 lg:h-full"
                    >
                        {/* Corner Mark */}
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-pewter group-hover:border-brandblue transition-colors" />

                        {/* Top: Index & Icon */}
                        <div className="flex justify-between items-start">
                            <span className="font-mono text-lg text-steel/30 font-bold group-hover:text-brandblue transition-colors">
                                {cat.index}
                            </span>
                            <div className="h-8 w-8 rounded-full border border-pewter flex items-center justify-center group-hover:border-brandblue group-hover:bg-brandblue group-hover:text-obsidian transition-all opacity-0 group-hover:opacity-100">
                                ↗
                            </div>
                        </div>

                        {/* Bottom: Title */}
                        <div>
                            <h3 className="text-lg lg:text-xl font-medium text-vapor mb-1 group-hover:translate-x-1 transition-transform">
                                {cat.title}
                            </h3>
                            <p className="text-steel text-[10px] lg:text-xs max-w-xs group-hover:text-steel line-clamp-2">
                                {cat.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
