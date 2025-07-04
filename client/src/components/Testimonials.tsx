import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import EzzProfpic from '@/assets/profpic/ezz-profpic.png';
import Ahmed1Profpic from '@/assets/profpic/ahmed-profpic.jpeg';
import Ahmed2Profpic from '@/assets/profpic/ahmed-profpic.png';
import BilalProfpic from '@/assets/profpic/bilal-profpic.png';
import FadhliProfpic from '@/assets/profpic/fadhli-profpic.jpg';

const Testimonials = () => {
  const sectionRef = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Narjis Hisham",
      role: "Interactive, Malaysia Manager",
      image: Ahmed2Profpic,
      content: "Altaif is the best! Great in communication and technical expertise. They provided timely and detailed updates, which help to manage the overall system modules. These guys know what they are doing and they do it well.",
      rating: 5
    },
    {
      name: "Ezz",
      role: "Yonderken Business Solution, CIO",
      image: EzzProfpic,
      content: "Working with Altaif Singapore team is an outstanding experience. In education systems solutions, you are the best, Thanks, guys!",
      rating: 5
    },
    {
      name: "Ahmed",
      role: "EAG Malaysia, Business Development Manager",
      image: Ahmed1Profpic,
      content: "The team is very experienced in education and language building by always striving and making sure the projects are completed in the best manner",
      rating: 5
    },
    {
      name: "Bilal",
      role: "Bridges Centre for Open Learning, China, CEO",
      image: BilalProfpic,
      content: "The integration part on both academic and administration modules with Altaif ERP is perfect. I believe this system will bloom up in the Industrial and educational systems",
      rating: 5
    },
    {
      name: "Fadhli",
      role: "Yonderken Indonesia, Jakarta, IT Manager",
      image: FadhliProfpic,
      content: "Integrating conventional teaching and learning methods with new technology is not an easy thing, however, Altaif has managed to do that perfectly. Altaif Singapore is the best partner for educational institutions.",
      rating: 5
    }
  ];

  const slidesPerView = typeof window !== 'undefined' ? 
    (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) : 1;
  const maxSlide = Math.max(0, testimonials.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [maxSlide]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/5 rounded-full blur-xl"></div>
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
              Client Reviews
            </span>
            <h2 className="text-4xl font-bold mb-4 gradient-text">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by educational institutions worldwide</p>
          </motion.div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-4 ${
                    slidesPerView === 3 ? 'w-1/3' : slidesPerView === 2 ? 'w-1/2' : 'w-full'
                  }`}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary/10 relative overflow-hidden"
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -mr-10 -mt-10"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-quote-right text-primary text-sm"></i>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <i className="fas fa-check text-white text-xs"></i>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                        ))}
                      </div>
                      
                      <p className="text-gray-700 italic leading-relaxed mb-6 text-base">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Bottom decoration */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">Verified Client</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-12 space-x-6">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-110 duration-300"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>
            
            {/* Slide indicators */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-110 duration-300"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
