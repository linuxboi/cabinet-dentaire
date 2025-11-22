import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';

const CTA = ({ 
  title = "Prêt à retrouver votre sourire ?", 
  subtitle = "Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée",
  showWhatsApp = true 
}) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              className="btn btn-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center gap-2"
            >
              <FaCalendarAlt /> Prendre rendez-vous
            </Link>
          </motion.div>
          
          {showWhatsApp && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="https://wa.me/212XXXXXXXXX" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
