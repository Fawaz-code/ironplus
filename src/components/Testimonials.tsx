import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander Hughes',
    role: 'Investment Banker, Wall Street',
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "IronPulse transformed not just my physique but my entire mindset. In 6 months I dropped 28 lbs and hit a 300lb bench for the first time. The coaching here is genuinely world-class — you feel it every single session.",
  },
  {
    name: 'Samantha Blake',
    role: 'Attorney, NYC',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "As a busy professional, I needed a gym that respected my time while delivering serious results. IronPulse does exactly that. Jason's programming is incredible. I've never felt stronger or more confident.",
  },
  {
    name: 'Marcus Donovan',
    role: 'Former College Athlete',
    avatar:
      'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "I've trained at gyms across the country — nothing compares to IronPulse. The equipment quality is unmatched, the community is motivating, and the coaches are elite. This place redefines what a gym can be.",
  },
  {
    name: 'Rachel Thornton',
    role: 'Tech Executive',
    avatar:
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "Michael's personal coaching program gave me a completely different relationship with fitness. I came in wanting to lose weight and left with a love for strength training. Best investment I've made in myself.",
  },
  {
    name: 'James Whitfield',
    role: 'Entrepreneur',
    avatar:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: "The Premium membership is worth every dollar. Recovery spa, custom nutrition plans, personal coaching — IronPulse treats fitness like the luxury experience it should be. I won't train anywhere else.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = (dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((c) =>
        dir === 'next' ? (c + 1) % testimonials.length : (c - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => go('next'), 6000);
    return () => clearInterval(timer);
  });

  const t = testimonials[current];

  return (
    <section className="py-16 sm:py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(57,255,20,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-poppins text-xs font-500 text-brand-green tracking-[0.3em] uppercase mb-4 animate-on-scroll">
            Member Stories
          </p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white animate-on-scroll stagger-1">
            Real Results. <span className="text-neon">Real People.</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className={`bg-brand-dark-card border border-brand-dark-border rounded-sm p-5 sm:p-8 lg:p-12 relative transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          } animate-on-scroll`}
        >
          <Quote
            size={60}
            className="text-brand-green/10 absolute top-6 right-8 hidden md:block"
            fill="currentColor"
          />

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Avatar & info */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-green/40 mx-auto lg:mx-0">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="mt-3">
                <div className="font-montserrat font-700 text-white text-base">{t.name}</div>
                <div className="font-poppins text-brand-green text-xs mt-0.5">{t.role}</div>
              </div>
              <div className="flex gap-1 mt-2 justify-center lg:justify-start">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} fill="#39FF14" className="text-brand-green" />
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="flex-1 mt-4 lg:mt-0">
              <p className="font-poppins text-white/75 text-base sm:text-lg leading-relaxed italic">
                "{t.text}"
              </p>
            </blockquote>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => go('prev')}
            className="w-11 h-11 border border-brand-dark-border rounded-full flex items-center justify-center text-white/60 hover:border-brand-green hover:text-brand-green transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (!isAnimating) { setIsAnimating(true); setTimeout(() => { setCurrent(i); setIsAnimating(false); }, 300); } }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-brand-green' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go('next')}
            className="w-11 h-11 border border-brand-dark-border rounded-full flex items-center justify-center text-white/60 hover:border-brand-green hover:text-brand-green transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
