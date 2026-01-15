import { useMemo, useState } from 'react'
import StampaciHero from '../components/stampaci/StampaciHero'
import CatalogToolbar from '../components/ui/CatalogToolbar'
import ItemGrid from '../components/ui/ItemGrid'
import ItemModal from '../components/ui/ItemModal'
import Footer from '../components/layout/Footer'
import { stampaci } from '../data/stampaci'

export default function Stampaci() {
    const [query, setQuery] = useState('')
    const [activeBrand, setActiveBrand] = useState('Svi')
    const [selectedItem, setSelectedItem] = useState(null)

    const brands = useMemo(() => {
        const unique = Array.from(new Set(stampaci.map((item) => item.brand).filter(Boolean)))
        return ['Svi', ...unique]
    }, [])

    const filteredItems = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()
        return stampaci.filter((item) => {
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
            <StampaciHero />
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
                searchId="stampaci-search"
                placeholder="Unesite termin..."
            />
            <ItemGrid items={filteredItems} onSelect={setSelectedItem} />
            <Footer />
            <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
    )
}
