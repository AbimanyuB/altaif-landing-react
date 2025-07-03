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
      badge: "All-in-one educational solution",
      type: "standard"
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
      type: "standard"
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
      type: "gradient-purple"
    },
    {
      title: "Cloud Hosting & Support",
      description: "Providing cloud hosting, update, security and maintenance services with 99.9% uptime guarantee.",
      icon: "fas fa-cloud",
      color: "blue-600",
      uptime: "99.9%",
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
              {feature.type === "gradient" && (
                <div className="bg-gradient-to-br from-secondary to-primary p-8 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <i className={`${feature.icon} text-3xl mr-4`}></i>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="mb-4">{feature.description}</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              )}
              
              {feature.type === "gradient-purple" && (
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl shadow-lg text-white transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <i className={`${feature.icon} text-3xl mr-4`}></i>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features?.map((feat, idx) => (
                      <div key={idx} className="bg-white/20 p-2 rounded text-sm">✓ {feat}</div>
                    ))}
                  </div>
                </div>
              )}
              
              {feature.type === "standard" && (
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${feature.color}/10 rounded-full flex items-center justify-center mr-4`}>
                      <i className={`${feature.icon} text-2xl text-${feature.color}`}></i>
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  {feature.badge && (
                    <div className={`bg-${feature.color}/5 p-4 rounded-xl`}>
                      <p className={`text-sm text-${feature.color} font-semibold`}>{feature.badge}</p>
                    </div>
                  )}
                  
                  {feature.badges && (
                    <div className="flex items-center space-x-2">
                      {feature.badges.map((badge, idx) => (
                        <span key={idx} className={`px-3 py-1 bg-${feature.color}/10 text-${feature.color} text-xs rounded-full`}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {feature.uptime && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Uptime</span>
                      <span className={`text-sm font-bold text-${feature.color}`}>{feature.uptime}</span>
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
