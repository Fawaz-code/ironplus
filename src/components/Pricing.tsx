import { Check, Star, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const plans = [
  {
    name: 'Basic',
    price: 29,
    period: 'month',
    tagline: 'Start your journey',
    features: [
      'Full gym floor access',
      'Locker room & showers',
      'Cardio equipment access',
      'Group fitness classes (2/week)',
      'App-based workout tracking',
    ],
    missing: ['Personal coaching sessions', 'Nutrition consultation', 'Recovery spa access'],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: 59,
    period: 'month',
    tagline: 'Most popular choice',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      '2 personal sessions / month',
      'Nutrition consultation (monthly)',
      'Priority equipment booking',
      'Lounge & café access',
    ],
    missing: ['Recovery spa access'],
    highlighted: true,
    cta: 'Join Standard',
  },
  {
    name: 'Premium',
    price: 99,
    period: 'month',
    tagline: 'The full experience',
    features: [
      'Everything in Standard',
      '8 personal coaching sessions',
      'Full recovery spa & cryotherapy',
      'Custom nutrition & meal plans',
      'Dedicated locker & towel service',
      'Guest passes (2/month)',
      'Priority booking — all services',
    ],
    missing: [],
    highlighted: false,
    cta: 'Go Premium',
  },
];

const WA_LINK =
  'https://wa.me/923103109222?text=Hi%2C%20I%27m%20interested%20in%20joining%20IronPulse%20Elite%20Fitness.%20Please%20share%20details.';

export default function Pricing() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollBy = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-poppins text-xs font-500 text-brand-green tracking-[0.3em] uppercase mb-4 animate-on-scroll">
            Membership Plans
          </p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-5 animate-on-scroll stagger-1">
            Simple, <span className="text-neon">Transparent</span> Pricing
          </h2>
          <p className="font-poppins text-white/55 max-w-xl mx-auto text-base animate-on-scroll stagger-2">
            No hidden fees. No lock-in contracts. Cancel anytime — we earn your loyalty through results.
          </p>
        </div>

        {/* Scroll container wrapper */}
        <div className="relative">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollBy('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-brand-dark-card border border-brand-green/40 rounded-full flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-brand-black transition-all duration-200 shadow-lg md:hidden"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollBy('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-brand-dark-card border border-brand-green/40 rounded-full flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-brand-black transition-all duration-200 shadow-lg md:hidden"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Desktop grid / Mobile horizontal scroll */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 pt-6 md:pt-5"
          >
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-sm animate-on-scroll stagger-${i + 1} min-w-[280px] sm:min-w-[300px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink ${
                plan.highlighted
                  ? 'bg-brand-dark-card border-2 border-brand-green shadow-neon'
                  : 'card-dark'
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-brand-green px-3 sm:px-5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 shadow-neon-sm whitespace-nowrap">
                  <Star size={10} fill="currentColor" className="text-brand-black sm:w-3 sm:h-3" />
                  <span className="font-montserrat font-800 text-[9px] sm:text-[11px] text-brand-black tracking-widest uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap
                      size={16}
                      className={plan.highlighted ? 'text-brand-green' : 'text-white/30'}
                      fill={plan.highlighted ? 'currentColor' : 'none'}
                    />
                    <span
                      className={`font-montserrat font-800 text-xs tracking-[0.25em] uppercase ${
                        plan.highlighted ? 'text-brand-green' : 'text-white/50'
                      }`}
                    >
                      {plan.name}
                    </span>
                  </div>
                  <div className="flex items-end gap-1 mt-3">
                    <span className="font-montserrat font-900 text-5xl text-white">${plan.price}</span>
                    <span className="font-poppins text-white/40 text-sm mb-2">/{plan.period}</span>
                  </div>
                  <p className="font-poppins text-white/50 text-sm mt-1">{plan.tagline}</p>
                </div>

                <div className="h-px bg-brand-dark-border mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-brand-green" strokeWidth={3} />
                      </div>
                      <span className="font-poppins text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-3 opacity-40">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2.5 h-px bg-white/30" />
                      </div>
                      <span className="font-poppins text-sm text-white/40 line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3.5 rounded-sm font-montserrat font-700 text-sm tracking-wide transition-all duration-300 ${
                      plan.highlighted
                        ? 'btn-neon'
                        : 'btn-outline-neon'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>{/* end scroll wrapper */}

        <p className="text-center font-poppins text-white/35 text-sm mt-8 animate-on-scroll">
          All memberships include access to the member app, progress tracking, and community challenges.
          Student discounts available — inquire at the front desk.
        </p>
      </div>
    </section>
  );
}
