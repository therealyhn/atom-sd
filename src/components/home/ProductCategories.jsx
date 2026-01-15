import { Link } from 'react-router-dom'

export default function ProductCategories() {
    const categories = [
        {
            id: 'toneri',
            title: 'Kompatibilni Toneri',
            desc: 'Za laserske štampače visokog kvaliteta.',
            index: '01',
            image: '/img/toner.png'
        },
        {
            id: 'stampaci',
            title: 'Štampači',
            desc: 'Laserski štampači visokog kvaliteta.',
            index: '02',
            image: '/img/printer.png'
        },
        {
            id: 'vage',
            title: 'Digitalne Vage',
            desc: 'Precizno merenje za industriju i trgovinu.',
            index: '03',
            image: '/img/vaga.png'
        },
        {
            id: 'zavese',
            title: 'Vazdušne Zavese',
            desc: 'Održavanje klimatizacije i ušteda energije.',
            index: '04',
            image: '/img/zavesa.png'
        },

    ]

    return (
        <div id="products" className="w-full xl:h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:h-full border-l border-pewter divide-y md:divide-y-0 md:divide-x divide-pewter">
                {categories.map((cat) => {
                    const cardClassName = 'group relative bg-white p-8 flex flex-col justify-between transition-colors duration-500 min-h-48 xl:min-h-0 xl:h-full overflow-hidden'
                    const cardContent = (
                        <>
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-100 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 pointer-events-none sm:h-2/3 sm:w-2/3"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-obsidian/20 transition-colors duration-500 group-hover:bg-obsidian/25 pointer-events-none" />
                            {/* Corner Mark */}
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-pewter group-hover:border-brandblue transition-colors z-10" />

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                {/* Top: Index & Icon */}
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-lg text-steel/30 font-bold group-hover:text-brandblue transition-colors">
                                        {cat.index}
                                    </span>
                                    <div className="h-6 w-6 text-pewter group-hover:text-brandblue transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
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
                        </>
                    )

                    const route = cat.id === 'toneri'
                        ? '/toneri'
                        : cat.id === 'stampaci'
                            ? '/stampaci'
                            : null

                    if (route) {
                        return (
                            <Link
                                key={cat.id}
                                to={route}
                                aria-label={cat.title}
                                className={cardClassName}
                            >
                                {cardContent}
                            </Link>
                        )
                    }

                    return (
                        <div key={cat.id} className={cardClassName}>
                            {cardContent}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
