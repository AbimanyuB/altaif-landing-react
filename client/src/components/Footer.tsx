import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Company Logo and Info */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <i className="fas fa-graduation-cap text-blue-600 text-xl"></i>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Altaif Indonesia</h3>
              <p className="text-blue-100 text-sm">TRANSFORMING EDUCATION</p>
            </div>
          </div>
          
          {/* Address Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Address</h4>
            <div className="text-blue-100 space-y-1">
              <p className="text-sm">Jakarta, Indonesia</p>
            </div>
          </div>
          
          {/* Email Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white flex items-center">
              <i className="fas fa-envelope mr-2"></i>
              Email
            </h4>
            <div className="text-blue-100">
              <a href="mailto:info@altaiftech.com" className="text-sm hover:text-white transition-colors">
                info@altaiftech.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t-2 border-white/40 mt-8 pt-6 text-center">
          <p className="text-blue-100 text-sm">
            Copyright {currentYear} Altaif Indonesia All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
