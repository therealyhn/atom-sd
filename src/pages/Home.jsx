import Hero from "../components/home/Hero"
import ProductCategories from "../components/home/ProductCategories"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen lg:h-screen lg:overflow-hidden">
            <div className="relative lg:flex-[2] lg:min-h-0">
                <Hero />
            </div>

            <div className="border-t border-pewter bg-pewter/5 lg:flex-1 lg:min-h-0">
                <ProductCategories />
            </div>
        </div>
    )
}