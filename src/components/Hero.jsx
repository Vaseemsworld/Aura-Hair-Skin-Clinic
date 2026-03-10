import { ArrowRight, Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/auraoutside.jpg')` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22/%3E%3C/svg%3E')]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-12 w-64 h-64 rounded-full border border-gold/20 animate-float opacity-40" />
      <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full border border-gold/15 animate-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-gold/5 blur-xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-7 animate-fade-in">
            <Star size={13} className="text-gold-light fill-gold-light" />
            <span className="font-body text-sm text-white/90 tracking-wide">
              Trusted by 10,000+ Patients
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-5 animate-fade-up">
            Reveal Your
            <br />
            <span className="shimmer-gold font-semibold">Natural Beauty</span>
          </h1>

          <p className="font-body text-lg text-white/75 leading-relaxed mb-8 max-w-lg animate-fade-up delay-200">
            Advanced skin and hair treatments with expert dermatological care.
            Science-backed results, personalized for you.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300">
            <a href="#book" className="btn-gold">
              Book Appointment <ArrowRight size={17} />
            </a>
            <a href="#transformations" className="btn-white-outline">
              <Play size={15} className="fill-white" />
              View Transformations
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 animate-fade-up delay-400">
            {[
              { value: '10K+', label: 'Happy Patients' },
              { value: '15+', label: 'Years Experience' },
              { value: '50+', label: 'Treatments' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-semibold shimmer-gold">{stat.value}</div>
                <div className="font-body text-xs text-white/60 tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-80 shadow-2xl animate-float">
            <img
              src="/images/hairtransform.jpg"
              alt="Hair Transplant Transformation"
              className="w-full rounded-2xl object-cover mb-5"
              style={{ height: '220px', objectPosition: 'top' }}
            />
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/aura_logo.jpg" alt="Aura" className="w-10 h-10 rounded-full object-cover border-2 border-gold" />
              <div>
                <p className="font-body text-white text-sm font-medium">Hair Transplant</p>
                <p className="font-body text-gold-light text-xs">Dr. Nidheesh Agarwal</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={13} className="text-gold-light fill-gold-light" />
              ))}
              <span className="font-body text-white/70 text-xs ml-2">5.0 / 5.0</span>
            </div>
            <p className="font-body text-white/70 text-xs leading-relaxed">
              "Absolutely life-changing results. Highly recommend Aura Clinic!"
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float opacity-60">
        <span className="font-body text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
