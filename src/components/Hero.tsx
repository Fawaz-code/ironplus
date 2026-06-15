import { ChevronDown, MessageCircle, Play } from 'lucide-react';

const WA_LINK =
  'https://wa.me/923103109222?text=Hi%2C%20I%27m%20interested%20in%20joining%20IronPulse%20Elite%20Fitness.%20Please%20share%20details.';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchpriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative neon line left */}
      <div className="absolute left-0 top-1/4 w-1 h-48 bg-gradient-to-b from-transparent via-brand-green to-transparent opacity-60 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 rounded-full px-4 py-1.5 mb-6 animate-on-scroll">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="font-poppins text-xs font-500 text-brand-green tracking-widest uppercase">
            New York's #1 Premium Fitness Studio
          </span>
        </div>

        <h1 className="section-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-6 animate-on-scroll stagger-1">
          Transform Your Body
          <br />
          <span className="text-neon neon-glow">Into Elite Strength</span>
        </h1>

        <p className="font-poppins text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 animate-on-scroll stagger-2">
          Forge your greatest self inside New York's most advanced fitness facility.
          World-class trainers. Cutting-edge equipment. Relentless results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-on-scroll stagger-3">
          <button
            onClick={() => scrollTo('pricing')}
            className="btn-neon px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm text-sm sm:text-base w-full sm:w-auto"
          >
            Join Now — From $29/mo
          </button>

          <button
            onClick={() => scrollTo('programs')}
            className="btn-outline-neon px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm text-sm sm:text-base w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Play size={16} fill="currentColor" />
            Start Free Trial
          </button>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-montserrat font-700 text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-4 sm:gap-8 md:gap-16 mt-12 sm:mt-16 animate-on-scroll stagger-4">
          {[
            { value: '5,000+', label: 'Members' },
            { value: '25+', label: 'Elite Trainers' },
            { value: '98%', label: 'Satisfaction' },
            { value: '12+', label: 'Years of Excellence' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-montserrat font-900 text-xl sm:text-2xl md:text-3xl text-brand-green neon-glow">
                {stat.value}
              </div>
              <div className="font-poppins text-[10px] sm:text-xs text-white/50 tracking-wider uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll down */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-green animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
