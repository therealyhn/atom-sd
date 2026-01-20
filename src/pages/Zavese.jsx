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
    const [selectedItem, setSelectedItem] = useState(null)

    const brands = useMemo(() => {
        const unique = Array.from(new Set(zavese.map((item) => item.brand).filter(Boolean)))
        return ['Svi', ...unique]
    }, [])

    const filteredItems = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()
        return zavese.filter((item) => {
            const matchesBrand = activeBrand === 'Svi' || item.brand === activeBrand
            const matchesQuery =
                !normalizedQuery ||
                item.modelText.toLowerCase().includes(normalizedQuery) ||
                (item.code && item.code.toLowerCase().includes(normalizedQuery)) ||
                (item.brand && item.brand.toLowerCase().includes(normalizedQuery))
            return matchesBrand && matchesQuery
        })
    }, [activeBrand, query])

    return (
        <div className="flex flex-col min-h-screen">
            <ZaveseHero />
            <CatalogToolbar
                query={query}
                onQueryChange={setQuery}
                brands={brands}
                activeBrand={activeBrand}
                onBrandChange={setActiveBrand}
                onReset={() => {
                    setQuery('')
                    setActiveBrand('Svi')
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
