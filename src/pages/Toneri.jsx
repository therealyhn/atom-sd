import { useMemo, useState } from 'react'
import ToneriHero from '../components/toneri/ToneriHero'
import ToneriToolbar from '../components/toneri/ToneriToolbar'
import ToneriGrid from '../components/toneri/ToneriGrid'
import TonerModal from '../components/toneri/TonerModal'
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
            <ToneriGrid items={filteredItems} onSelect={setSelectedItem} />
            <Footer />
            <TonerModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
    )
}
