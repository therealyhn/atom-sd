import { useMemo, useState } from 'react'
import ZaveseHero from '../components/zavese/ZaveseHero'
import CatalogToolbar from '../components/ui/CatalogToolbar'
import ItemGrid from '../components/ui/ItemGrid'
import ItemModal from '../components/ui/ItemModal'
import Footer from '../components/layout/Footer'
import { zavese } from '../data/zavese'

export default function Zavese() {
    const [query, setQuery] = useState('')
    const [activeBrand, setActiveBrand] = useState('Svi')
    const [activeCategory, setActiveCategory] = useState('Sve')
    const [selectedItem, setSelectedItem] = useState(null)

    const brands = useMemo(() => {
        const unique = Array.from(new Set(zavese.map((item) => item.brand).filter(Boolean)))
        return ['Svi', ...unique]
    }, [])

    const categories = useMemo(() => {
        const unique = Array.from(new Set(zavese.map((item) => item.category).filter(Boolean)))
        return ['Sve', ...unique]
    }, [])

    const filteredItems = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()
        return zavese.filter((item) => {
            const matchesBrand = activeBrand === 'Svi' || item.brand === activeBrand
            const matchesCategory = activeCategory === 'Sve' || item.category === activeCategory
            const matchesQuery =
                !normalizedQuery ||
                item.modelText.toLowerCase().includes(normalizedQuery) ||
                (item.code && item.code.toLowerCase().includes(normalizedQuery)) ||
                (item.brand && item.brand.toLowerCase().includes(normalizedQuery))
            return matchesBrand && matchesCategory && matchesQuery
        })
    }, [activeBrand, activeCategory, query])

    return (
        <div className="flex flex-col min-h-screen">
            <ZaveseHero />
            <CatalogToolbar
                query={query}
                onQueryChange={setQuery}
                brands={brands}
                activeBrand={activeBrand}
                onBrandChange={setActiveBrand}
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onReset={() => {
                    setQuery('')
                    setActiveBrand('Svi')
                    setActiveCategory('Sve')
                }}
                label="Pretraga modela / sifre"
                searchId="zavese-search"
                placeholder="Unesite termin..."
            />
            <ItemGrid items={filteredItems} onSelect={setSelectedItem} />
            <Footer />
            <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
    )
}
