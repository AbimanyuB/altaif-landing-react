import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useDemoModalContext } from '@/contexts/DemoModalContext';

const GetStarted = () => {
  const sectionRef = useScrollAnimation();
  const { openModal } = useDemoModalContext();

  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white animate-on-scroll"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Smart Together.
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              Whether you're a school, university, or business — we'll customize the right solution for you. Request your free demo today.
            </p>
            
            <motion.button
              onClick={() => openModal('demoClick')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform flex items-center space-x-3 mx-auto"
            >
              <span>Request a Free Demo</span>
              <i className="fas fa-arrow-right"></i>
            </motion.button>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-school text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Schools</h3>
                <p className="text-white/80">Digital transformation for educational institutions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-university text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Universities</h3>
                <p className="text-white/80">Comprehensive ERP and LMS solutions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Businesses</h3>
                <p className="text-white/80">Enterprise solutions for modern organizations</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;