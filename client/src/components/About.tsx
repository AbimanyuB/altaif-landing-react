import { motion } from 'framer-motion';
import { useCounter } from '@/hooks/useCounter';

const About = () => {
  const clientsCount = useCounter(458);
  const projectsCount = useCounter(500);
  const feedbacksCount = useCounter(796);
  const experienceCount = useCounter(24);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mr-4">
                  <i className="fas fa-building text-white text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-4xl font-bold gradient-text">About Altaif</h2>
                  <p className="text-gray-500">Leading Educational Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Altaif is a leading company specializing in IT systems for education. We understand that educational institutions 
                are trying to catch up with the rapidly growing educational revolution.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Technology use in education continues to grow at a rapid pace. It has evolved from the simple days of 
                'supporting education' to interventions that are transforming education. We aim to help institutions keep up 
                and ahead in this era of technology-driven education and be future ready.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-2xl border border-primary/10" ref={clientsCount.elementRef}>
                  <div className="text-3xl font-bold gradient-text">{clientsCount.count}+</div>
                  <div className="text-sm text-gray-600 font-medium">Satisfied Clients</div>
                  <i className="fas fa-smile text-primary/40 text-lg mt-1"></i>
                </div>
                <div className="text-center bg-gradient-to-r from-secondary/5 to-accent/5 p-4 rounded-2xl border border-secondary/10" ref={projectsCount.elementRef}>
                  <div className="text-3xl font-bold gradient-text">{projectsCount.count}+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                  <i className="fas fa-check-circle text-secondary/40 text-lg mt-1"></i>
                </div>
                <div className="text-center bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-2xl border border-accent/10" ref={feedbacksCount.elementRef}>
                  <div className="text-3xl font-bold gradient-text">{feedbacksCount.count}+</div>
                  <div className="text-sm text-gray-600 font-medium">Positive Feedbacks</div>
                  <i className="fas fa-star text-accent/40 text-lg mt-1"></i>
                </div>
                <div className="text-center bg-gradient-to-r from-green-500/5 to-blue-500/5 p-4 rounded-2xl border border-green-500/10" ref={experienceCount.elementRef}>
                  <div className="text-3xl font-bold gradient-text">{experienceCount.count}+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  <i className="fas fa-calendar text-green-500/40 text-lg mt-1"></i>
                </div>
              </div>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Business professionals collaborating on education technology"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-3xl"></div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <i className="fas fa-award text-white"></i>
                  </div>
                  <div className="text-sm font-bold text-gray-800">ISO Certified</div>
                  <div className="text-xs text-gray-600">Quality Assured</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">24/7 Support</div>
                    <div className="text-xs text-gray-600">Always Available</div>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue-400/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
