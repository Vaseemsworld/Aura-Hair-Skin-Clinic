import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const treatments = [
  "Hair Transplant",
  "PRP Hair Therapy",
  "Acne Treatment",
  "Skin Rejuvenation",
  "Laser Hair Removal",
  "Anti-Aging / Botox",
  "Pigmentation Treatment",
  "Hair Fall Treatment",
  "Other / Consultation",
];

export default function BookAppointment() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="book"
      ref={ref}
      className="py-24 bg-charcoal relative overflow-hidden"
    >
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-2">
            <p className="section-tag text-gold animate-on-scroll">
              Get Started
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-5 animate-on-scroll delay-1">
              Book Your
              <br />
              <span className="shimmer-gold font-semibold">Consultation</span>
            </h2>
            <p className="font-body text-white/60 leading-relaxed mb-6 animate-on-scroll delay-2">
              Take the first step toward your transformation. Our experts will
              craft a personalised treatment plan just for you.
            </p>
            <div className="space-y-3 animate-on-scroll delay-3">
              {[
                "Free initial consultation",
                "Expert medical assessment",
                "Customised treatment plan",
                "Flexible payment options",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                  <span className="font-body text-sm text-white/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll delay-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">
                    Appointment Requested!
                  </h3>
                  <p className="font-body text-white/60 text-sm">
                    We'll call you within 2 hours to confirm your appointment.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        phone: "",
                        treatment: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-gold text-sm font-body hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-black font-body text-sm placeholder:text-grey/25 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 9000000000"
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-black font-body text-sm placeholder:text-grey/25 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-2">
                      Treatment Interested In *
                    </label>
                    <select
                      name="treatment"
                      required
                      value={form.treatment}
                      onChange={handleChange}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    >
                      <option value="" className="bg-charcoal">
                        Select a treatment...
                      </option>
                      {treatments.map((t) => (
                        <option key={t} value={t} className="bg-charcoal">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs text-white/50 uppercase tracking-wider block mb-2">
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your concern or ask us anything..."
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-black font-body text-sm placeholder:text-grey/25 focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold justify-center gap-2 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Book Consultation <Send size={17} />
                      </>
                    )}
                  </button>

                  <p className="font-body text-center text-white/30 text-xs">
                    By submitting, you agree to be contacted by our team. No
                    spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
