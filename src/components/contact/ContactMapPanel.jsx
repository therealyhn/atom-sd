import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function ContactMapPanel({ locations }) {
    return (
        <div className="px-6 sm:px-8 lg:px-12 py-10 lg:py-12">
            <div className="border border-pewter bg-pewter/5 rounded-sm overflow-hidden">
                <div className="flex items-center justify-between border-b border-pewter px-4 sm:px-6 py-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-pewter">Lokacije</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-brandblue">Mapa</span>
                </div>
                <div className="w-full h-[360px] lg:h-[420px] bg-pewter/10">
                    <MapContainer
                        center={[44.75, 20.65]}
                        zoom={9}
                        style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />
                        {locations.map((location) => (
                            <Marker key={location.id} position={location.position}>
                                <Popup>
                                    <div className="p-2 text-center text-xs font-sans">
                                        <strong className="block text-brandblue font-mono uppercase mb-1">{location.name}</strong>
                                        {location.address[0]}
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}
