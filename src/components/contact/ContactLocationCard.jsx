export default function ContactLocationCard({ location, index }) {
    return (
        <div className="p-6 sm:p-8 lg:p-10 border-b border-pewter hover:bg-white transition-colors group">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-sm bg-black text-white text-[10px] font-mono font-bold">
                        0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-pewter uppercase tracking-widest group-hover:text-brandblue transition-colors">
                        {location.role}
                    </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-pewter group-hover:bg-brandblue transition-colors"></div>
            </div>

            <h3 className="text-lg sm:text-xl font-medium text-black mb-5">{location.name}</h3>

            <div className="space-y-4">
                <div className="flex gap-4 group/item">
                    <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-pewter rounded-sm bg-white text-pewter group-hover/item:border-brandblue group-hover/item:text-brandblue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center text-sm text-steel">
                        {location.address.map((line) => <span key={line}>{line}</span>)}
                    </div>
                </div>

                <div className="flex gap-4 group/item">
                    <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-pewter rounded-sm bg-white text-pewter group-hover/item:border-brandblue group-hover/item:text-brandblue transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <div className="flex items-center text-sm">
                        <a href={`tel:${location.phone}`} className="text-black font-medium hover:text-brandblue transition-colors">
                            {location.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
