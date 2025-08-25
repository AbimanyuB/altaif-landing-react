import ConsultationHero from '@/components/consultation/Hero';
import ConsultationServices from '@/components/consultation/Services';
import ConsultationAbout from '@/components/consultation/About';
import ConsultationObjectives from '@/components/consultation/Objectives';
import ConsultationVisionMission from '@/components/consultation/VisionMission';
import ConsultationWhyChooseUs from '@/components/consultation/WhyChooseUs';
import ConsultationGetStarted from '@/components/consultation/GetStarted';
import ConsultationProjects from '@/components/consultation/Projects'; 
import ConsultationTestimonials from '@/components/consultation/Testimonials';
import ConsultationTeam from '@/components/consultation/Team';
import ConsultationContact from '@/components/consultation/Contact';
import ConsultationFooter from '@/components/consultation/Footer';

const Consultation = () => {
  return (
    <div className="min-h-screen">
      <ConsultationHero />
      <ConsultationServices />
      <ConsultationAbout />
      <ConsultationObjectives />
      <ConsultationVisionMission />
      <ConsultationWhyChooseUs />
      <ConsultationGetStarted />
      <ConsultationProjects />
      <ConsultationTestimonials />
      {/* <ConsultationTeam /> */}
      <ConsultationContact />
      <ConsultationFooter />
    </div>
  );
};

export default Consultation;
