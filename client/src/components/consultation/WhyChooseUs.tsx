import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const sectionRef = useScrollAnimation();

  const features = [
    {
      title: "AI-Powered Tools",
      description: "Leverage artificial intelligence to enhance learning experiences, automate administrative tasks, and provide intelligent insights for better decision-making.",
      icon: "fas fa-brain",
      color: "primary",
      badge: "Smart Technology",
      highlights: ["Intelligent Analytics", "Automated Workflows", "Predictive Insights"],
      type: "gradient"
    },
    {
      title: "Fast Deployment",
      description: "Get your systems up and running quickly with our streamlined deployment process. From setup to go-live in record time.",
      icon: "fas fa-rocket",
      color: "secondary",
      badge: "Quick Setup",
      highlights: ["Rapid Implementation", "Minimal Downtime", "Expert Support"],
      type: "standard"
    },
    {
      title: "Available as Web + Mobile",
      description: "Access your platforms anywhere, anytime with our responsive web applications and dedicated mobile apps for iOS and Android.",
      icon: "fas fa-mobile-alt",
      color: "accent",
      badge: "Cross-Platform",
      highlights: ["Responsive Design", "Native Mobile Apps", "Seamless Sync"],
      type: "image-card"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Why Altaif Tech?</h2>
          <p className="text-xl text-gray-600">Innovative solutions powered by cutting-edge technology</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              {feature.type === "image-card" && (
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r from-${feature.color} to-${feature.color}/80 rounded-2xl flex items-center justify-center mr-4`}>
                        <i className={`${feature.icon} text-white text-2xl`}></i>
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                    {feature.badge && (
                      <div className={`bg-${feature.color}/5 p-4 rounded-2xl mb-4`}>
                        <p className={`text-sm text-${feature.color} font-semibold`}>{feature.badge}</p>
                      </div>
                    )}
                    {feature.highlights && (
                      <div className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <i className={`fas fa-check text-${feature.color} mr-2`}></i>
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {feature.type === "gradient" && (
                <div className={`bg-gradient-to-br from-${feature.color} to-${feature.color}/80 p-8 rounded-3xl shadow-lg text-white transform hover:scale-105 transition-all duration-300 overflow-hidden h-full`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                        <i className={`${feature.icon} text-2xl`}></i>
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="mb-6 text-white/95 flex-grow">{feature.description}</p>
                    {feature.badge && (
                      <div className="bg-white/10 p-4 rounded-2xl mb-4">
                        <p className="text-sm text-white font-semibold">{feature.badge}</p>
                      </div>
                    )}
                    {feature.highlights && (
                      <div className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <i className="fas fa-check text-white mr-2"></i>
                            <span className="text-sm text-white/90">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {feature.type === "standard" && (
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mr-4`}>
                        <i className={`${feature.icon} text-2xl text-${feature.color}`}></i>
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                    
                    {feature.badge && (
                      <div className={`bg-${feature.color}/5 p-4 rounded-2xl mb-4`}>
                        <p className={`text-sm text-${feature.color} font-semibold`}>{feature.badge}</p>
                      </div>
                    )}
                    
                    {feature.highlights && (
                      <div className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <i className={`fas fa-check text-${feature.color} mr-2`}></i>
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
