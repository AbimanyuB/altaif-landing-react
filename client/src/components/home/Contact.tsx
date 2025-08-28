import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const sectionRef = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement actual form submission
      console.log('Form data:', data);
      alert('Thank you for your message! We will contact you soon.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white animate-on-scroll"
          >
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your educational institution with cutting-edge technology? 
              Let's discuss your requirements and create a customized solution.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Altaif Tech Branches:</h3>
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
                    <h4 className="text-xl font-bold">Altaif KL</h4>
                  </div>
                  <p className="opacity-90 ml-10">Kuala Lumpur, Malaysia</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
                    <h4 className="text-xl font-bold">Altaif Singapore</h4>
                  </div>
                  <p className="opacity-90 ml-10">Singapore</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
                    <h4 className="text-xl font-bold">Altaif Indonesia</h4>
                  </div>
                  <p className="opacity-90 ml-10">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-2xl mr-4"></i>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="opacity-90">info@altaiftech.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Please write your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-secondary transition-colors transform hover:scale-105 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Schedule Call'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
