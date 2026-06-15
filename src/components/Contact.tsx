import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);

    const waText = encodeURIComponent(
      `*New Message from IronPulse Website*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email}\n\n` +
      `*Message:*\n${form.message}`
    );
    const waUrl = `https://wa.me/923103109222?text=${waText}`;

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-poppins text-xs font-500 text-brand-green tracking-[0.3em] uppercase mb-4 animate-on-scroll">
            Get In Touch
          </p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white animate-on-scroll stagger-1">
            Start Your <span className="text-neon">Journey Today</span>
          </h2>
          <p className="font-poppins text-white/55 max-w-xl mx-auto mt-4 text-base animate-on-scroll stagger-2">
            Our team is ready to help you find the perfect membership. Reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: info */}
          <div className="animate-on-scroll-left">
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: 'Location',
                  value: '245 Madison Ave, New York, NY 10016, USA',
                },
                { icon: Phone, label: 'Phone', value: '+1 (212) 555-7890' },
                { icon: Mail, label: 'Email', value: 'contact@ironpulseelite.com' },
                {
                  icon: Clock,
                  label: 'Hours',
                  value: 'Mon–Sat: 5:00 AM – 12:00 AM\nSunday: 7:00 AM – 8:00 PM',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-brand-dark-card border border-brand-dark-border rounded flex items-center justify-center flex-shrink-0 group-hover:border-brand-green/40 transition-colors duration-300">
                    <item.icon size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <div className="font-montserrat font-700 text-sm text-white/50 uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="font-poppins text-white/80 text-sm leading-relaxed whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="mt-8 rounded-sm overflow-hidden border border-brand-dark-border h-[180px] sm:h-[220px]">
              <iframe
                title="IronPulse Elite Fitness Location"
                src="https://maps.google.com/maps?q=245+Madison+Ave,+New+York,+NY&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="animate-on-scroll-right">
            <div className="bg-brand-dark-card border border-brand-dark-border rounded-sm p-5 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={56} className="text-brand-green mb-4" />
                  <h3 className="font-montserrat font-800 text-2xl text-white mb-2">Message Sent!</h3>
                  <p className="font-poppins text-white/55 text-sm">
                    We'll get back to you within 24 hours. Ready to start? Check your inbox.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                    className="mt-6 btn-outline-neon px-6 py-2.5 rounded-sm text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-montserrat font-600 text-xs text-white/50 uppercase tracking-wider block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alex Johnson"
                      className="w-full bg-brand-black border border-brand-dark-border rounded-sm px-4 py-3 font-poppins text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-green/60 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-montserrat font-600 text-xs text-white/50 uppercase tracking-wider block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full bg-brand-black border border-brand-dark-border rounded-sm px-4 py-3 font-poppins text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-green/60 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-montserrat font-600 text-xs text-white/50 uppercase tracking-wider block mb-2">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      placeholder="Tell us about your fitness goals..."
                      className="w-full bg-brand-black border border-brand-dark-border rounded-sm px-4 py-3 font-poppins text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-green/60 transition-colors duration-200 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-neon w-full py-4 rounded-sm text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-brand-black/40 border-t-brand-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
