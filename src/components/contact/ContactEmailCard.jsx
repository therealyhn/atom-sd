export default function ContactEmailCard() {
    return (
        <div className="p-6 sm:p-8 lg:p-10 bg-white">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brandblue mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-brandblue rounded-full"></span>
                Email Podrska
            </h4>
            <a href="mailto:office@atomsd.com" className="text-lg sm:text-xl font-medium text-black hover:text-brandblue transition-colors mb-2 block">
                office@atomsd.com
            </a>
            <p className="text-sm text-steel">
                Za opste upite i informacije.
            </p>
        </div>
    )
}
