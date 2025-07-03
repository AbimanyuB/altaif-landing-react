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
      icon: "fas fa-graduation-cap"
    },
    {
      title: "LMS Open EdX",
      subtitle: "Cutting-edge Learning Management System",
      description: "Delivers world-class learning experiences to top schools, companies, and organizations.",
      features: ["First-class experience", "24/7 Support", "Open Source"],
      gradient: "from-green-600 to-blue-600",
      icon: "fas fa-laptop-code"
    },
    {
      title: "ILO Solutions",
      subtitle: "Professional Learning Systems",
      description: "Comprehensive suite of educational tools including PRO, LINGUA, and IGCSE solutions.",
      features: ["Multiple Platforms", "Custom Features", "Laravel Development"],
      gradient: "from-purple-600 to-pink-600",
      icon: "fas fa-cogs"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600">Showcasing our successful implementations and solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className={`bg-gradient-to-br ${project.gradient} p-8 text-white`}>
                <div className="flex items-center mb-4">
                  <i className={`${project.icon} text-3xl mr-4`}></i>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-sm opacity-90">{project.subtitle}</p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2 mb-6 flex-grow">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="text-primary font-semibold hover:text-secondary transition-colors mt-auto self-start">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
