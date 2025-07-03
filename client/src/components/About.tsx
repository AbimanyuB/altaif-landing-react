import { motion } from 'framer-motion';
import { useCounter } from '@/hooks/useCounter';

const About = () => {
  const clientsCount = useCounter(458);
  const projectsCount = useCounter(500);
  const feedbacksCount = useCounter(796);
  const experienceCount = useCounter(24);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About Altaif</h2>
            <p className="text-xl text-gray-600 mb-8">
              Altaif is a leading company specializing in IT systems for education. We understand that educational institutions 
              are trying to catch up with the rapidly growing educational revolution.
            </p>
            <p className="text-gray-600 mb-8">
              Technology use in education continues to grow at a rapid pace. It has evolved from the simple days of 
              'supporting education' to interventions that are transforming education. We aim to help institutions keep up 
              and ahead in this era of technology-driven education and be future ready.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center" ref={clientsCount.elementRef}>
                <div className="text-3xl font-bold text-primary">{clientsCount.count}+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center" ref={projectsCount.elementRef}>
                <div className="text-3xl font-bold text-primary">{projectsCount.count}+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center" ref={feedbacksCount.elementRef}>
                <div className="text-3xl font-bold text-primary">{feedbacksCount.count}+</div>
                <div className="text-sm text-gray-600">Positive Feedbacks</div>
              </div>
              <div className="text-center" ref={experienceCount.elementRef}>
                <div className="text-3xl font-bold text-primary">{experienceCount.count}+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
            >
              Learn More About Us
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Business professionals collaborating on education technology"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
