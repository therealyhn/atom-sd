import Button from '../ui/Button'

export default function ToneriToolbar({
    query,
    onQueryChange,
    brands,
    activeBrand,
    onBrandChange,
    onReset,
}) {
    return (
        <div className="border-b border-pewter bg-obsidian">
            <div className="mx-auto w-full px-6 py-6 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                        <label className="text-xs font-mono uppercase tracking-widest text-black/70" htmlFor="toneri-search">
                            Pretraga
                        </label>
                        <input
                            id="toneri-search"
                            type="text"
                            value={query}
                            onChange={(event) => onQueryChange(event.target.value)}
                            placeholder="Model, šifra ili brend"
                            className="mt-3 w-full border border-black/20 bg-white/80 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brandblue/40"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-black/70">Brend</span>
                        <div className="flex flex-wrap gap-3">
                            {brands.map((brand) => {
                                const isActive = brand === activeBrand
                                return (
                                    <button
                                        key={brand}
                                        type="button"
                                        onClick={() => onBrandChange(brand)}
                                        className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-300 ${
                                            isActive
                                                ? 'border-brandblue text-brandblue'
                                                : 'border-pewter text-steel hover:border-brandblue hover:text-brandblue'
                                        }`}
                                    >
                                        {brand}
                                    </button>
                                )
                            })}
                            <Button variant="ghost" onClick={onReset} className="h-8 px-4 text-xs">
                                Reset
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
