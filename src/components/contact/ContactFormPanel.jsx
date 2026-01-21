import ContactForm from '../ui/ContactForm'

export default function ContactFormPanel() {
    return (
        <div className="lg:col-span-7 bg-white">
            <div className="p-6 sm:p-8 lg:p-12 h-full flex flex-col">
                <div className="mb-6">
                    <h3 className="text-2xl font-mono font-bold text-black mb-2">Posaljite poruku</h3>
                    <p className="text-steel text-sm">Koristite formu ispod za brz kontakt.</p>
                </div>
                <div className="flex-1">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
