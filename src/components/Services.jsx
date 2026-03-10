import { Scissors, Droplets, Zap, Sun, Sparkles, Clock, Palette, Wind } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    icon: Scissors,
    title: 'Hair Transplant',
    description: 'FUE & FUT techniques for permanent, natural-looking hair restoration with minimal downtime.',
    color: 'from-amber-50 to-amber-100/60',
    accent: '#C9A454',
  },
  {
    icon: Droplets,
    title: 'PRP Hair Therapy',
    description: 'Platelet-Rich Plasma injections to stimulate hair follicles and reverse hair thinning naturally.',
    color: 'from-rose-50 to-rose-100/60',
    accent: '#D4917A',
  },
  {
    icon: Zap,
    title: 'Acne Treatment',
    description: 'Comprehensive acne management combining medical-grade peels, lasers, and topical therapies.',
    color: 'from-orange-50 to-orange-100/60',
    accent: '#E8954A',
  },
  {
    icon: Sparkles,
    title: 'Skin Rejuvenation',
    description: 'Hydra facials, chemical peels, and microneedling for glowing, youthful skin.',
    color: 'from-yellow-50 to-yellow-100/60',
    accent: '#C9A454',
  },
  {
    icon: Sun,
    title: 'Laser Hair Removal',
    description: 'Long-lasting hair reduction with advanced diode laser technology, safe for all skin types.',
    color: 'from-amber-50 to-orange-100/40',
    accent: '#D4917A',
  },
  {
    icon: Clock,
    title: 'Anti-Aging Treatments',
    description: 'Botox, fillers, and thread lifts to restore youthful contours and minimize fine lines.',
    color: 'from-rose-50 to-pink-100/50',
    accent: '#C9A454',
  },
  {
    icon: Palette,
    title: 'Pigmentation Treatment',
    description: 'Q-Switch laser and chemical peels to effectively treat melasma, sun spots, and uneven skin tone.',
    color: 'from-amber-50 to-yellow-100/60',
    accent: '#E8954A',
  },
  {
    icon: Wind,
    title: 'Hair Fall Treatment',
    description: 'Advanced hair loss diagnosis with customized treatment plans including nutrition and medical therapy.',
    color: 'from-orange-50 to-amber-100/50',
    accent: '#D4917A',
  },
]

export default function Services() {
  const ref = useScrollAnimation()

  return (
    <section id="services" ref={ref} className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-tag animate-on-scroll">Our Treatments</p>
          <h2 className="section-title animate-on-scroll delay-1">
            Comprehensive Care for Every
            <br />
            <span className="gold-text">Skin & Hair Concern</span>
          </h2>
          <p className="font-body text-charcoal-light mt-4 max-w-xl mx-auto animate-on-scroll delay-2">
            From medical dermatology to advanced cosmetic procedures, we offer a full spectrum of treatments tailored to your unique needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description, color, accent }, i) => (
            <div
              key={title}
              className={`animate-on-scroll delay-${(i % 6) + 1} group relative bg-gradient-to-br ${color} border border-white/80 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 cursor-pointer overflow-hidden`}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `radial-gradient(circle at 30% 30%, ${accent}15, transparent 70%)` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${accent}18` }}
              >
                <Icon size={22} style={{ color: accent }} />
              </div>

              <h3 className="font-display text-lg font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                {title}
              </h3>
              <p className="font-body text-sm text-charcoal-light leading-relaxed">
                {description}
              </p>

              <div
                className="mt-4 inline-flex items-center gap-1 text-xs font-body font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                style={{ color: accent }}
              >
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
