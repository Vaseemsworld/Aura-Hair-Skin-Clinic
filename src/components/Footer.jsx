import { Phone, MapPin, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Appointment', href: '#book' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Hair Transplant',
  'PRP Therapy',
  'Acne Treatment',
  'Laser Hair Removal',
  'Pigmentation',
  'Anti-Aging',
  'Skin Rejuvenation',
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/aura_logo.jpg" alt="Aura" className="w-12 h-12 rounded-full object-cover border-2 border-gold/50" />
              <div>
                <p className="font-display text-xl font-semibold text-white">AURA</p>
                <p className="font-body text-[10px] text-gold tracking-[0.15em] uppercase">Skin & Hair Clinic</p>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-5">
              Advanced dermatology and cosmetic treatments in the heart of Udaipur, Rajasthan.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-gold/20 hover:text-gold border border-white/10 hover:border-gold/30 flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-4 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-4 border-b border-white/10 pb-2">Treatments</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-4 border-b border-white/10 pb-2">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  221, Near Hanuman Temple Street,<br />Sardarpura, Udaipur — 313001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold flex-shrink-0" />
                <a href="tel:+919785500336" className="font-body text-sm text-white/50 hover:text-gold transition-colors">
                  +91 9785500336
                </a>
              </div>
              <div className="pt-2">
                <p className="font-body text-xs text-white/30 uppercase tracking-wider mb-2">Dr. Nidheesh Agarwal</p>
                <p className="font-body text-xs text-white/40">MBBS, M.D. (Cosmetology)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} Aura Skin and Hair Clinic. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/20">
            Designed with ❤️ for better skin health
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-11 h-11 bg-gold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} className="text-white" />
      </button>
    </footer>
  )
}
