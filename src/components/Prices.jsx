const rows = [
  { service: 'Herrenhaarschnitt', price: '€30' },
  { service: 'Damenhaarschnitt', price: '€55' },
  { service: 'Kinderhaarschnitt', price: '€20' },
  { service: 'Waschen, Schneiden, Föhnen', price: '€65' },
  { service: 'Färben (Ansatz)', price: '€45' },
  { service: 'Färben (Komplett)', price: 'ab €70' },
  { service: 'Strähnen', price: 'ab €80' },
  { service: 'Balayage', price: 'ab €120' },
  { service: 'Styling', price: 'ab €25' },
]

export default function Prices() {
  return (
    <section id="preise" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Preise</h2>
        <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-300">Leistung</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-300">Preis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((r, idx) => (
                <tr key={idx} className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm text-white">{r.service}</td>
                  <td className="px-6 py-4 text-sm text-rose-300">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
