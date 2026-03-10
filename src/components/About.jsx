import { CheckCircle2, Award, Users, Microscope } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const highlights = [
  { icon: Award, text: 'MBBS, M.D. Cosmetology qualified doctors' },
  { icon: Microscope, text: 'Latest laser & aesthetic technology' },
  { icon: Users, text: 'Personalized treatment plans for each patient' },
  { icon: CheckCircle2, text: 'FDA-approved, clinically proven procedures' },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" ref={ref} className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

        {/* Images */}
        <div className="relative animate-on-scroll">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/auraoutside.jpg"
              alt="Aura Clinic Exterior"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 z-20 w-52 border border-beige animate-float">
            <img
              src="/images/hairtransform.jpg"
              alt="Treatment"
              className="w-full h-28 object-cover rounded-xl mb-3 object-top"
            />
            <p className="font-body text-xs text-charcoal-light font-medium">Hair Transplant Results</p>
            <div className="flex gap-0.5 mt-1">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-gold text-xs">★</span>
              ))}
            </div>
          </div>

          {/* Gold accent */}
          <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-gold/10 blur-2xl z-0" />
          <div className="absolute top-8 -left-3 w-16 h-16 rounded-full border-2 border-gold/30 z-0" />
        </div>

        {/* Content */}
        <div>
          <p className="section-tag animate-on-scroll delay-1">About Us</p>
          <h2 className="section-title mb-5 animate-on-scroll delay-2">
            Where Science Meets
            <br />
            <span className="gold-text">Aesthetic Excellence</span>
          </h2>
          <p className="font-body text-charcoal-light leading-relaxed mb-4 animate-on-scroll delay-2">
            Aura Skin and Hair Clinic is Udaipur's premier destination for advanced
            dermatological and cosmetic care. Led by Dr. Nidheesh Agarwal (MBBS, M.D. Cosmetology),
            our clinic combines cutting-edge technology with a deeply personal approach to treatment.
          </p>
          <p className="font-body text-charcoal-light leading-relaxed mb-8 animate-on-scroll delay-3">
            From hair transplants and PRP therapy to laser treatments and anti-aging procedures,
            every treatment at Aura is designed to bring out your most confident, radiant self —
            safely and effectively.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {highlights.map(({ icon: Icon, text }, i) => (
              <div
                key={text}
                className={`flex items-start gap-3 animate-on-scroll delay-${i + 3}`}
              >
                <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={17} className="text-gold" />
                </div>
                <span className="font-body text-sm text-charcoal-light leading-relaxed">{text}</span>
              </div>
            ))}
          </div>

          <a href="#book" className="btn-gold animate-on-scroll delay-5">
            Consult Dr. Agarwal
          </a>
        </div>
      </div>
    </section>
  )
}
