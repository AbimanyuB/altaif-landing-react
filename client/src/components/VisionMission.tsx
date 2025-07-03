import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Vision Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary to-secondary p-12 text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <i className="fas fa-eye text-4xl mr-4"></i>
                <h3 className="text-3xl font-bold">Vision</h3>
              </div>
              <p className="text-lg leading-relaxed mb-8">
                We envision a future in which technology driven education is ubiquitous. E-learning has been here for many years 
                but we foresee the prevalence of e-universities and would like to be at the forefront of the revolution.
              </p>
              <div className="bg-white/20 p-4 rounded-xl">
                <i className="fas fa-rocket text-2xl mb-2"></i>
                <p className="text-sm">Leading the educational technology revolution</p>
              </div>
            </div>
          </motion.div>
          
          {/* Mission Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-700 p-12 text-white"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <i className="fas fa-bullseye text-4xl mr-4"></i>
                <h3 className="text-3xl font-bold">Mission</h3>
              </div>
              <p className="text-lg leading-relaxed mb-8">
                We harness technology to empower students and educationists do and achieve more. We strive to better 
                technological and pedagogical experience of both the learner and the educator.
              </p>
              <div className="bg-white/20 p-4 rounded-xl">
                <i className="fas fa-users text-2xl mb-2"></i>
                <p className="text-sm">Empowering educational communities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
