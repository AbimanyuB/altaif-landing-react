import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  const sectionRef = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Narjis Hisham",
      role: "Interactive, Malaysia Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      content: "Altaif is the best! Great in communication and technical expertise. They provided timely and detailed updates, which help to manage the overall system modules. These guys know what they are doing and they do it well.",
      rating: 5
    },
    {
      name: "Ezz",
      role: "Yonderken Business Solution, CIO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      content: "Working with Altaif Singapore team is an outstanding experience. In education systems solutions, you are the best, Thanks, guys!",
      rating: 5
    },
    {
      name: "Ahmed",
      role: "EAG Malaysia, Business Development Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      content: "The team is very experienced in education and language building by always striving and making sure the projects are completed in the best manner",
      rating: 5
    },
    {
      name: "Bilal",
      role: "Bridges Centre for Open Learning, China, CEO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      content: "The integration part on both academic and administration modules with Altaif ERP is perfect. I believe this system will bloom up in the Industrial and educational systems",
      rating: 5
    },
    {
      name: "Fadhli",
      role: "Yonderken Indonesia, Jakarta, IT Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
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
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">What our clients say about our services</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
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
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-80 flex flex-col">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>
                    <p className="text-gray-700 italic flex-1">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
