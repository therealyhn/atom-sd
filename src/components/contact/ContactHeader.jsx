export default function ContactHeader() {
    return (
        <div className="border-b border-pewter px-6 sm:px-10 lg:px-16 py-10 lg:py-14">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-brandblue">
                <span>06 / Kontakt</span>
                <span className="h-px w-10 bg-pewter"></span>
                <span className="text-pewter">Informacije i podrska</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-black uppercase tracking-tight">
                Stupite u kontakt
            </h1>
            <p className="mt-3 text-steel text-sm sm:text-base max-w-2xl leading-relaxed">
                Tu smo za pitanja o distributivnom programu, servisima i saradnji.
            </p>
        </div>
    )
}
