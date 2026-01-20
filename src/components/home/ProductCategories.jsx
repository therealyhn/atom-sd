import { useId } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function ProductCategories() {
    const paginationId = useId()
    const categories = [
        {
            id: 'toneri',
            title: 'Toneri',
            desc: 'Za laserske štampače visokog kvaliteta.',
            index: '01',
            image: '/img/toner.png'
        },
        {
            id: 'stampaci',
            title: 'Štampači',
            desc: 'Laserski štampači visokog kvaliteta.',
            index: '02',
            image: '/img/printer.png'
        },
        {
            id: 'vage',
            title: 'Digitalne Vage',
            desc: 'Precizno merenje za industriju i trgovinu.',
            index: '03',
            image: '/img/vaga.png'
        },
        {
            id: 'zavese',
            title: 'Vazdušne Zavese',
            desc: 'Održavanje klimatizacije i ušteda energije.',
            index: '04',
            image: '/img/zavesa.png'
        },

    ]

    return (
        <div id="products" className="w-full h-full bg-white">
            <div className="mx-auto w-full h-full">
                <div className="md:hidden px-4 py-4">
                    <Swiper
                        slidesPerView={1.15}
                        spaceBetween={16}
                        pagination={{ clickable: true, el: `#${paginationId}` }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                    >
                        {categories.map((cat) => {
                            const cardClassName = 'group relative bg-white p-6 flex flex-col justify-between transition-all duration-300 min-h-56 overflow-hidden hover:bg-pewter/5 z-0 hover:z-10 border border-pewter'
                            const cardContent = (
                                <>
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="absolute right-4 top-2 h-32 w-32 object-contain opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 pointer-events-none"
                                    />
                                    <div className="relative z-10 flex justify-between items-center w-full">
                                        <span className="font-mono text-xl text-pewter/20 font-bold group-hover:text-brandblue transition-colors">
                                            {cat.index}
                                        </span>
                                        <div className="h-6 w-6 text-pewter group-hover:text-brandblue transition-colors opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative z-10 mt-auto">
                                        <h3 className="text-xl font-medium text-black mb-2 group-hover:text-brandblue transition-colors tracking-tight">
                                            {cat.title}
                                        </h3>
                                        <p className="text-sm text-steel/60 max-w-xs leading-relaxed group-hover:text-black transition-colors">
                                            {cat.desc}
                                        </p>
                                    </div>
                                </>
                            )

                            const route = cat.id === 'toneri'
                                ? '/toneri'
                                : cat.id === 'stampaci'
                                    ? '/stampaci'
                                    : null

                            return (
                                <SwiperSlide key={cat.id}>
                                    {route ? (
                                        <Link
                                            to={route}
                                            aria-label={cat.title}
                                            className={cardClassName}
                                        >
                                            {cardContent}
                                        </Link>
                                    ) : (
                                        <div className={cardClassName}>
                                            {cardContent}
                                        </div>
                                    )}
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div id={paginationId} className="mt-4 flex items-center justify-center gap-4" />
                </div>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 md:gap-0 md:px-0 md:py-0 xl:grid-cols-4 md:border-l md:border-r md:border-pewter md:divide-y-0 md:divide-x md:divide-pewter mx-auto max-w-[1920px] h-full">
                    {categories.map((cat) => {
                        const cardClassName = 'group relative bg-white p-6 md:p-8 lg:p-12 flex flex-col justify-between transition-all duration-300 min-h-56 md:min-h-64 xl:min-h-0 xl:h-full overflow-hidden hover:bg-pewter/5 z-0 hover:z-10 border border-pewter md:border-0'
                        const cardContent = (
                            <>
                                {/* Background Image - Bottom Right */}
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="absolute right-4 bottom-4 h-32 w-32 object-contain opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 pointer-events-none md:right-0 md:bottom-0 md:h-48 md:w-48 md:opacity-10"
                                />

                                {/* Header */}
                                <div className="relative z-10 flex justify-between items-center w-full">
                                    <span className="font-mono text-xl text-pewter/20 font-bold group-hover:text-brandblue transition-colors">
                                        {cat.index}
                                    </span>
                                    <div className="h-6 w-6 text-pewter group-hover:text-brandblue transition-colors opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Footer Info */}
                                <div className="relative z-10 mt-auto">
                                    <h3 className="text-xl lg:text-3xl font-medium text-black mb-2 group-hover:text-brandblue transition-colors tracking-tight">
                                        {cat.title}
                                    </h3>
                                    <p className="text-sm text-steel/60 max-w-xs leading-relaxed group-hover:text-black transition-colors">
                                        {cat.desc}
                                    </p>
                                </div>
                            </>
                        )

                        const route = cat.id === 'toneri'
                            ? '/toneri'
                            : cat.id === 'stampaci'
                                ? '/stampaci'
                                : cat.id === 'vage'
                                    ? '/vage'
                                    : cat.id === 'zavese'
                                        ? '/zavese'
                                    : null

                        if (route) {
                            return (
                                <Link
                                    key={cat.id}
                                    to={route}
                                    aria-label={cat.title}
                                    className={cardClassName}
                                >
                                    {cardContent}
                                </Link>
                            )
                        }

                        return (
                            <div key={cat.id} className={cardClassName}>
                                {cardContent}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
