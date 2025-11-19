import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Prices from './components/Prices'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Prices />
      <Team />
      <Gallery />
      <Booking />
      <Contact />
      <footer className="border-t border-white/10 py-8 text-center text-zinc-400">
        © {new Date().getFullYear()} Salon Eleganz — Alle Rechte vorbehalten
      </footer>
    </div>
  )
}

export default App
