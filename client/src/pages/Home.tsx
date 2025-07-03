import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Objectives from '@/components/Objectives';
import VisionMission from '@/components/VisionMission';
import WhyChooseUs from '@/components/WhyChooseUs';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Objectives />
      <VisionMission />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
