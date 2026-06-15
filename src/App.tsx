import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatsAppButton from './components/WhatsAppButton';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const Programs = lazy(() => import('./components/Programs'));
const Trainers = lazy(() => import('./components/Trainers'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useScrollAnimation();

  return (
    <div className="font-poppins bg-brand-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Programs />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Gallery />
        <Contact />
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}

export default App;
