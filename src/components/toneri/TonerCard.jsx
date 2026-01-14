export default function TonerCard({ item, onSelect }) {
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
                <span className="text-xs text-black/40">↗</span>
            </div>

            <p className="mt-6 text-sm text-black/80">
                {item.modelText}
            </p>
        </button>
    )
}
