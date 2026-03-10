import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/images/aura_logo.jpg"
            alt="Aura Logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-gold"
          />
          <div className="leading-tight">
            <span
              className={`font-display text-xl font-semibold block transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              AURA
            </span>
            <span
              className={`font-body text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-gold' : 'text-gold-light'
              }`}
            >
              Skin & Hair Clinic
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-gold ${
                scrolled ? 'text-charcoal-light' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919785500336"
            className={`flex items-center gap-2 font-body text-sm transition-colors ${
              scrolled ? 'text-charcoal-light' : 'text-white/80'
            } hover:text-gold`}
          >
            <Phone size={15} />
            9785500336
          </a>
          <a href="#book" className="btn-gold text-sm py-2.5 px-5">
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-charcoal' : 'text-white'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white/98 backdrop-blur-md border-t border-beige`}
      >
        <div className="px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-charcoal-light py-2 border-b border-beige hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="btn-gold mt-2 text-sm">
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  )
}
