import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';
import LogoWhite from '@/assets/logo-white.png';
import Logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Company Logo and Info */}
          <div className="flex items-center space-x-4">
            <img src={LogoWhite} alt='logo' className='w-12 h-12'/>
            <div>
              <h3 className="text-2xl font-bold text-white">Altaif Tech</h3>
              <p className="text-blue-100 text-sm">TRANSFORMING EDUCATION</p>
            </div>
          </div>
          
          {/* Address Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Branches</h4>
              <div className="d-flex flex-row text-blue-100 space-y-2">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-lg"></i>
                  <p className="text-sm">Altaif Indonesia</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-lg"></i>
                  <p className="text-sm">Altaif Singapore</p>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-lg"></i>
                  <p className="text-sm">Altaif Malaysia</p>
              </div>
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
            Copyright {currentYear} Altaif Tech All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
