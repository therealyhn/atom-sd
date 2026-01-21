import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import ContactFormPanel from '../components/contact/ContactFormPanel'
import ContactHeader from '../components/contact/ContactHeader'
import ContactInfoPanel from '../components/contact/ContactInfoPanel'
import ContactMapPanel from '../components/contact/ContactMapPanel'
import Footer from '../components/layout/Footer'

// Fix for default marker icon in React Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const locations = [
    {
        id: 'hq',
        name: 'Atom Sistem - HQ',
        role: 'Centrala & Magacin',
        position: [44.662777, 20.93],
        address: ['Goranska 36', '11300 Smederevo'],
        phone: '026 640 984',
    },
    {
        id: 'office',
        name: 'Atom Sistem - Office',
        role: 'Komercijala',
        position: [44.8125, 20.4612],
        address: ['Milentija Popovica 32A/26', 'Novi Beograd'],
        phone: '011 640 9844',
    },
]

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex-1 w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="border-x border-pewter bg-white">
                    <ContactHeader />
                    <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-pewter">
                        <ContactInfoPanel locations={locations} />
                        <ContactFormPanel />
                    </div>
                    <ContactMapPanel locations={locations} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
