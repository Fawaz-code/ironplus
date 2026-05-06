import { Zap, Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { Icon: Instagram, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Youtube, href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black border-t border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-green rounded flex items-center justify-center shadow-neon-sm">
                <Zap size={20} className="text-brand-black" fill="currentColor" />
              </div>
              <div>
                <span className="font-montserrat font-900 text-lg text-white tracking-tight leading-none block">
                  IRON<span className="text-neon">PULSE</span>
                </span>
                <span className="font-poppins text-[9px] text-brand-gray tracking-[0.2em] uppercase">
                  Elite Fitness
                </span>
              </div>
            </div>
            <p className="font-poppins text-white/45 text-sm leading-relaxed mb-5">
              Build Strength. Own Your Power. New York's premier high-performance fitness destination since 2012.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 border border-brand-dark-border rounded flex items-center justify-center text-white/40 hover:border-brand-green hover:text-brand-green transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-montserrat font-700 text-sm text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="font-poppins text-sm text-white/45 hover:text-brand-green transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-brand-green transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-montserrat font-700 text-sm text-white uppercase tracking-wider mb-5">
              Programs
            </h4>
            <ul className="space-y-2.5">
              {[
                'Strength Training',
                'Cardio Conditioning',
                'Fat Loss Program',
                'Muscle Building',
                'Personal Coaching',
              ].map((p) => (
                <li key={p}>
                  <a
                    href="#programs"
                    onClick={(e) => { e.preventDefault(); scrollTo('#programs'); }}
                    className="font-poppins text-sm text-white/45 hover:text-brand-green transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-brand-green transition-all duration-200 group-hover:w-3" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-700 text-sm text-white uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-green flex-shrink-0 mt-0.5" />
                <span className="font-poppins text-sm text-white/45 leading-relaxed">
                  245 Madison Ave,<br />New York, NY 10016
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-green flex-shrink-0" />
                <a href="tel:+12125557890" className="font-poppins text-sm text-white/45 hover:text-brand-green transition-colors">
                  +1 (212) 555-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-green flex-shrink-0" />
                <a href="mailto:contact@ironpulseelite.com" className="font-poppins text-sm text-white/45 hover:text-brand-green transition-colors">
                  contact@ironpulseelite.com
                </a>
              </li>
            </ul>

            <div className="mt-5 bg-brand-dark-card border border-brand-dark-border rounded-sm p-4">
              <div className="font-montserrat font-700 text-xs text-white/50 uppercase tracking-wider mb-2">Hours</div>
              <div className="font-poppins text-xs text-white/60 space-y-1">
                <div className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span className="text-brand-green">5:00 AM – 12:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-brand-green">7:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-dark-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-white/30 text-xs">
            © {new Date().getFullYear()} IronPulse Elite Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-poppins text-white/30 text-xs hover:text-brand-green transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
