import { useId } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
    { src: '/img/toner.png', alt: 'Toner akcija' },
    { src: '/img/printer.png', alt: 'Stampac akcija' },
    { src: '/img/vaga.png', alt: 'Vaga akcija' },
    { src: '/img/zavesa.png', alt: 'Zavesa akcija' },
    { src: '/img/toner.png', alt: 'Toner akcija' },
    { src: '/img/printer.png', alt: 'Stampac akcija' },
    { src: '/img/vaga.png', alt: 'Vaga akcija' },
    { src: '/img/zavesa.png', alt: 'Zavesa akcija' },
]

export default function PromoSwiper() {
    const paginationId = useId()

    return (
        <div className="w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl border border-black/60 bg-obsidian/70 p-6 relative">
            <div className="absolute top-0 left-0 h-3 w-3 border-t border-l border-black/60" />
            <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-black/60" />

            <div className="flex items-center w-full mb-4">
                <span className="text-sm sm:text-md font-mono uppercase tracking-widest text-black">Akcije</span>
            </div>

            <div className="relative overflow-hidden h-56 xl:h-80 border border-black/20 bg-white/60">
                <Swiper
                    className="h-full"
                    slidesPerView={1}
                    loop
                    grabCursor
                    pagination={{ clickable: true, el: `#${paginationId}` }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.src} className="h-full">
                            <div className="h-56 xl:h-80 flex items-center justify-center p-6">
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div id={paginationId} className="promo-pagination mt-4 flex items-center justify-center gap-4" />
        </div>
    )
}
