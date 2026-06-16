import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander Hughes',
    role: 'Investment Banker, Wall Street',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "IronPulse transformed not just my physique but my entire mindset. In 6 months I dropped 28 lbs and hit a 300lb bench for the first time. The coaching here is genuinely world-class — you feel it every single session.",
  },
  {
    name: 'Samantha Blake',
    role: 'Attorney, NYC',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "As a busy professional, I needed a gym that respected my time while delivering serious results. IronPulse does exactly that. Jason's programming is incredible. I've never felt stronger or more confident.",
  },
  {
    name: 'Marcus Donovan',
    role: 'Former College Athlete',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "I've trained at gyms across the country — nothing compares to IronPulse. The equipment quality is unmatched, the community is motivating, and the coaches are elite. This place redefines what a gym can be.",
  },
  {
    name: 'Rachel Thornton',
    role: 'Tech Executive',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "Michael's personal coaching program gave me a completely different relationship with fitness. I came in wanting to lose weight and left with a love for strength training. Best investment I've made in myself.",
  },
  {
    name: 'James Whitfield',
    role: 'Entrepreneur',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The Premium membership is worth every dollar. Recovery spa, custom nutrition plans, personal coaching — IronPulse treats fitness like the luxury experience it should be. I won't train anywhere else.",
  },
  {
    name: 'Priya Nair',
    role: 'Surgeon, Manhattan',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The science-backed approach here is unmatched. Every program is evidence-based and the coaches genuinely understand human performance. I've hit personal records every month since joining.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(57,255,20,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-poppins text-xs font-500 text-brand-green tracking-[0.3em] uppercase mb-4 animate-on-scroll">
            Member Stories
          </p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white animate-on-scroll stagger-1">
            Real Results. <span className="text-neon">Real People.</span>
          </h2>
          <p className="font-poppins text-white/55 max-w-xl mx-auto mt-4 text-base animate-on-scroll stagger-2">
            Hear directly from the members who've transformed their lives at IronPulse.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-dark rounded-sm p-6 flex flex-col gap-4 relative animate-on-scroll stagger-${Math.min(i + 1, 5)}`}
            >
              <Quote size={32} className="text-brand-green/15 absolute top-5 right-5" fill="currentColor" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={13} fill="#39FF14" className="text-brand-green" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-poppins text-sm text-white/70 leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-brand-dark-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-green/30 flex-shrink-0"
                />
                <div>
                  <div className="font-montserrat font-700 text-sm text-white">{t.name}</div>
                  <div className="font-poppins text-xs text-brand-green mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
