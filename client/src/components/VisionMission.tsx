import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Our Vision & Mission</h2>
          <p className="text-xl text-gray-600">Driving the future of educational technology</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary via-secondary to-accent p-6 md:p-8 rounded-3xl text-white overflow-hidden shadow-2xl min-h-[380px] md:min-h-[450px] lg:min-h-[500px] flex flex-col">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Future technology"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border border-white/20 rounded-lg transform rotate-12"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-eye text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Vision</h3>
                    <p className="text-white/80 text-sm">Future Forward</p>
                  </div>
                </div>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 text-white/95" style={{ minHeight: '120px' }}>
                  We envision a future in which technology driven education is ubiquitous. E-learning has been here for many years 
                  but we foresee the prevalence of e-universities and would like to be at the forefront of the revolution.
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/30" style={{ minHeight: '100px' }}>
                  <div className="flex items-center mb-3">
                    <i className="fas fa-rocket text-xl md:text-2xl mr-3"></i>
                    <span className="font-semibold text-sm md:text-base">Key Focus</span>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed">Leading the educational technology revolution with innovative e-learning solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Mission Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 md:p-8 rounded-3xl text-white overflow-hidden shadow-2xl min-h-[380px] md:min-h-[450px] lg:min-h-[500px] flex flex-col">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mb-12"></div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-bullseye text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Mission</h3>
                    <p className="text-white/80 text-sm">Purpose Driven</p>
                  </div>
                </div>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 text-white/95" style={{ minHeight: '120px' }}>
                  We harness technology to empower students and educationists do and achieve more. We strive to better 
                  technological and pedagogical experience of both the learner and the educator through innovative solutions.
                </p>
                <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/30" style={{ minHeight: '100px' }}>
                  <div className="flex items-center mb-3">
                    <i className="fas fa-users text-xl md:text-2xl mr-3"></i>
                    <span className="font-semibold text-sm md:text-base">Core Values</span>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed">Empowering educational communities through innovative technology solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
