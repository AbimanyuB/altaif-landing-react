import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      title: "Learning Management Systems",
      description: "Comprehensive LMS solutions that deliver world-class learning experiences. Our platforms provide first-class learner experience with robust support and integrations.",
      icon: "fas fa-graduation-cap",
      color: "primary",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: ["First-class learner experience", "24/7 Support", "Open Source & Integrations"],
      reverse: false
    },
    {
      title: "Mobile Learning Apps",
      description: "Native and cross-platform mobile applications that bring education to students' fingertips. Engaging, interactive, and accessible learning experiences.",
      icon: "fas fa-mobile-alt",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: ["Cross-platform compatibility", "Offline learning capabilities", "Interactive content delivery"],
      reverse: true
    },
    {
      title: "E-assessment Systems",
      description: "Advanced examination modules with essay questions support, automated scanning, and comprehensive marking systems. Paperless or hybrid assessment solutions.",
      icon: "fas fa-clipboard-check",
      color: "accent",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: ["Automated grading system", "Anti-plagiarism detection", "Comprehensive analytics"],
      reverse: false
    },
    {
      title: "Education ERP Systems",
      description: "Integrated enterprise resource planning systems designed specifically for educational institutions. Manage academics, administration, and operations seamlessly.",
      icon: "fas fa-cogs",
      color: "green-500",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      features: ["Integrated solution", "Security & compliance", "Business growth enabler"],
      reverse: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide consultancy and solutions from inception to deployment phase in the following areas
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded-full hidden lg:block"></div>
          
          {/* Service Items */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${service.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover service-card"
                  />
                </div>
                
                <div className={`${service.reverse ? 'lg:order-1' : 'lg:order-2'} relative`}>
                  <div className={`absolute ${service.reverse ? '-right-4' : '-left-4'} top-0 w-8 h-8 bg-${service.color} rounded-full hidden lg:block`}></div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg service-card">
                    <div className="flex items-center mb-4">
                      <i className={`${service.icon} text-3xl text-${service.color} mr-4`}></i>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <i className={`fas fa-check text-${service.color} mr-2`}></i>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
