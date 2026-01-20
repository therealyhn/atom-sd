import Hero from '../components/home/Hero'
import ProductCategories from '../components/home/ProductCategories'

export default function Home() {
    return (
        // Mobile: Auto height (scrollable). Desktop (xl): Fixed height (dashboard), no scroll.
        <div className="flex flex-col min-h-[calc(100vh-5rem)] xl:h-[calc(100vh-5rem)] xl:overflow-hidden">

            {/* Vertical Stack: Hero Top, Categories Bottom */}
            <div className="flex-1 flex flex-col">

                {/* Hero Section */}
                {/* On mobile, it takes its natural height. On desktop, it takes ~55% of space */}
                <div className="xl:flex-[55] shrink-0 relative border-b border-pewter">
                    <Hero />
                </div>

                {/* Categories Section */}
                {/* On mobile, it takes natural height. On desktop, it takes ~45% of space */}
                <div className="xl:flex-[45] shrink-0 relative bg-white z-10">
                    <ProductCategories />
                </div>
            </div>
        </div>
    )
}
