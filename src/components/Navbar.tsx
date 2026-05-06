import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 bg-brand-green rounded flex items-center justify-center shadow-neon-sm group-hover:shadow-neon transition-all duration-300">
            <Zap size={20} className="text-brand-black" fill="currentColor" />
          </div>
          <div>
            <span className="font-montserrat font-900 text-lg text-white tracking-tight leading-none block">
              IRON<span className="text-neon">PULSE</span>
            </span>
            <span className="font-poppins text-[9px] text-brand-gray tracking-[0.2em] uppercase leading-none">
              Elite Fitness
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`font-poppins font-500 text-sm tracking-wide transition-all duration-200 relative group ${
                activeSection === link.href.replace('#', '')
                  ? 'text-brand-green'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all duration-300 ${
                  activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); handleNav('#pricing'); }}
            className="btn-neon px-5 py-2.5 rounded text-sm"
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white hover:text-brand-green transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="navbar-glass px-4 py-4 flex flex-col gap-3 mt-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`font-poppins font-500 text-base py-2 border-b border-brand-dark-border transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-brand-green'
                  : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); handleNav('#pricing'); setMobileOpen(false); }}
            className="btn-neon px-5 py-3 rounded text-sm text-center mt-2"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
