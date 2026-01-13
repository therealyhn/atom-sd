export default function Divider({ className = '', accent = 'left' }) {
    return (
        <div className={`relative h-px w-full bg-charcoal ${className}`}>
            <div
                className={`absolute top-0 h-[2px] w-20 bg-brandblue ${accent === 'right' ? 'right-0' : 'left-0'
                    }`}
            />
        </div>
    )
}
