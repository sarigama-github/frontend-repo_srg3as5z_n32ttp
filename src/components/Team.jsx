const team = [
  { name: 'Lea', role: 'Master Stylistin', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Mara', role: 'Coloristin', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop' },
  { name: 'Jana', role: 'Stylistin', img: 'https://images.unsplash.com/photo-1558222217-073fddbdb1b4?q=80&w=800&auto=format&fit=crop' },
  { name: 'Lena', role: 'Azubi', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Unser Team</h2>
        <p className="mt-2 text-zinc-300">Lernen Sie die Köpfe hinter Ihrem Look kennen.</p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map(m => (
            <div key={m.name} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={m.img} alt={m.name} className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-white font-semibold">{m.name}</h3>
                <p className="text-sm text-zinc-300">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
