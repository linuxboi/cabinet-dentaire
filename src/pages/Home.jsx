import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaAward, FaUserMd, FaShieldAlt, FaTooth, FaSmile, FaHeart } from 'react-icons/fa';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: true },
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Souriez, le bonheur est contagieux.
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-95 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Orthodontie, soins dentaires et esthétique à Casablanca
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/contact" className="btn btn-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl">
                Prendre rendez-vous
              </Link>
              <a href="tel:+212XXXXXXXXX" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Appeler maintenant
              </a>
            </motion.div>

            {/* Bande de réassurance */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 text-sm sm:text-base bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                <FaStar className="text-yellow-400 text-lg sm:text-xl flex-shrink-0" />
                <span className="whitespace-nowrap">★★★★★ Avis Google</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm sm:text-base bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                <FaAward className="text-lg sm:text-xl flex-shrink-0" />
                <span className="whitespace-nowrap">+17 ans d'expérience</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm sm:text-base bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                <FaUserMd className="text-lg sm:text-xl flex-shrink-0" />
                <span className="whitespace-nowrap">Urgences acceptées</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Aperçu */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 sm:mb-12"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Nos Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Des soins dentaires complets pour toute la famille
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: FaTooth, title: 'Orthodontie', desc: 'Alignement dentaire et correction des malpositions pour un sourire harmonieux.' },
              { icon: FaShieldAlt, title: 'Soins & Prévention', desc: 'Examens réguliers, détartrage et traitements préventifs pour votre santé bucco-dentaire.' },
              { icon: FaSmile, title: 'Esthétique dentaire', desc: 'Blanchiment, facettes et restaurations esthétiques pour sublimer votre sourire.' }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:gap-2 transition-all">
                  En savoir plus <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            {...fadeInUp}
          >
            <Link to="/services" className="btn btn-primary shadow-xl hover:shadow-2xl">
              Voir tous nos services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi Mandarona */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 sm:mb-12"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Pourquoi choisir Mandarona ?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Votre santé bucco-dentaire mérite ce qu'il y a de mieux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { icon: FaUserMd, title: 'Équipe expérimentée', desc: 'Des praticiens qualifiés et bienveillants avec plus de 17 ans d\'expérience dans tous les domaines de la dentisterie.' },
              { icon: FaAward, title: 'Technologie de pointe', desc: 'Équipements modernes : radiographie 3D, stérilisation avancée, techniques innovantes pour des soins de qualité supérieure.' },
              { icon: FaShieldAlt, title: 'Hygiène certifiée', desc: 'Protocoles d\'hygiène et de sécurité rigoureux conformes aux normes internationales pour votre protection.' },
              { icon: FaSmile, title: 'Accompagnement personnalisé', desc: 'Une écoute attentive et des plans de traitement sur mesure adaptés à vos besoins et votre budget.' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4 sm:space-x-5 bg-white p-6 sm:p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 sm:mb-12"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Ils nous font confiance</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Les avis de nos patients satisfaits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { text: 'Équipe très professionnelle et accueillante. Le Dr Zaki a fait un travail exceptionnel sur mon orthodontie. Je recommande vivement !', author: 'Fatima Z.' },
              { text: 'Centre moderne et propre. Personnel chaleureux et à l\'écoute. Mes enfants n\'ont plus peur d\'aller chez le dentiste !', author: 'Karim M.' },
              { text: 'Résultats incroyables sur mon blanchiment dentaire. Service impeccable du début à la fin. Merci à toute l\'équipe !', author: 'Salma B.' }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-primary-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-yellow-400 text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">★★★★★</div>
                <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed mb-3 sm:mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            {...fadeInUp}
          >
            Prêt à retrouver votre sourire ?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto px-4"
            {...fadeInUp}
          >
            Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link to="/contact" className="btn btn-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-2xl hover:scale-105 transition-transform">
              Prendre rendez-vous
            </Link>
            <a href="https://wa.me/212XXXXXXXXX" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform">
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
