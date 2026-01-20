import { useRef } from 'react'
import useEscapeKey from '../../hooks/useEscapeKey'
import useOutsideClick from '../../hooks/useOutsideClick'
import useScrollLock from '../../hooks/useScrollLock'

const content = {
    privacy: {
        title: 'Politika privatnosti',
        sections: [
            {
                h: 'Podaci koje prikupljamo',
                p: 'Prikupljamo samo podatke koje dobrovoljno ostavite putem kontakt forme ili upita, kao što su ime, email adresa, broj telefona i sadržaj poruke.',
            },
            {
                h: 'Kako koristimo podatke',
                p: 'Vaše podatke koristimo isključivo za odgovor na upite, pružanje traženih informacija i komunikaciju u vezi sa našim uslugama.',
            },
            {
                h: 'Deljenje podataka',
                p: 'Ne prodajemo niti delimo lične podatke sa trećim stranama, osim kada je to zakonski obavezno ili radi zaštite naših prava.',
            },
            {
                h: 'Kolačići',
                p: 'Možemo koristiti neophodne kolačiće kako bi sajt pravilno funkcionisao i radi unapređenja korisničkog iskustva.',
            },
        ],
    },
    terms: {
        title: 'Uslovi korišćenja',
        sections: [
            {
                h: 'Vlasništvo sadržaja',
                p: 'Sav sadržaj na ovom sajtu je vlasništvo kompanije Atom Sistem d.o.o. i zaštićen je važećim propisima o autorskim pravima.',
            },
            {
                h: 'Zahtevi za uslugu',
                p: 'Slanje upita ne predstavlja obavezujući dogovor. Svaka saradnja zavisi od potvrde i dostupnosti.',
            },
            {
                h: 'Eksterni linkovi',
                p: 'Ne odgovaramo za sadržaj niti prakse privatnosti eksternih sajtova ka kojima postoji link sa ovog sajta.',
            },
            {
                h: 'Odgovornost',
                p: 'Atom Sistem d.o.o. ne snosi odgovornost za štetu nastalu korišćenjem ovog sajta.',
            },
        ],
    },
}

export default function LegalModal({ isOpen, type, onClose }) {
    const modalRef = useRef(null)

    useEscapeKey(onClose, isOpen)
    useScrollLock(isOpen)
    useOutsideClick(modalRef, onClose, isOpen)

    if (!isOpen) return null

    const activeContent = content[type] || content.privacy

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/90 p-4 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={onClose} />
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                className="relative w-full max-w-2xl border border-pewter bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-pewter">
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-steel">Legal</p>
                        <h3 className="mt-2 text-xl font-medium text-black uppercase tracking-tight">
                            {activeContent.title}
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-steel hover:text-brandblue transition-colors p-2"
                        aria-label="Close modal"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="px-6 py-6 max-h-[70vh] overflow-y-auto space-y-8">
                    {activeContent.sections.map((section) => (
                        <div key={section.h} className="space-y-3">
                            <h4 className="text-[11px] uppercase tracking-[0.2em] font-mono text-black">
                                {section.h}
                            </h4>
                            <p className="text-steel text-sm leading-relaxed">
                                {section.p}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="px-6 py-5 border-t border-pewter flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="border border-pewter px-5 py-2 text-xs font-mono uppercase tracking-widest text-black hover:border-brandblue hover:text-brandblue transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
