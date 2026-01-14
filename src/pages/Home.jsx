import Hero from "../components/home/Hero"
import ProductCategories from "../components/home/ProductCategories"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen xl:h-screen xl:overflow-hidden">
            <div className="relative xl:flex-[2] xl:min-h-0">
                <Hero />
            </div>

            <div className="border-t border-pewter bg-pewter/5 xl:flex-1 xl:min-h-0">
                <ProductCategories />
            </div>
        </div>
    )
}
