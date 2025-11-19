export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Kontakt</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-3 text-zinc-300">
            <p><span className="text-white font-medium">Adresse:</span> Musterstraße 12, 12345 Musterstadt</p>
            <p><span className="text-white font-medium">Telefon:</span> 01234 567890</p>
            <p><span className="text-white font-medium">E-Mail:</span> hallo@salon-eleganz.de</p>
            <p><span className="text-white font-medium">Öffnungszeiten:</span> Mo–Fr 9–18 Uhr, Sa 9–14 Uhr</p>
            <div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999127479899!2d2.292292615674993!3d48.858373608982634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7f1f9b7d9%3A0x8e3b1df6eb3f6c!2sEiffel%20Tower!5e0!3m2!1sen!2sde!4v1616588898000!5m2!1sen!2sde"
                width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Nachricht senden</h3>
            <form className="space-y-4">
              <input className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-zinc-400" placeholder="Ihr Name" />
              <input className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-zinc-400" placeholder="E-Mail oder Telefon" />
              <textarea className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-zinc-400" placeholder="Ihre Nachricht" rows={4} />
              <button type="button" className="w-full rounded-md bg-rose-400 text-black font-semibold py-2 hover:bg-rose-300 transition">Senden</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
