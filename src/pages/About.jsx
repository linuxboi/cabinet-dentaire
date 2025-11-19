import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaAward, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-16 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            À propos du Centre Dentaire Mandarona
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Votre santé bucco-dentaire, notre priorité depuis plus de 17 ans
          </motion.p>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Notre Mission</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                <p>
                  Au <strong className="text-gray-900">Centre Dentaire Mandarona</strong>, nous croyons que chaque sourire
                  raconte une histoire unique. Notre mission est d'offrir des soins dentaires modernes,
                  personnalisés et humains, dans un environnement chaleureux et sécurisé.
                </p>
                <p>
                  Depuis notre création, nous nous engageons à fournir des traitements de la plus
                  haute qualité, en combinant expertise médicale, technologies de pointe et une
                  approche centrée sur le patient.
                </p>
                <p>
                  Que vous ayez besoin de soins préventifs, de traitements orthodontiques ou
                  d'esthétique dentaire, notre équipe dévouée est là pour vous accompagner à
                  chaque étape de votre parcours vers un sourire éclatant de santé.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center p-6">
                <FaHeart className="text-primary-600 text-6xl sm:text-7xl lg:text-8xl mb-4 mx-auto" />
                <p className="text-gray-700 font-medium">Image du cabinet</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 sm:mb-12"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Nos Valeurs</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Les principes qui guident notre pratique quotidienne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { icon: FaHeart, title: 'Bienveillance', desc: 'Nous traitons chaque patient avec respect, empathie et attention. Votre confort et votre bien-être sont au cœur de nos préoccupations.' },
              { icon: FaAward, title: 'Excellence', desc: 'Formation continue, équipements à la pointe de la technologie et protocoles de soins rigoureux pour des résultats optimaux.' },
              { icon: FaShieldAlt, title: 'Sécurité', desc: 'Respect strict des normes d\'hygiène internationales et protocoles de stérilisation avancés pour votre protection totale.' },
              { icon: FaUsers, title: 'Accessibilité', desc: 'Soins de qualité accessibles à tous, avec des plans de traitement personnalisés adaptés à votre budget et vos besoins.' }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 sm:mb-12"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Notre Approche</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Un parcours de soins pensé pour votre confort
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {[
              { num: '1', title: 'Consultation & Diagnostic', desc: 'Examen complet de votre santé bucco-dentaire avec des technologies d\'imagerie avancées (radiographie 3D) pour un diagnostic précis.' },
              { num: '2', title: 'Plan de Traitement Personnalisé', desc: 'Élaboration d\'un plan sur mesure adapté à vos besoins, vos objectifs et votre budget, avec des explications claires et transparentes.' },
              { num: '3', title: 'Soins & Suivi', desc: 'Réalisation des traitements dans le confort et la sérénité, avec un suivi régulier pour garantir des résultats durables.' },
              { num: '4', title: 'Prévention & Conseils', desc: 'Accompagnement post-traitement avec des conseils personnalisés pour maintenir votre sourire en pleine santé.' }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                  {step.num}
                </div>
                <motion.div 
                  className="flex-1 bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center sm:text-left">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Chiffres */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: '17+', label: 'Années d\'expérience' },
              { number: '5000+', label: 'Patients satisfaits' },
              { number: '100%', label: 'Équipements modernes' },
              { number: '★★★★★', label: 'Avis Google' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg opacity-95">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
