import { useEffect } from 'react'

export default function useModalControls(isOpen, onClose) {
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose()
        }

        const previousActiveElement = document.activeElement
        const { overflow } = document.body.style

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = overflow
            window.removeEventListener('keydown', handleKeyDown)
            if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
                previousActiveElement.focus()
            }
        }
    }, [isOpen, onClose])
}
