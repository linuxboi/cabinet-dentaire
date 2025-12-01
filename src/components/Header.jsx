import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LogoIcon from '../assets/icon.png';

const Header = () => {
  const { t, i18n } = useTranslation();
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { path: '/', label: t('header.home'), hasDropdown: false },
    { path: '/equipe', label: t('header.team'), hasDropdown: false },
    { path: '/services', label: t('header.services'), hasDropdown: true },
    { path: '/avant-apres', label: t('header.beforeAfter'), hasDropdown: false },
    { path: '/contact', label: t('header.contact'), hasDropdown: false },
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4 sm:py-6'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={LogoIcon} alt="Mandarona" className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight leading-none">Mandarona</span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">{t('header.dentalCenter')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="flex items-center gap-1 text-gray-600 hover:text-primary-600 font-medium text-base transition-colors relative group"
              >
                {link.label}
                {link.hasDropdown && <FaChevronDown className="text-[10px] mt-0.5 opacity-50 group-hover:opacity-100" />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage('fr')}
                className={`font-medium transition-colors ${i18n.language === 'fr' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
              >
                FR
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`font-medium transition-colors ${i18n.language === 'en' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
              >
                EN
              </button>
            </div>
            <a href="https://wa.me/212XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary-600 font-medium transition-colors">
              <FaWhatsapp className="text-xl" />
              <span className="hidden xl:inline">+212 6XX XX XX XX</span>
            </a>

            <Link to="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200 transform hover:-translate-y-0.5">
              {t('header.bookAppointment')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-900 text-2xl p-2 hover:bg-gray-50 rounded-lg transition-colors"
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
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="block px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 flex justify-between items-center transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && <FaChevronDown className="text-xs opacity-50" />}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="pt-6 space-y-4 border-t border-gray-100 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a href="tel:+212XXXXXXXXX" className="flex items-center justify-center gap-3 text-gray-600 font-bold text-lg">
                  <FaPhoneAlt className="text-primary-600" />
                  <span>+212 5XX XX XX XX</span>
                </a>
                <Link to="/contact" className="btn bg-primary-600 text-white w-full justify-center rounded-xl font-bold hover:bg-primary-700 py-4 shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('header.bookAppointment')}
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
