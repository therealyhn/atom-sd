import { useState } from 'react'
import Button from './Button'

export default function ContactForm() {
    const [result, setResult] = useState('')
    const [status, setStatus] = useState(null) // null, 'loading', 'success', 'error'

    const onSubmit = async (event) => {
        event.preventDefault()
        setStatus('loading')
        setResult('Slanje poruke...')

        const formData = new FormData(event.target)
        formData.append('access_key', 'YOUR_ACCESS_KEY_HERE') // Placeholder Key

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })

            const data = await response.json()

            if (data.success) {
                setResult('Poruka je uspešno poslata! Javićemo Vam se uskoro.')
                setStatus('success')
                event.target.reset()
            } else {
                console.error('Error', data)
                setResult(data.message)
                setStatus('error')
            }
        } catch (error) {
            console.error('Submission Error', error)
            setResult('Došlo je do greške. Molimo pokušajte ponovo kasnije.')
            setStatus('error')
        }
    }

    return (
        <div className="p-8 border-b border-pewter bg-white">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-brandblue mb-6 flex items-center gap-2">
                <span className="w-1 h-3 bg-brandblue inline-block"></span>
                Pošaljite Upit
            </h4>

            <form onSubmit={onSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-steel">Ime / Firma</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full bg-white border border-pewter rounded-sm px-4 py-2 text-sm text-black focus:outline-none focus:border-brandblue transition-colors"
                        placeholder="Vaše ime ili naziv firme"
                    />
                </div>

                {/* Email */}
                <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-steel">Email Adresa</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full bg-white border border-pewter rounded-sm px-4 py-2 text-sm text-black focus:outline-none focus:border-brandblue transition-colors"
                        placeholder="primer@email.com"
                    />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                    <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-widest text-steel">Naslov</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        className="w-full bg-white border border-pewter rounded-sm px-4 py-2 text-sm text-black focus:outline-none focus:border-brandblue transition-colors"
                        placeholder="Upit za..."
                    />
                </div>

                {/* Message */}
                <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-steel">Poruka</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        className="w-full bg-white border border-pewter rounded-sm px-4 py-2 text-sm text-black focus:outline-none focus:border-brandblue transition-colors resize-none"
                        placeholder="Vaša poruka..."
                    ></textarea>
                </div>

                {/* Status Message */}
                {status && (
                    <div className={`text-xs font-mono p-3 border ${status === 'success' ? 'border-green-500 bg-green-50 text-green-700' : status === 'error' ? 'border-red-500 bg-red-50 text-red-700' : 'border-brandblue bg-blue-50 text-brandblue'}`}>
                        {result}
                    </div>
                )}

                <div className="pt-2">
                    <Button type="submit" variant="primary" className="w-full justify-center">
                        {status === 'loading' ? 'Slanje...' : 'Pošalji Poruku'}
                    </Button>
                </div>
            </form>
        </div>
    )
}
