import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Jason Miller',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting & Olympic Lifting',
    exp: '14 Years',
    cert: 'NSCA-CSCS, USAW-L2',
    image:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=500',
    bio: 'Former collegiate athlete turned elite strength coach. Jason has trained 3 national record holders and 200+ competitive athletes.',
  },
  {
    name: 'David Carter',
    role: 'Fitness Expert',
    specialty: 'Body Transformation & HIIT',
    exp: '11 Years',
    cert: 'NASM-CPT, Precision Nutrition L2',
    image:
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500',
    bio: 'David specializes in body recomposition and metabolic conditioning. His 12-week transformation protocols are legendary in the industry.',
  },
  {
    name: 'Michael Ross',
    role: 'Personal Training Director',
    specialty: 'Executive Wellness & Corrective Exercise',
    exp: '9 Years',
    cert: 'ACE-CPT, FMS Certified',
    image:
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=500',
    bio: 'Michael works with C-suite executives and high-performers seeking longevity, mobility, and peak performance without injury.',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-16 sm:py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-poppins text-xs font-500 text-brand-green tracking-[0.3em] uppercase mb-4 animate-on-scroll">
            Meet the Team
          </p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-5 animate-on-scroll stagger-1">
            Elite <span className="text-neon">Coaches</span>
          </h2>
          <p className="font-poppins text-white/55 max-w-xl mx-auto text-base leading-relaxed animate-on-scroll stagger-2">
            Our coaches are not just certified — they are obsessed with your progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <div
              key={trainer.name}
              className={`group relative animate-on-scroll stagger-${i + 1}`}
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />

                {/* Social overlay on hover */}
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4">
                  {[Instagram, Twitter, Linkedin].map((Icon, si) => (
                    <a
                      key={si}
                      href="#"
                      className="w-10 h-10 border border-brand-green/50 rounded flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-brand-black transition-all duration-200 transform translate-y-4 group-hover:translate-y-0"
                      style={{ transitionDelay: `${si * 60}ms` }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>

                {/* Cert badge */}
                <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-sm border border-brand-green/30 px-3 py-1 rounded-full">
                  <span className="font-poppins text-[10px] text-brand-green">{trainer.exp} Exp.</span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4 sm:mt-5">
                <h3 className="font-montserrat font-800 text-lg sm:text-xl text-white">{trainer.name}</h3>
                <p className="font-poppins text-brand-green text-sm font-500 mt-0.5">{trainer.role}</p>
                <p className="font-poppins text-white/50 text-xs mt-1">{trainer.specialty}</p>
                <div className="h-px bg-brand-dark-border my-3" />
                <p className="font-poppins text-white/55 text-xs sm:text-sm leading-relaxed">{trainer.bio}</p>
                <div className="mt-3 inline-block bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full">
                  <span className="font-poppins text-[10px] text-brand-green">{trainer.cert}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
