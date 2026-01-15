import { useMemo, useState } from 'react'
import ToneriHero from '../components/toneri/ToneriHero'
import ToneriToolbar from '../components/toneri/ToneriToolbar'
import ItemGrid from '../components/ui/ItemGrid'
import ItemModal from '../components/ui/ItemModal'
import Footer from '../components/layout/Footer'
import { toneri } from '../data/toneri'

export default function Toneri() {
    const [query, setQuery] = useState('')
    const [activeBrand, setActiveBrand] = useState('Svi')
    const [selectedItem, setSelectedItem] = useState(null)

    const brands = useMemo(() => {
        const unique = Array.from(new Set(toneri.map((item) => item.brand).filter(Boolean)))
        return ['Svi', ...unique]
    }, [])

    const filteredItems = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()
        return toneri.filter((item) => {
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
            <ToneriHero />
            <ToneriToolbar
                query={query}
                onQueryChange={setQuery}
                brands={brands}
                activeBrand={activeBrand}
                onBrandChange={setActiveBrand}
                onReset={() => {
                    setQuery('')
                    setActiveBrand('Svi')
                }}
            />
            <ItemGrid items={filteredItems} onSelect={setSelectedItem} />
            <Footer />
            <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
    )
}
