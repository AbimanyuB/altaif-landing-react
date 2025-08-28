import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';
import { useDemoModalContext } from '@/contexts/DemoModalContext';
import LogoWhite from '@/assets/logo-white.png';
import Logo from '@/assets/logo.png';

const Navigation = () => {
  const { openModal } = useDemoModalContext();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'Services', href: 'services' },
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Testimonials', href: 'testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src={scrolled ? Logo : LogoWhite} alt='logo' className='w-12 h-12'/>
            <span className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>Altaif Tech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => openModal('demoClick')}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors"
            >
              Get a Free Demo
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-blue-200'
              }`}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  openModal('demoClick');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-primary font-medium"
              >
                Get a Free Demo
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
