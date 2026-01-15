export default function ItemCard({ item, onSelect }) {
    return (
        <button
            type="button"
            onClick={() => onSelect(item)}
            className="group flex h-full w-full flex-col justify-between border border-black/20 bg-white/90 p-6 text-left transition-all duration-300 hover:border-brandblue hover:shadow-glow"
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {item.brand && (
                        <span className="inline-flex items-center rounded-full border border-pewter px-3 py-1 font-mono text-xs text-steel">
                            {item.brand}
                        </span>
                    )}
                    {item.code && (
                        <span className="inline-flex items-center rounded-full border border-pewter px-3 py-1 font-mono text-xs text-steel">
                            {item.code}
                        </span>
                    )}
                </div>
                <div className="h-8 w-8 rounded-full border border-pewter flex items-center justify-center group-hover:border-brandblue group-hover:bg-brandblue group-hover:text-obsidian transition-all opacity-15 group-hover:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-center border border-black/10 bg-white/70 p-4">
                <img
                    src={item.image}
                    alt={item.imageAlt || item.modelText}
                    className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <p className="mt-6 text-sm text-black/80">
                {item.modelText}
            </p>
        </button>
    )
}
