export default function Chip({ children, className = '', variant = 'pewter' }) {
    const variantClasses = variant === 'white'
        ? 'border-white text-white'
        : 'border-pewter text-steel hover:border-brandblue hover:text-brandblue';

    return (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-300 ${variantClasses} ${className}`}>
            {children}
        </span>
    )
}
