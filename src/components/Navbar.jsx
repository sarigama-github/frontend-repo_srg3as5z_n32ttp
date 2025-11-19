import { useEffect, useState } from 'react'

const links = [
  { href: '#start', label: 'Startseite' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#team', label: 'Team' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#termin', label: 'Termin buchen' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#start" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-500"></div>
            <span className="text-white font-semibold tracking-wide">Salon Eleganz</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-zinc-200 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Menü">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded px-3 py-2 text-zinc-200 hover:bg-white/10">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
