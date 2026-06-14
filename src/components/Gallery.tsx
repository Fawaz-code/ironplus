import { Maximize2 } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Main Training Floor',
    size: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Free Weights Zone',
    size: '',
  },
  {
    src: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Olympic Platform',
    size: '',
  },
  {
    src: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Personal Training Suite',
    size: '',
  },
  {
    src: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Cardio Theatre',
    size: '',
  },
  {
    src: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Group Fitness Studio',
    size: 'col-span-2 md:col-span-2',
  },
];

export default function Gallery() {
  return (
    <section className="py-16 sm:py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-poppins text-xs font-500 text-brand-green tracking-[0.3em] uppercase mb-4 animate-on-scroll">
            The Space
          </p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white animate-on-scroll stagger-1">
            World-Class <span className="text-neon">Facility</span>
          </h2>
          <p className="font-poppins text-white/55 max-w-xl mx-auto mt-4 text-base animate-on-scroll stagger-2">
            18,000 sq ft of performance-engineered space designed for one purpose — elite results.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px] animate-on-scroll">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative rounded-sm overflow-hidden cursor-pointer group ${img.size}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <div className="flex items-center justify-between">
                  <span className="font-montserrat font-700 text-sm text-white">{img.label}</span>
                  <Maximize2 size={14} className="text-brand-green" />
                </div>
              </div>
              {/* Neon border on hover */}
              <div className="absolute inset-0 border-2 border-brand-green/0 group-hover:border-brand-green/40 rounded-sm transition-all duration-400 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
