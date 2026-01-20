import { useMemo, useState } from 'react'
import VageHero from '../components/vage/VageHero'
import CatalogToolbar from '../components/ui/CatalogToolbar'
import ItemGrid from '../components/ui/ItemGrid'
import ItemModal from '../components/ui/ItemModal'
import Footer from '../components/layout/Footer'
import { vage } from '../data/vage'

export default function Vage() {
    const [query, setQuery] = useState('')
    const [activeBrand, setActiveBrand] = useState('Svi')
    const [activeCategory, setActiveCategory] = useState('Sve')
    const [selectedItem, setSelectedItem] = useState(null)

    const brands = useMemo(() => {
        const unique = Array.from(new Set(vage.map((item) => item.brand).filter(Boolean)))
        return ['Svi', ...unique]
    }, [])

    const categories = useMemo(() => {
        const unique = Array.from(new Set(vage.map((item) => item.category).filter(Boolean)))
        return ['Sve', ...unique]
    }, [])

    const filteredItems = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()
        return vage.filter((item) => {
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
            <VageHero />
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
                searchId="vage-search"
                placeholder="Unesite termin..."
            />
            <ItemGrid items={filteredItems} onSelect={setSelectedItem} />
            <Footer />
            <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
    )
}
