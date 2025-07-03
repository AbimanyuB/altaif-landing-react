import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/90 to-accent/90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full floating-element"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/10 rounded-full floating-element" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/15 rounded-full floating-element" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-left">
            <motion.div variants={itemVariants}>
              <span className="block text-sm uppercase tracking-wide mb-2 text-white/90">
                Transforming Education
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                One-Step Closer To
                <span className="block text-yellow-300">Innovating Your Business</span>
              </h1>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-white/90 text-lg mb-8 max-w-xl"
            >
              We harness technology to empower students and educationists do and achieve more. 
              We strive to better technological and pedagogical experience of both the learner and the educator.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
              >
                Learn More
              </button>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 p-6 rounded-xl text-center">
                  <i className="fas fa-laptop-code text-4xl text-white mb-4"></i>
                  <h3 className="text-white font-semibold mb-2">LMS Solutions</h3>
                  <p className="text-white/80 text-sm">Comprehensive learning management systems</p>
                </div>
                <div className="bg-white/20 p-6 rounded-xl text-center">
                  <i className="fas fa-mobile-alt text-4xl text-white mb-4"></i>
                  <h3 className="text-white font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-white/80 text-sm">Mobile learning applications</p>
                </div>
                <div className="bg-white/20 p-6 rounded-xl text-center">
                  <i className="fas fa-chart-line text-4xl text-white mb-4"></i>
                  <h3 className="text-white font-semibold mb-2">Analytics</h3>
                  <p className="text-white/80 text-sm">Student monitoring systems</p>
                </div>
                <div className="bg-white/20 p-6 rounded-xl text-center">
                  <i className="fas fa-cloud text-4xl text-white mb-4"></i>
                  <h3 className="text-white font-semibold mb-2">Cloud ERP</h3>
                  <p className="text-white/80 text-sm">Educational ERP systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
