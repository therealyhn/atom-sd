import PromoSwiper from '../ui/PromoSwiper'

export default function PromoSection({ variant = 'desktop', className = '' }) {
    const isMobile = variant === 'mobile'

    return (
        <div
            className={`${isMobile ? 'flex' : 'hidden lg:flex'} items-center justify-center bg-obsidian relative overflow-hidden ${isMobile ? 'p-4' : 'p-12'} ${className}`}
        >
            <div
                className={`w-full ${isMobile ? 'max-w-sm aspect-[4/3]' : 'max-w-lg aspect-square'} relative border border-pewter/30 ${isMobile ? 'p-6' : 'p-8'} bg-white shadow-2xl ${isMobile ? 'skew-y-0' : 'skew-y-1'} transform transition-transform hover:skew-y-0 duration-500`}
            >
                <div className="hidden md:block absolute bottom-4 right-4 text-[10px] font-mono uppercase tracking-widest text-brandblue">
                    Atom Sistem d.o.o.
                </div>
                <PromoSwiper />
            </div>
        </div>
    )
}
