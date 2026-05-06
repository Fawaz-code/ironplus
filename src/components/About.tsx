import { Award, Dumbbell, Target, Apple, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Trainers',
    desc: 'Every coach holds elite international certifications — NSCA, ACE, and NASM — with proven track records.',
  },
  {
    icon: Dumbbell,
    title: 'Advanced Equipment',
    desc: 'Over $2M invested in state-of-the-art machines, free weights, and performance tech platforms.',
  },
  {
    icon: Target,
    title: 'Custom Workout Plans',
    desc: 'AI-assisted programming tailored to your body type, goals, and performance data.',
  },
  {
    icon: Apple,
    title: 'Nutrition Guidance',
    desc: 'In-house dietitians craft meal plans that fuel every session and accelerate your transformation.',
  },
  {
    icon: Users,
    title: 'Elite Community',
    desc: 'Train alongside athletes, executives, and world-class performers who push each other higher.',
  },
  {
    icon: Clock,
    title: 'Extended Hours',
    desc: 'Open 5 AM to midnight on weekdays — because champions train on their own schedule.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="font-poppins text-xs font-500 text-brand-green tracking-[0.3em] uppercase mb-4 animate-on-scroll-left">
              Who We Are
            </p>
            <h2 className="section-title text-4xl sm:text-5xl text-white leading-tight mb-6 animate-on-scroll-left stagger-1">
              More Than a Gym —<br />
              <span className="text-neon">A Performance Lab</span>
            </h2>
            <p className="font-poppins text-white/60 text-base leading-relaxed mb-6 animate-on-scroll-left stagger-2">
              Founded in 2012 on Madison Avenue, IronPulse Elite Fitness was built for those who refuse to settle.
              We fuse cutting-edge sports science with individualized coaching to produce measurable, lasting results.
            </p>
            <p className="font-poppins text-white/60 text-base leading-relaxed mb-8 animate-on-scroll-left stagger-3">
              Our facility spans 18,000 sq ft across three performance floors, housing Olympic lifting platforms,
              cardio theatres, a recovery spa, and private coaching suites — all in the heart of Midtown Manhattan.
            </p>
            <div className="flex items-center gap-6 animate-on-scroll-left stagger-4">
              <div className="border-l-2 border-brand-green pl-4">
                <div className="font-montserrat font-900 text-3xl text-white">12+</div>
                <div className="font-poppins text-xs text-white/50 uppercase tracking-wider">Years Strong</div>
              </div>
              <div className="border-l-2 border-brand-green pl-4">
                <div className="font-montserrat font-900 text-3xl text-white">18K</div>
                <div className="font-poppins text-xs text-white/50 uppercase tracking-wider">Sq Ft Facility</div>
              </div>
              <div className="border-l-2 border-brand-green pl-4">
                <div className="font-montserrat font-900 text-3xl text-white">5K+</div>
                <div className="font-poppins text-xs text-white/50 uppercase tracking-wider">Active Members</div>
              </div>
            </div>
          </div>

          {/* Right: image + overlay card */}
          <div className="relative animate-on-scroll-right">
            <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="IronPulse Elite gym interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-brand-dark-card border border-brand-dark-border p-5 rounded-sm shadow-card max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <Award size={20} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-montserrat font-700 text-sm text-white">NSCA Certified</div>
                  <div className="font-poppins text-xs text-white/50">All coaching staff</div>
                </div>
              </div>
              <div className="h-0.5 bg-brand-dark-border my-3" />
              <div className="font-poppins text-xs text-white/60 leading-relaxed">
                Every trainer undergoes 200+ hours of in-house training before their first session.
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card-dark p-6 rounded-sm animate-on-scroll stagger-${Math.min(i + 1, 5)}`}
            >
              <div className="w-12 h-12 bg-brand-green/10 border border-brand-green/20 rounded flex items-center justify-center mb-4">
                <f.icon size={22} className="text-brand-green" />
              </div>
              <h3 className="font-montserrat font-700 text-base text-white mb-2">{f.title}</h3>
              <p className="font-poppins text-sm text-white/55 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
