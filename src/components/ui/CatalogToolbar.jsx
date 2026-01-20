import Button from '../ui/Button'

export default function CatalogToolbar({
    query,
    onQueryChange,
    brands,
    activeBrand,
    onBrandChange,
    categories,
    activeCategory,
    onCategoryChange,
    onReset,
    label,
    searchId,
    placeholder,
}) {
    return (
        <div className="border-b border-pewter bg-obsidian">
            <div className="mx-auto w-full px-6 py-6 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="flex-1 max-w-xl">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-steel mb-2 block" htmlFor={searchId}>
                            {label}
                        </label>
                        <div className="relative group">
                            <input
                                id={searchId}
                                type="text"
                                value={query}
                                onChange={(event) => onQueryChange(event.target.value)}
                                placeholder={placeholder}
                                className="w-full rounded-sm border border-pewter bg-white px-4 py-3 text-sm text-black placeholder:text-steel/50 focus:outline-none focus:border-brandblue focus:ring-1 focus:ring-brandblue transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-steel">Filter brendova</span>
                        <div className="flex flex-wrap gap-2">
                            {brands.map((brand) => {
                                const isActive = brand === activeBrand
                                return (
                                    <button
                                        key={brand}
                                        type="button"
                                        onClick={() => onBrandChange(brand)}
                                        className={`inline-flex items-center rounded-sm border px-4 py-2 font-mono text-xs transition-all duration-300 ${isActive
                                            ? 'border-brandblue bg-brandblue text-white'
                                            : 'border-pewter bg-white text-steel hover:border-brandblue hover:text-brandblue'
                                            }`}
                                    >
                                        {brand}
                                    </button>
                                )
                            })}
                        </div>
                        {categories && categories.length > 0 && (
                            <>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-steel">Filter kategorije</span>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => {
                                        const isActive = category === activeCategory
                                        return (
                                            <button
                                                key={category}
                                                type="button"
                                                onClick={() => onCategoryChange(category)}
                                                className={`inline-flex items-center rounded-sm border px-4 py-2 font-mono text-xs transition-all duration-300 ${isActive
                                                    ? 'border-brandblue bg-brandblue text-white'
                                                    : 'border-pewter bg-white text-steel hover:border-brandblue hover:text-brandblue'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        )
                                    })}
                                    {/* <Button variant="ghost" onClick={onReset} className="h-full px-4 text-xs hover:text-brandblue rounded-sm">
                                        [ RESET ]
                                    </Button> */}
                                </div>
                            </>
                        )}
                        {/* {!categories && (
                            <Button variant="ghost" onClick={onReset} className="h-full px-4 text-xs hover:text-brandblue rounded-sm">
                                [ RESET ]
                            </Button>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
