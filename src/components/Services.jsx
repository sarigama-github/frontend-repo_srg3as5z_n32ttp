const services = [
  { title: 'Herrenhaarschnitt', desc: 'Präziser Schnitt und Styling', price: '€30' },
  { title: 'Damenhaarschnitt', desc: 'Schnitt, Föhnen & Styling', price: '€55' },
  { title: 'Kinderhaarschnitt', desc: 'Bis 12 Jahre', price: '€20' },
  { title: 'Färben', desc: 'Ansatz, komplett oder Strähnen', price: 'ab €45' },
  { title: 'Balayage', desc: 'Modernes Farbspiel', price: 'ab €120' },
  { title: 'Styling', desc: 'Föhnen, Glätten oder Locken', price: 'ab €25' },
]

export default function Services() {
  return (
    <section id="leistungen" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Leistungen</h2>
        <p className="mt-2 text-zinc-300">Alles für Ihren perfekten Look.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-sm text-zinc-300 mt-1">{s.desc}</p>
                </div>
                <span className="text-rose-300 font-semibold">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
