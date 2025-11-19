import { useState } from 'react'

const SERVICES = [
  'Herrenhaarschnitt',
  'Damenhaarschnitt',
  'Kinderhaarschnitt',
  'Färben',
  'Balayage',
  'Styling'
]

export default function Booking() {
  const [form, setForm] = useState({ name: '', contact: '', service: SERVICES[0], datetime: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${backend}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          service: form.service,
          appointment_time: new Date(form.datetime).toISOString(),
          notes: ''
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Fehler beim Senden')
      setStatus('ok')
      setForm({ name: '', contact: '', service: SERVICES[0], datetime: '' })
    } catch (err) {
      setStatus('error')
      console.error(err)
    }
  }

  return (
    <section id="termin" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Online Termin buchen</h2>
        <p className="mt-2 text-zinc-300">Senden Sie uns Ihre Wunschzeit – wir bestätigen schnellstmöglich.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-zinc-400" placeholder="Ihr Name" />
            <input required value={form.contact} onChange={e=>setForm({...form, contact:e.target.value})} className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-zinc-400" placeholder="Telefon oder E-Mail" />
            <select value={form.service} onChange={e=>setForm({...form, service:e.target.value})} className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-2 text-white">
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input required type="datetime-local" value={form.datetime} onChange={e=>setForm({...form, datetime:e.target.value})} className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-2 text-white" />
            <button className="w-full rounded-md bg-rose-400 text-black font-semibold py-2 hover:bg-rose-300 transition">Termin anfragen</button>
            {status === 'sending' && <p className="text-amber-300">Sende...</p>}
            {status === 'ok' && <p className="text-emerald-300">Vielen Dank! Wir melden uns zur Bestätigung.</p>}
            {status === 'error' && <p className="text-rose-300">Etwas ist schiefgelaufen. Bitte später erneut versuchen.</p>}
          </form>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-zinc-300">
            <h3 className="text-white font-semibold mb-2">Hinweis</h3>
            <p>Die Anfrage wird gespeichert. Wir prüfen Terminverfügbarkeit und kontaktieren Sie zur Bestätigung oder schlagen Alternativen vor.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
