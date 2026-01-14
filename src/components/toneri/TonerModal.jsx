import { useEffect } from 'react'

export default function TonerModal({ item, onClose }) {
    useEffect(() => {
        if (!item) return
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose()
        }
        const { overflow } = document.body.style
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = overflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [item, onClose])

    if (!item) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm">
            <div
                role="dialog"
                aria-modal="true"
                className="w-full max-w-2xl border border-black/20 bg-white p-6 shadow-glow"
            >
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <div className="flex flex-wrap gap-2">
                        {item.brand && (
                            <span className="inline-flex items-center rounded-full border border-pewter px-3 py-1 font-mono text-xs text-steel">
                                {item.brand}
                            </span>
                        )}
                        {item.code && (
                            <span className="inline-flex items-center rounded-full border border-pewter px-3 py-1 font-mono text-xs text-steel">
                                {item.code}
                            </span>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-xs font-mono uppercase tracking-widest text-black/60 hover:text-brandblue"
                        aria-label="Close modal"
                    >
                        Zatvori
                    </button>
                </div>

                <p className="mt-6 text-sm text-black/80">
                    {item.modelText}
                </p>
            </div>
        </div>
    )
}
