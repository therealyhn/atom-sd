export default function ItemCard({ item, onSelect }) {
    return (
        <button
            type="button"
            onClick={() => onSelect(item)}
            className="group flex h-full w-full flex-col justify-between border border-pewter bg-white p-4 text-left transition-all duration-300 hover:border-brandblue hover:translate-y-[-2px] hover:shadow-lg hover:shadow-brandblue/10 rounded-sm relative overflow-hidden"
        >
            {/* Top Bar: Badges & Icon */}
            <div className="flex items-start justify-between w-full relative z-10">
                <div className="flex flex-col gap-2">
                    {item.brand && (
                        <span className="self-start inline-flex items-center rounded-sm border border-pewter bg-obsidian px-2 py-0.5 font-mono text-[18px] text-steel uppercase tracking-wider group-hover:border-brandblue/30 group-hover:text-brandblue transition-colors">
                            {item.brand}
                        </span>
                    )}
                    {item.code && (
                        <span className="font-mono text-md text-steel group-hover:text-brandblue transition-colors">
                            #{item.code}
                        </span>
                    )}
                </div>

                <div className="h-6 w-6 text-pewter group-hover:text-brandblue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>

            {/* Image Area */}
            <div className="mt-8 mb-8 flex items-center justify-center relative z-10">
                <div className="relative p-6 transition-transform duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 bg-hero-grid opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-150" />
                    <img
                        src={item.image}
                        alt={item.imageAlt || item.modelText}
                        className="h-28 w-auto object-contain relative z-10 mix-blend-multiply"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>

            {/* Bottom: Title */}
            <div className="relative z-10 border-t border-pewter/50 pt-4 group-hover:border-brandblue/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                    <p className="font-sans text-sm font-medium text-pewter leading-snug line-clamp-2 min-h-[2.5em] group-hover:text-brandblue transition-colors flex-1 pr-4">
                        {item.modelText}
                    </p>
                    {item.price && (
                        <span className="font-mono text-sm font-bold text-pewter bg-pewter/5 px-2 py-0.5 rounded-sm whitespace-nowrap">
                            {item.price}
                        </span>
                    )}
                </div>

                {item.fileUrl && (
                    <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-steel hover:text-brandblue transition-colors"
                    >
                        PDF Ponuda
                        <span className="text-base leading-none">→</span>
                    </a>
                )}

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-brandblue">
                    <span className="font-mono text-[10px] uppercase tracking-widest">Detaljnije</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </button>
    )
}
