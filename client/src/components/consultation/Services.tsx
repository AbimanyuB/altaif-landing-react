import { motion } from 'framer-motion';
import { useAdvancedScrollAnimation } from '@/hooks/useAdvancedScrollAnimation';
import { useDemoModalContext } from '@/contexts/DemoModalContext';
import { useState } from 'react';

const Services = () => {
  const sectionRef = useAdvancedScrollAnimation('fade-in-up');
  const { openModal } = useDemoModalContext();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "Education Technology Solutions",
      subtitle: "Explore our digital solutions tailored for schools and universities.",
      services: [
        {
          title: "Altaif Smart School 3S",
          description: "Empowers school-wide digital transformation with modules for attendance, academics, communication, and administration — all in one place.",
          icon: "fas fa-school",
          color: "primary"
        },
        {
          title: "Madrasati Online",
          description: "A complete Arabic-language e-learning environment with lesson plans, videos, quizzes, and AI tools for schools.",
          icon: "fas fa-language",
          color: "secondary"
        },
        {
          title: "MOHYEY LMS + Odoo Integration",
          description: "Manage everything from course setup to student progress with an LMS that's powerful, flexible, and fully integrated.",
          icon: "fas fa-graduation-cap",
          color: "accent"
        },
        {
          title: "LMS Edx App + Global Implementation",
          description: "Access and manage global online courses with multilingual support and international deployment.",
          icon: "fas fa-globe",
          color: "green-500"
        }
      ]
    },
    {
      title: "Altaif Mobile Apps",
      subtitle: "Modern apps that put education and services in the palm of your hand.",
      services: [
        {
          title: "WebBook App",
          description: "Read interactive e-books, access video/audio lessons, and use the built-in AI assistant to guide your learning.",
          icon: "fas fa-book-open",
          color: "blue-500"
        },
        {
          title: "MOHYEY LMS",
          description: "A streamlined mobile solution for admission applications and status tracking, customized for institutions.",
          icon: "fas fa-mobile-alt",
          color: "purple-500"
        }
      ]
    },
    {
      title: "Enterprise & Business Solutions",
      subtitle: "Scalable systems for universities, corporates, and governments.",
      services: [
        {
          title: "Altaif Odoo LMS",
          description: "A robust Odoo-based learning and operations platform. Features include exam setup, CRM integration, email automation, and advanced reporting.",
          icon: "fas fa-cogs",
          color: "orange-500"
        },
        {
          title: "MOHYEY University System",
          description: "Comprehensive ERP for higher education — admissions, course registration, postgraduate tracking, and reporting all in one.",
          icon: "fas fa-university",
          color: "red-500"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions across Education Technology, Mobile Apps, and Enterprise Software
          </p>
        </div>
        
        <div className="space-y-24">
          {serviceCategories.map((category, categoryIndex) => {
            const categoryColors = {
              "Education Technology Solutions": {
                gradient: "from-blue-600 via-purple-600 to-indigo-700",
                accent: "blue-500",
                bg: "from-blue-50 to-indigo-50"
              },
              "Altaif Mobile Apps": {
                gradient: "from-green-500 via-teal-500 to-cyan-600",
                accent: "green-500",
                bg: "from-green-50 to-teal-50"
              },
              "Enterprise & Business Solutions": {
                gradient: "from-orange-500 via-red-500 to-pink-600",
                accent: "orange-500",
                bg: "from-orange-50 to-red-50"
              }
            };
            
            const colors = categoryColors[category.title as keyof typeof categoryColors];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1,
                  delay: categoryIndex * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br ${colors.bg} rounded-3xl p-8 shadow-2xl overflow-hidden`}
              >

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
                </div>
                
                {/* Header Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.3 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-center mb-16 relative z-10"
                >
                  <div className={`inline-block bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-4`}>
                    <h3 className="text-4xl md:text-5xl font-bold">{category.title}</h3>
                  </div>
                  <div className={`w-24 h-1 bg-gradient-to-r ${colors.gradient} mx-auto mb-6 rounded-full`}></div>
                  <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">{category.subtitle}</p>
                </motion.div>
                
                {/* Services Grid - Non-monotonous Layout */}
                <div className="relative z-10">
                  {/* Left Side Decorative Elements */}
                  <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none hidden md:block">
                    {/* Floating Tech Icons */}
                    <motion.div
                      className="absolute top-20 left-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <i className="fas fa-code text-white text-lg"></i>
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-64 left-4 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        y: [10, -10, 10],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      <i className="fas fa-laptop text-white text-sm"></i>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-32 left-6 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{
                        y: [-5, 15, -5],
                        rotate: [0, -180, -360]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                    >
                      <i className="fas fa-mobile-alt text-white text-xs"></i>
                    </motion.div>
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <motion.path
                        d="M20,80 Q40,200 20,320"
                        fill="none"
                        stroke={colors.gradient.split(' ')[1]}
                        strokeWidth="2"
                        strokeDasharray="3,3"
                        animate={{
                          strokeDashoffset: [0, -12]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </svg>
                  </div>
                  
                  {/* Right Side Decorative Elements */}
                  <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none hidden md:block">
                    {/* Floating Data Visualizations */}
                    <motion.div
                      className="absolute top-32 right-8 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg"
                      animate={{
                        y: [15, -15, 15],
                        rotate: [0, 360, 0]
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <i className="fas fa-chart-bar text-white text-lg"></i>
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-80 right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{
                        y: [-8, 12, -8],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    >
                      <i className="fas fa-database text-white text-sm"></i>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-40 right-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        y: [12, -12, 12],
                        rotate: [0, -360, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                      }}
                    >
                      <i className="fas fa-brain text-white text-sm"></i>
                    </motion.div>
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <motion.path
                        d="M108,120 Q88,240 108,360"
                        fill="none"
                        stroke={colors.gradient.split(' ')[3]}
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        animate={{
                          strokeDashoffset: [0, 16]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </svg>
                    
                    {/* Floating Particles */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full opacity-60"
                        style={{
                          background: `linear-gradient(45deg, ${colors.gradient.split(' ')[1]}, ${colors.gradient.split(' ')[3]})`,
                          top: `${20 + i * 20}%`,
                          right: `${15 + i * 5}%`
                        }}
                        animate={{
                          y: [-20, 20, -20],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [0.5, 1.5, 0.5]
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5
                        }}
                      />
                    ))}
                  </div>
                  {category.services.map((service, serviceIndex) => {
                    const cardId = `${category.title}-${service.title}`;
                    const isHovered = hoveredCard === cardId;
                    
                    // Different card layouts for variety
                    const cardLayouts = [
                      // Layout 1: Diagonal card with floating icon
                      {
                        containerClass: "relative mb-12",
                        cardClass: "bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 border-l-8",
                        iconPosition: "absolute -top-6 -left-6",
                        iconClass: "w-20 h-20 rounded-full shadow-2xl",
                        titleClass: "text-2xl font-bold mb-4 ml-16",
                        descClass: "text-gray-600 mb-8 leading-relaxed",
                        buttonClass: "w-full rounded-2xl py-4 font-bold text-lg shadow-xl"
                      },
                      // Layout 2: Hexagonal-inspired with side accent
                      {
                        containerClass: "relative mb-12",
                        cardClass: "bg-gradient-to-br from-white via-white to-gray-50 p-8 rounded-2xl shadow-2xl border-r-8 transform -rotate-1 hover:rotate-0 transition-all duration-700",
                        iconPosition: "absolute -top-4 -right-4",
                        iconClass: "w-16 h-16 rounded-2xl shadow-xl",
                        titleClass: "text-2xl font-bold mb-4 mr-20",
                        descClass: "text-gray-600 mb-8 leading-relaxed",
                        buttonClass: "w-full rounded-full py-4 font-bold text-lg shadow-xl"
                      },
                      // Layout 3: Overlapping elements design
                      {
                        containerClass: "relative mb-12",
                        cardClass: "bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-t-8 transform hover:scale-105 transition-all duration-500",
                        iconPosition: "relative mb-6",
                        iconClass: "w-18 h-18 rounded-3xl shadow-lg mx-auto",
                        titleClass: "text-2xl font-bold mb-4 text-center",
                        descClass: "text-gray-600 mb-8 leading-relaxed text-center",
                        buttonClass: "w-full rounded-xl py-4 font-bold text-lg shadow-xl"
                      },
                      // Layout 4: Asymmetric modern card
                      {
                        containerClass: "relative mb-12",
                        cardClass: "bg-gradient-to-tr from-white to-gray-50/80 p-8 rounded-2xl shadow-2xl border-b-8 transform rotate-1 hover:-rotate-1 transition-all duration-700",
                        iconPosition: "absolute -bottom-4 -left-4",
                        iconClass: "w-16 h-16 rounded-full shadow-2xl",
                        titleClass: "text-2xl font-bold mb-4 mb-20",
                        descClass: "text-gray-600 mb-8 leading-relaxed",
                        buttonClass: "w-full rounded-2xl py-4 font-bold text-lg shadow-xl"
                      }
                    ];
                    
                    const layout = cardLayouts[serviceIndex % cardLayouts.length];
                    const isEven = serviceIndex % 2 === 0;
                    
                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 80, rotateX: 20 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.3 + serviceIndex * 0.2,
                          type: "spring",
                          stiffness: 80
                        }}
                        viewport={{ once: true }}
                        className={`${layout.containerClass} ${isEven ? 'md:ml-0 md:mr-12' : 'md:ml-12 md:mr-0'} max-w-2xl ${isEven ? 'md:float-left' : 'md:float-right'} w-full md:w-1/2`}
                      >
                        <motion.div
                          onHoverStart={() => setHoveredCard(cardId)}
                          onHoverEnd={() => setHoveredCard(null)}
                          className={`group ${layout.cardClass} border-${colors.accent} relative overflow-hidden`}
                          whileHover={{ 
                            y: -15,
                            scale: 1.03,
                            rotateY: isEven ? 5 : -5
                          }}
                          style={{
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          {/* Animated Background Patterns */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            animate={isHovered ? { 
                              background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                              x: [-100, 100]
                            } : {}}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          
                          {/* Enhanced Decorative Elements */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                          
                          {/* Animated Circuit Lines */}
                          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                            <motion.path
                              d="M50,50 Q200,25 350,50 T350,150 Q200,175 50,150 T50,50"
                              fill="none"
                              stroke={colors.gradient.split(' ')[1]}
                              strokeWidth="2"
                              strokeDasharray="5,5"
                              animate={{
                                strokeDashoffset: [0, -20]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="3"
                              fill={colors.gradient.split(' ')[3]}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                            />
                            <motion.circle
                              cx="350"
                              cy="150"
                              r="3"
                              fill={colors.gradient.split(' ')[1]}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 1
                              }}
                            />
                          </svg>
                          
                          {/* Glowing Orbs */}
                          <motion.div
                            className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full opacity-60"
                            style={{
                              background: `radial-gradient(circle, ${colors.gradient.split(' ')[1]}, transparent 70%)`,
                              filter: 'blur(2px)'
                            }}
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full opacity-60"
                            style={{
                              background: `radial-gradient(circle, ${colors.gradient.split(' ')[3]}, transparent 70%)`,
                              filter: 'blur(1px)'
                            }}
                            animate={{
                              scale: [1, 2, 1],
                              opacity: [0.2, 0.7, 0.2]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.5
                            }}
                          />
                          
                          {/* Icon */}
                          <motion.div 
                            className={`${layout.iconPosition} z-20`}
                            whileHover={{ 
                              rotate: [0, 360],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            <div className={`${layout.iconClass} bg-gradient-to-r ${colors.gradient} flex items-center justify-center`}>
                              <i className={`${service.icon} text-white text-2xl`}></i>
                            </div>
                          </motion.div>
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <h4 className={`${layout.titleClass} text-gray-800 group-hover:text-gray-900 transition-colors`}>
                              {service.title}
                            </h4>
                            <p className={`${layout.descClass} group-hover:text-gray-700 transition-colors`}>
                              {service.description}
                            </p>
                            
                            {/* CTA Button */}
                            <motion.button
                              onClick={() => openModal('demoClick')}
                              className={`${layout.buttonClass} bg-gradient-to-r ${colors.gradient} text-white hover:shadow-2xl transition-all transform flex items-center justify-center space-x-3 group/btn relative overflow-hidden`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {/* Button shine effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={isHovered ? { x: [-100, 100] } : {}}
                                transition={{ duration: 0.6 }}
                              />
                              <span className="relative z-10">Learn More → Free Demo</span>
                              <motion.i 
                                className="fas fa-arrow-right relative z-10"
                                animate={isHovered ? { x: 8, rotate: 360 } : { x: 0, rotate: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                            </motion.button>
                          </div>
                          
                          {/* Enhanced Floating Particles */}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute rounded-full opacity-0 group-hover:opacity-60`}
                              style={{
                                width: `${1 + i % 3}rem`,
                                height: `${1 + i % 3}rem`,
                                background: i % 2 === 0 
                                  ? `radial-gradient(circle, ${colors.gradient.split(' ')[1]}, transparent 70%)`
                                  : `linear-gradient(45deg, ${colors.gradient.split(' ')[1]}, ${colors.gradient.split(' ')[3]})`,
                                top: `${15 + i * 12}%`,
                                right: `${5 + i * 10}%`,
                                filter: i % 3 === 0 ? 'blur(1px)' : 'none'
                              }}
                              animate={isHovered ? {
                                y: [-15, -40, -15],
                                x: [0, Math.sin(i) * 10, 0],
                                opacity: [0, 0.8, 0],
                                scale: [0.3, 1.5, 0.3],
                                rotate: [0, 360, 0]
                              } : {
                                y: [0, -5, 0],
                                opacity: [0, 0.2, 0]
                              }}
                              transition={{ 
                                duration: 3 + i * 0.5, 
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                          
                          {/* Sparkle Effects */}
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={`sparkle-${i}`}
                              className="absolute w-1 h-1 opacity-0 group-hover:opacity-100"
                              style={{
                                background: '#ffffff',
                                top: `${20 + i * 15}%`,
                                left: `${10 + i * 20}%`,
                                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                              }}
                              animate={isHovered ? {
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                rotate: [0, 180, 360]
                              } : {}}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3
                              }}
                            />
                          ))}
                          
                          {/* Corner Accents */}
                          <div className={`absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-${colors.accent} opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                          <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-${colors.accent} opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                  <div className="clear-both"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
