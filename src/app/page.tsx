import AboutSection from '@/components/AboutSection';
import Hero from '../components/Hero';
import Overlay from '@/components/Overlay';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Overlay />
      <Testimonials />
      <Footer />
    </div>
  );
}
