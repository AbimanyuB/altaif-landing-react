import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const sectionRef = useScrollAnimation();

  const projects = [
    {
      title: "Smart Student System",
      subtitle: "ISSS - Integrated Smart Student System",
      description: "Complete educational system designed for distance and e-learning students with integrated solutions.",
      features: ["Integrated Solution", "Enhanced Security", "Business Growth"],
      gradient: "from-primary to-secondary",
      icon: "fas fa-graduation-cap",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      badge: "Featured",
      stats: { users: "500+", schools: "25+" }
    },
    {
      title: "LMS Open EdX",
      subtitle: "Cutting-edge Learning Management System",
      description: "Delivers world-class learning experiences to top schools, companies, and organizations.",
      features: ["First-class experience", "24/7 Support", "Open Source"],
      gradient: "from-green-600 to-blue-600",
      icon: "fas fa-laptop-code",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      badge: "Popular",
      stats: { courses: "1000+", learners: "10K+" }
    },
    {
      title: "ILO Solutions",
      subtitle: "Professional Learning Systems",
      description: "Comprehensive suite of educational tools including PRO, LINGUA, and IGCSE solutions.",
      features: ["Multiple Platforms", "Custom Features", "Laravel Development"],
      gradient: "from-purple-600 to-pink-600",
      icon: "fas fa-cogs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      badge: "New",
      stats: { languages: "5+", modules: "15+" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Portfolio Showcase
            </span>
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Showcasing our successful implementations and innovative educational technology solutions</p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full relative border border-gray-100"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                  project.badge === 'Featured' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                  project.badge === 'Popular' ? 'bg-gradient-to-r from-green-500 to-blue-500' :
                  'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  {project.badge}
                </span>
              </div>

              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80`}></div>
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <i className={`${project.icon} text-2xl text-white`}></i>
                  </div>
                </div>

                {/* Stats */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                      <span className="text-white text-xs font-medium">{value} {key}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">{project.subtitle}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{project.description}</p>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center group/feature">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3 group-hover/feature:scale-110 transition-transform">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action Button */}
                <div className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group/btn">
                    <span>View Project</span>
                    <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
