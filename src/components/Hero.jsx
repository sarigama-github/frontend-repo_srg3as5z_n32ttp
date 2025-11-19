export default function Hero() {
  return (
    <section id="start" className="relative pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWxvbnxlbnwwfDB8fHwxNzYzNTAzNjA0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Salon" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24 sm:py-32">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">Ihr moderner Friseursalon in der Stadt</h1>
          <p className="mt-6 text-lg text-zinc-200">Schnitt, Farbe, Styling – präzise, individuell und mit Liebe zum Detail.</p>
          <div className="mt-8 flex gap-4">
            <a href="#termin" className="inline-flex items-center rounded-md bg-rose-400 px-6 py-3 text-black font-semibold shadow hover:bg-rose-300 transition">Jetzt Termin vereinbaren</a>
            <a href="#leistungen" className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-white hover:bg-white/10 transition">Leistungen ansehen</a>
          </div>
        </div>
      </div>
    </section>
  )
}
