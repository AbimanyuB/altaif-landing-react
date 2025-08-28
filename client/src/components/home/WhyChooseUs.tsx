import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const sectionRef = useScrollAnimation();

  const features = [
    {
      title: "Integrated Systems",
      description: "We provide one integrated platform for all your educational needs. Seamless integration across all modules.",
      icon: "fas fa-layer-group",
      color: "primary",
      badge: "All-in-one solution",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      type: "image-card"
    },
    {
      title: "User Friendly",
      description: "Easy user interface and content management. Intuitive design for all user levels.",
      icon: "fas fa-users",
      color: "secondary",
      type: "gradient"
    },
    {
      title: "24/7 Service",
      description: "Multilingual 24/7 services available to you all year long. Round-the-clock support and maintenance.",
      icon: "fas fa-clock",
      color: "accent",
      badges: ["Live Support", "Always Available"],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      type: "image-overlay"
    },
    {
      title: "Accredited System",
      description: "Approved and accredited systems that has been chosen as the leading platform for education.",
      icon: "fas fa-certificate",
      color: "green-600",
      badge: "ISO Certified & Compliant",
      type: "standard"
    },
    {
      title: "Custom Development",
      description: "Tailor any platform to suit the client's needs and add specific features required.",
      icon: "fas fa-code",
      color: "purple-600",
      features: ["Bespoke Solutions", "Flexible Architecture"],
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      type: "side-image"
    },
    {
      title: "Cloud Hosting & Support",
      description: "Providing cloud hosting, update, security and maintenance services with 99.9% uptime guarantee.",
      icon: "fas fa-cloud",
      color: "blue-600",
      uptime: "99.9%",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      type: "standard"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Why Select Us?</h2>
          <p className="text-xl text-gray-600">We understand your requirement and provide quality works</p>
        </div>
        
        <div className="masonry-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="masonry-item"
            >
              {feature.type === "image-card" && (
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3">
                          <i className={`${feature.icon} text-lg`}></i>
                        </div>
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    {feature.badge && (
                      <span className={`inline-block px-4 py-2 bg-${feature.color}/10 text-${feature.color} text-sm rounded-full font-medium`}>
                        {feature.badge}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {feature.type === "image-overlay" && (
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  <div className="relative p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-${feature.color}/20`}>
                        <i className={`${feature.icon} text-2xl text-${feature.color}`}></i>
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    {feature.badges && (
                      <div className="flex flex-wrap gap-2">
                        {feature.badges.map((badge, idx) => (
                          <span key={idx} className={`px-3 py-1 bg-${feature.color}/10 text-${feature.color} text-xs rounded-full font-medium`}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {feature.type === "side-image" && (
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-3xl shadow-lg text-white transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="flex items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <i className={`${feature.icon} text-2xl mr-3`}></i>
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                      </div>
                      <p className="text-sm mb-4 text-white/90">{feature.description}</p>
                      {feature.features && (
                        <div className="space-y-2">
                          {feature.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center text-xs">
                              <i className="fas fa-check mr-2"></i>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="w-20 h-20 ml-4 rounded-2xl overflow-hidden">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {feature.type === "gradient" && (
                <div className="bg-gradient-to-br from-secondary to-primary p-8 rounded-3xl shadow-lg text-white transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                        <i className={`${feature.icon} text-2xl`}></i>
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="mb-6 text-white/95">{feature.description}</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
              
              {feature.type === "standard" && (
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  {feature.image && (
                    <div className="w-full h-32 mb-6 rounded-2xl overflow-hidden">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mr-4`}>
                      <i className={`${feature.icon} text-2xl text-${feature.color}`}></i>
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  {feature.badge && (
                    <div className={`bg-${feature.color}/5 p-4 rounded-2xl mb-4`}>
                      <p className={`text-sm text-${feature.color} font-semibold`}>{feature.badge}</p>
                    </div>
                  )}
                  
                  {feature.uptime && (
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
                      <span className="text-sm text-gray-500 font-medium">Uptime Guarantee</span>
                      <span className={`text-lg font-bold text-${feature.color}`}>{feature.uptime}</span>
                    </div>
                  )}
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
