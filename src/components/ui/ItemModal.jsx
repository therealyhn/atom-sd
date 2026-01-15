import useModalControls from '../../hooks/useModalControls'
import Button from '../ui/Button'

export default function ItemModal({ item, onClose }) {
    useModalControls(Boolean(item), onClose)

    if (!item) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/60 p-4 backdrop-blur-sm">
            <div
                role="dialog"
                aria-modal="true"
                className="w-full max-w-4xl border border-pewter bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden relative"
            >
                {/* Decorative Tech Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandblue to-transparent" />

                {/* Left Col: Image Showcase */}
                <div className="w-full md:w-2/5 bg-white border-r border-pewter p-8 flex items-center justify-center relative">
                    <div className="absolute top-4 left-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-steel/50">Visual Ref</span>
                    </div>
                    <img
                        src={item.image}
                        alt={item.imageAlt || item.modelText}
                        className="w-full h-auto object-contain mix-blend-multiply max-h-[200px] md:max-h-none"
                    />
                </div>

                {/* Right Col: Datasheet */}
                <div className="w-full md:w-3/5 p-8 flex flex-col">
                    {/* Header Controls */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="space-y-1">
                            <span className="inline-block px-2 py-0.5 bg-brandblue/10 text-brandblue font-mono text-[10px] uppercase tracking-widest rounded-sm">
                                Stock Item
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-steel hover:text-brandblue transition-colors"
                        >
                            [ Close ]
                        </button>
                    </div>

                    {/* Main Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-pewter leading-tight mb-2">
                            {item.modelText}
                        </h2>
                        <div className="h-px w-20 bg-brandblue" />
                    </div>

                    {/* Spec Table */}
                    <div className="mt-auto border border-pewter rounded-sm">
                        <div className="grid grid-cols-2 border-b border-pewter">
                            <div className="p-3 border-r border-pewter bg-pewter/5 font-mono text-[10px] uppercase text-steel tracking-wider">Brend Tonera</div>
                            <div className="p-3 font-mono text-sm font-bold text-pewter">{item.brand || '—'}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-3 border-r border-pewter bg-pewter/5 font-mono text-[10px] uppercase text-steel tracking-wider">Kod proizvoda</div>
                            <div className="p-3 font-mono text-sm font-bold text-brandblue">{item.code || '—'}</div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-pewter">
                            <div className="p-3 border-r border-pewter bg-pewter/5 font-mono text-[10px] uppercase text-steel tracking-wider">Cena</div>
                            <div className="p-3 font-mono text-sm font-bold text-pewter">{item.price || '—'}</div>
                        </div>
                    </div>

                    {/* Footer Action */}
                    <div className="mt-8 pt-6 border-t border-pewter/30 flex justify-between items-center">
                        <span className="font-mono text-xs text-steel">Atom Sistem d.o.o.</span>
                        <Button onClick={onClose}>OK</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
