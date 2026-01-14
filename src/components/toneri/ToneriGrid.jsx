import TonerCard from './TonerCard'

export default function ToneriGrid({ items, onSelect }) {
    return (
        <div className="mx-auto w-full px-6 py-8 sm:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {items.map((item) => (
                    <TonerCard key={item.id} item={item} onSelect={onSelect} />
                ))}
            </div>
        </div>
    )
}
