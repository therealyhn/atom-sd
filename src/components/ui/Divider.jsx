export default function Divider({ className = '', accent = 'left' }) {
    return (
        <div className={`relative h-px w-full bg-pewter ${className}`}>
            <div
                className={`absolute top-0 h-[2px] w-4 bg-signal-orange ${accent === 'right' ? 'right-0' : 'left-0'
                    }`}
            />
        </div>
    )
}
