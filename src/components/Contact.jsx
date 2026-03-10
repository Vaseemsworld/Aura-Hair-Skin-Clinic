import { MapPin, Phone, Clock, MessageCircle, Mail, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const ref = useScrollAnimation()

  return (
    <section id="contact" ref={ref} className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="section-tag animate-on-scroll">Visit Us</p>
          <h2 className="section-title animate-on-scroll delay-1">
            Find Aura Clinic
            <br />
            <span className="gold-text">in Udaipur</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Address */}
            <div className="animate-on-scroll delay-1 group bg-white rounded-2xl p-5 shadow-sm border border-beige hover:shadow-md hover:border-gold/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal text-sm mb-1">Clinic Address</p>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">
                    221, Near Hanuman Temple Street,<br />
                    Sardarpura, Udaipur,<br />
                    Rajasthan — 313001
                  </p>
                  <a
                    href="https://maps.google.com/?q=Aura+Skin+and+Hair+Clinic+Udaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold text-xs mt-2 hover:underline font-body"
                  >
                    Get Directions <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="animate-on-scroll delay-2 group bg-white rounded-2xl p-5 shadow-sm border border-beige hover:shadow-md hover:border-gold/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-body font-semibold text-charcoal text-sm mb-1">Call / WhatsApp</p>
                  <a href="tel:+919785500336" className="font-body text-charcoal-light text-sm hover:text-gold transition-colors">
                    +91 9785500336
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="animate-on-scroll delay-3 bg-white rounded-2xl p-5 shadow-sm border border-beige">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div className="flex-1">
                  <p className="font-body font-semibold text-charcoal text-sm mb-2">Working Hours</p>
                  <div className="space-y-1">
                    {[
                      { day: 'Mon – Fri', time: '10:00 AM – 7:00 PM' },
                      { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
                      { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
                    ].map(({ day, time }) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="font-body text-xs text-charcoal-light">{day}</span>
                        <span className="font-body text-xs text-gold font-medium">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919785500336?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aura%20Skin%20and%20Hair%20Clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll delay-4 flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-medium py-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 animate-on-scroll delay-2">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-beige h-[420px]">
              <iframe
                title="Aura Skin and Hair Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.8!2d73.7125!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56b2bff9dbd%3A0x5f4b9b6c0b5b5e0e!2sSardarpura%2C%20Udaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
