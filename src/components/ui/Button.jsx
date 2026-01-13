export default function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-signal-orange/50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
        primary: "bg-brandblue text-obsidian hover:bg-charcoal hover:text-white clip-corner",
        ghost: "text-steel hover:text-brandblue hover:bg-white/5",
        outline: "border border-pewter text-vapor hover:border-brandblue hover:text-brandblue"
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
