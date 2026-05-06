import { Flame, Heart, Zap, Dumbbell, User, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    tag: 'POWERLIFTING',
    desc: 'Build raw, functional strength with periodized barbell programming, Olympic lifting, and targeted hypertrophy work.',
    image:
      'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
    sessions: '4x / week',
    level: 'All Levels',
  },
  {
    icon: Heart,
    title: 'Cardio Conditioning',
    tag: 'HIIT & ENDURANCE',
    desc: 'Push your cardiovascular limits with high-intensity intervals, rowing circuits, and metabolic conditioning.',
    image:
      'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
    sessions: '5x / week',
    level: 'Intermediate',
  },
  {
    icon: Flame,
    title: 'Fat Loss Program',
    tag: 'BODY RECOMPOSITION',
    desc: 'Science-backed fat loss combining nutrition strategy, resistance training, and metabolic finishers for lasting change.',
    image:
      'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600',
    sessions: '3–5x / week',
    level: 'All Levels',
  },
  {
    icon: Zap,
    title: 'Muscle Building',
    tag: 'HYPERTROPHY',
    desc: 'Evidence-based hypertrophy protocols engineered to maximize muscle growth through progressive overload.',
    image:
      'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
    sessions: '4–6x / week',
    level: 'Beginner–Advanced',
  },
  {
    icon: User,
    title: 'Personal Coaching',
    tag: '1-ON-1 PREMIUM',
    desc: 'Fully individualized coaching with dedicated trainers — your goals, your schedule, your transformation.',
    image:
      'https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=600',
    sessions: 'Flexible',
    level: 'Any Level',
  },
];

export default function Programs() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="programs" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-poppins text-xs font-500 text-brand-green tracking-[0.3em] uppercase mb-4 animate-on-scroll">
            What We Offer
          </p>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-5 animate-on-scroll stagger-1">
            World-Class <span className="text-neon">Programs</span>
          </h2>
          <p className="font-poppins text-white/55 max-w-xl mx-auto text-base leading-relaxed animate-on-scroll stagger-2">
            Every program is engineered by performance scientists and led by elite coaches — designed to produce elite results.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={`group relative rounded-sm overflow-hidden cursor-pointer animate-on-scroll stagger-${Math.min(i + 1, 5)}`}
              style={{ aspectRatio: i === 4 ? 'auto' : undefined }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-card via-brand-dark-card/40 to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-brand-green/20 border border-brand-green/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-montserrat font-700 text-[10px] text-brand-green tracking-widest">
                    {prog.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="bg-brand-dark-card border border-brand-dark-border border-t-0 p-5 transition-all duration-300 group-hover:border-brand-green/30">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-montserrat font-800 text-lg text-white">{prog.title}</h3>
                  <div className="w-8 h-8 bg-brand-black rounded flex items-center justify-center flex-shrink-0 ml-2">
                    <prog.icon size={15} className="text-brand-green" />
                  </div>
                </div>
                <p className="font-poppins text-sm text-white/55 leading-relaxed mb-4">{prog.desc}</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-poppins text-xs text-white/40">
                    <span className="text-brand-green font-600">Sessions:</span> {prog.sessions}
                  </span>
                  <span className="font-poppins text-xs text-white/40">
                    <span className="text-brand-green font-600">Level:</span> {prog.level}
                  </span>
                </div>
                <button
                  onClick={() => scrollTo('pricing')}
                  className="flex items-center gap-1.5 font-montserrat font-700 text-xs text-brand-green tracking-wide hover:gap-3 transition-all duration-200 group/btn"
                >
                  Enroll Now
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
