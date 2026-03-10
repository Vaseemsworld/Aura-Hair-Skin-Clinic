import { Shield, Cpu, Leaf, Heart, Users, Award } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const reasons = [
  {
    icon: Award,
    title: 'Expert Dermatologists',
    desc: 'Led by Dr. Nidheesh Agarwal, MBBS, M.D. Cosmetology — one of Rajasthan\'s most trusted skin specialists.',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    desc: 'State-of-the-art laser systems, PRP centrifuges, and FDA-cleared devices for superior outcomes.',
  },
  {
    icon: Shield,
    title: 'Safe & Proven',
    desc: 'All treatments follow evidence-based protocols with stringent safety standards and follow-up care.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    desc: 'Every patient receives a custom treatment plan. No cookie-cutter solutions — only what\'s right for you.',
  },
  {
    icon: Users,
    title: '10,000+ Happy Clients',
    desc: 'Over a decade of transforming lives. Our patient satisfaction rate speaks for itself.',
  },
  {
    icon: Leaf,
    title: 'Holistic Approach',
    desc: 'We address root causes with lifestyle guidance, nutrition counselling, and long-term skin wellness.',
  },
]

export default function WhyChooseUs() {
  const ref = useScrollAnimation()

  return (
    <section id="why" ref={ref} className="py-24 bg-ivory relative overflow-hidden">
      {/* Gold blob background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-blush/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="text-center mb-14">
          <p className="section-tag animate-on-scroll">Why Aura</p>
          <h2 className="section-title animate-on-scroll delay-1">
            The Aura Difference —
            <br />
            <span className="gold-text">Excellence in Every Detail</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`animate-on-scroll delay-${(i % 5) + 1} group relative bg-white/80 backdrop-blur-sm border border-beige rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 overflow-hidden`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">{desc}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gold/5 rounded-tl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
