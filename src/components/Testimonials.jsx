import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Udaipur',
    treatment: 'Hair Transplant',
    rating: 5,
    text: 'Dr. Agarwal changed my life. After struggling with hair loss for years, the FUE transplant gave me natural-looking results I never imagined possible. The entire team was professional and caring throughout.',
    initial: 'P',
    color: 'from-amber-400 to-orange-400',
  },
  {
    name: 'Rahul Mehta',
    location: 'Jaipur',
    treatment: 'Acne Treatment',
    rating: 5,
    text: 'I had severe acne for over a decade. After a customized treatment plan from Aura Clinic, my skin cleared up within 3 months. The laser and chemical peel combination worked wonders!',
    initial: 'R',
    color: 'from-rose-400 to-pink-500',
  },
  {
    name: 'Sunita Jain',
    location: 'Udaipur',
    treatment: 'Skin Rejuvenation',
    rating: 5,
    text: 'The hydra facial and microneedling sessions gave me the glow I had in my 20s! Staff is extremely polite and the clinic is spotlessly clean. Truly a premium experience.',
    initial: 'S',
    color: 'from-gold to-amber-500',
  },
  {
    name: 'Amit Verma',
    location: 'Kota',
    treatment: 'Laser Hair Removal',
    rating: 5,
    text: 'Quick, painless, and effective. After 6 sessions, I\'m 95% hair-free. Great value for money and the doctor explained every step. Very happy with Aura!',
    initial: 'A',
    color: 'from-amber-500 to-yellow-500',
  },
]

export default function Testimonials() {
  const ref = useScrollAnimation()
  const [active, setActive] = useState(0)

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(a => (a + 1) % testimonials.length)

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-tag animate-on-scroll">Patient Stories</p>
          <h2 className="section-title animate-on-scroll delay-1">
            Voices of Our
            <br />
            <span className="gold-text">Happy Patients</span>
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map(({ name, location, treatment, rating, text, initial, color }, i) => (
            <div
              key={name}
              className={`animate-on-scroll delay-${i + 1} group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 border border-beige/50 overflow-hidden`}
            >
              {/* Quote icon */}
              <Quote size={32} className="text-gold/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="font-body text-sm text-charcoal-light leading-relaxed mb-5 relative z-10">
                "{text}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-display font-semibold text-sm flex-shrink-0`}>
                  {initial}
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal text-sm">{name}</p>
                  <p className="font-body text-xs text-gold">{treatment} · {location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-beige/50 mx-2">
            <Quote size={32} className="text-gold/20 absolute top-4 right-4" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: testimonials[active].rating }).map((_, j) => (
                <Star key={j} size={13} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="font-body text-sm text-charcoal-light leading-relaxed mb-5">
              "{testimonials[active].text}"
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-display font-semibold text-sm`}>
                {testimonials[active].initial}
              </div>
              <div>
                <p className="font-body font-semibold text-charcoal text-sm">{testimonials[active].name}</p>
                <p className="font-body text-xs text-gold">{testimonials[active].treatment} · {testimonials[active].location}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white border border-beige flex items-center justify-center hover:border-gold hover:text-gold transition-colors shadow-sm">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-gold w-5' : 'bg-beige'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white border border-beige flex items-center justify-center hover:border-gold hover:text-gold transition-colors shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Rating summary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 animate-on-scroll">
          <div className="text-center">
            <div className="font-display text-5xl font-light shimmer-gold">4.9</div>
            <div className="flex justify-center gap-0.5 my-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-gold fill-gold" />)}
            </div>
            <p className="font-body text-xs text-charcoal-light">Google Rating</p>
          </div>
          <div className="h-px w-24 sm:h-16 sm:w-px bg-beige" />
          <div className="text-center">
            <div className="font-display text-5xl font-light shimmer-gold">500+</div>
            <p className="font-body text-xs text-charcoal-light mt-1">Verified Reviews</p>
          </div>
          <div className="h-px w-24 sm:h-16 sm:w-px bg-beige" />
          <div className="text-center">
            <div className="font-display text-5xl font-light shimmer-gold">98%</div>
            <p className="font-body text-xs text-charcoal-light mt-1">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
