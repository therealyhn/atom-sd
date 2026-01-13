export default function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-signal-orange/50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
        primary: "bg-vapor text-obsidian hover:bg-signal-orange hover:text-white clip-corner",
        ghost: "text-steel hover:text-vapor hover:bg-white/5",
        outline: "border border-pewter text-vapor hover:border-signal-orange hover:text-signal-orange"
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
