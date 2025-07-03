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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1200"
          alt="Educational technology background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/90 to-accent/85"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full floating-element backdrop-blur-sm"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/10 rounded-full floating-element backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/15 rounded-full floating-element backdrop-blur-sm" style={{ animationDelay: '2s' }}></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-32 right-1/4 w-32 h-32 border border-white/20 rounded-lg transform rotate-45 floating-element" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full floating-element" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm uppercase tracking-wide mb-4 text-white border border-white/30">
                Transforming Education
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                One-Step Closer To
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Innovating Your Business</span>
              </h1>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-white/90 text-xl mb-8 max-w-xl leading-relaxed"
            >
              We harness technology to empower students and educationists do and achieve more. 
              We strive to better technological and pedagogical experience of both the learner and the educator.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-white to-gray-100 text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
              >
                Learn More
              </button>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration with technology"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-3xl"></div>
              
              {/* Floating Feature Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <i className="fas fa-laptop-code text-white text-sm"></i>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">LMS Solutions</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-white text-sm"></i>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Mobile Apps</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-accent to-primary p-3 rounded-full shadow-lg">
                <i className="fas fa-graduation-cap text-white text-lg"></i>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
