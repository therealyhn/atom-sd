export default function Chip({ children, className = '' }) {
    return (
        <span className={`inline-flex items-center rounded-full border border-pewter px-3 py-1 font-mono text-xs text-steel transition-colors duration-300 hover:border-brandblue hover:text-brandblue ${className}`}>
            {children}
        </span>
    )
}
