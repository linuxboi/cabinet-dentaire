import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaTooth } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/equipe', label: 'Équipe' },
    { path: '/avant-apres', label: 'Avant/Après' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl py-2 sm:py-3' : 'bg-white shadow-lg py-3 sm:py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaTooth className="text-white text-lg sm:text-xl" />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-primary-900 transition-all">
              <span className="hidden sm:inline">Centre Dentaire Mandarona</span>
              <span className="sm:hidden">Mandarona</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-all px-3 xl:px-4 py-2 rounded-lg ${
                  isActive(link.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:+212XXXXXXXXX" className="btn btn-outline text-sm xl:text-base px-4 py-2">
              <FaPhone className="mr-2" /> Appeler
            </a>
            <Link to="/contact" className="btn btn-primary text-sm xl:text-base px-4 py-2 shadow-lg hover:shadow-xl">
              Prendre RDV
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary-600 text-2xl p-2 hover:bg-primary-50 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-2xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className="pt-4 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a href="tel:+212XXXXXXXXX" className="btn btn-outline w-full justify-center">
                  <FaPhone className="mr-2" /> Appeler maintenant
                </a>
                <Link to="/contact" className="btn btn-primary w-full justify-center shadow-lg">
                  Prendre rendez-vous
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
