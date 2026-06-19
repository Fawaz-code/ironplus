import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatbot from './components/AIChatbot';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  useEffect(() => {
    document.title = 'IronPulse Elite Fitness — Build Strength. Own Your Power.';
  }, []);

  return (
    <div className="font-poppins bg-brand-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <AIChatbot />
    </div>
  );
}

export default App;
