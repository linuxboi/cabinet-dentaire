import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beforeAfterCases = [
    { id: 1, title: 'Orthodontie - Alignement dentaire', category: 'Orthodontie', description: 'Correction complète de l\'alignement dentaire en 18 mois' },
    { id: 2, title: 'Blanchiment dentaire professionnel', category: 'Esthétique', description: 'Éclaircissement de 8 teintes en une seule séance' },
    { id: 3, title: 'Facettes en céramique', category: 'Esthétique', description: 'Transformation complète du sourire avec facettes' },
    { id: 4, title: 'Implants dentaires', category: 'Implantologie', description: 'Remplacement de dents manquantes avec implants' },
    { id: 5, title: 'Orthodontie invisible', category: 'Orthodontie', description: 'Traitement par aligneurs transparents' },
    { id: 6, title: 'Réhabilitation complète', category: 'Général', description: 'Restauration esthétique et fonctionnelle complète' }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev === beforeAfterCases.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? beforeAfterCases.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="font-sans text-primary-600">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-widest text-sm font-semibold mb-4 block text-accent-500">
              GALERIE
            </span>
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
              Des résultats <br/>
              <span className="font-bold">qui parlent d'eux-mêmes</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez les transformations réalisées par notre équipe. Chaque sourire est unique et mérite une attention particulière.
            </p>
          </motion.div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-accent-500"></div>
              
              <div className="text-center mb-12">
                <span className="inline-block px-6 py-2 bg-accent-100 text-primary-600 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                  {beforeAfterCases[currentIndex].category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                  {beforeAfterCases[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-lg">{beforeAfterCases[currentIndex].description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                <div className="relative group">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                    AVANT
                  </div>
                  <div className="h-80 bg-gray-200 rounded-[2rem] overflow-hidden shadow-inner">
                    {/* Placeholder for Before Image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Image Avant
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-4 left-4 bg-primary-600/90 text-white backdrop-blur px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                    APRÈS
                  </div>
                  <div className="h-80 bg-accent-100 rounded-[2rem] overflow-hidden shadow-inner">
                    {/* Placeholder for After Image */}
                    <div className="w-full h-full flex items-center justify-center text-primary-600/50">
                      Image Après
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-8">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 bg-white border-2 border-primary-600 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg"
                  aria-label="Précédent"
                >
                  <FaChevronLeft className="text-xl" />
                </button>

                <div className="flex space-x-3">
                  {beforeAfterCases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-primary-600 w-10' : 'bg-gray-300 w-3 hover:bg-accent-500'
                      }`}
                      aria-label={`Aller au cas ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Suivant"
                >
                  <FaChevronRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-20 bg-primary-600 text-white rounded-t-[3rem]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-6">Tous nos cas</h2>
            <p className="opacity-80 max-w-2xl mx-auto text-lg">Explorez notre galerie complète de transformations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterCases.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`bg-white rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 group ${
                  index === currentIndex ? 'ring-4 ring-accent-500' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="inline-block px-3 py-1 bg-accent-500 text-primary-600 rounded-full text-xs font-bold mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light text-primary-600 mb-8">
            Prêt à transformer <span className="font-bold">votre sourire ?</span>
          </h2>
          <a 
            href="/contact" 
            className="inline-block bg-accent-100 text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
