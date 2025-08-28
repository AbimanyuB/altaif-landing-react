import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Objectives from '@/components/home/Objectives';
import VisionMission from '@/components/home/VisionMission';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GetStarted from '@/components/home/GetStarted';
import Projects from '@/components/home/Projects';
import Testimonials from '@/components/home/Testimonials';
import Team from '@/components/home/Team';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Objectives />
      <VisionMission />
      <WhyChooseUs />
      <GetStarted />
      <Projects />
      <Testimonials />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
