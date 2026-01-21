import ContactEmailCard from './ContactEmailCard'
import ContactLocationCard from './ContactLocationCard'

export default function ContactInfoPanel({ locations }) {
    return (
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-pewter bg-pewter/5">
            <div className="flex flex-col h-full">
                {locations.map((location, index) => (
                    <ContactLocationCard key={location.id} location={location} index={index} />
                ))}
                <ContactEmailCard />
            </div>
        </div>
    )
}
