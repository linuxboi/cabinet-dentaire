import { useState } from 'react';
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
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Avant / Après</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Découvrez les transformations réalisées par notre équipe
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Des résultats qui parlent d'eux-mêmes</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Chaque sourire est unique et mérite une attention particulière.
              Découvrez quelques-unes de nos réalisations et les transformations
              accomplies grâce à notre expertise et notre engagement envers l'excellence.
            </p>
            <p className="text-sm text-gray-500 italic">
              * Toutes les photos ont été prises avec le consentement des patients.
              Les résultats peuvent varier selon les cas individuels.
            </p>
          </div>
        </div>
      </section>

      {/* Slider principal */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium mb-4">
                  {beforeAfterCases[currentIndex].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {beforeAfterCases[currentIndex].title}
                </h3>
                <p className="text-gray-600">{beforeAfterCases[currentIndex].description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
                <div>
                  <div className="text-center mb-3">
                    <span className="text-lg font-semibold text-gray-900 uppercase tracking-wider">Avant</span>
                  </div>
                  <div className="h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center text-white font-medium">
                    Image Avant
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    →
                  </div>
                </div>

                <div>
                  <div className="text-center mb-3">
                    <span className="text-lg font-semibold text-gray-900 uppercase tracking-wider">Après</span>
                  </div>
                  <div className="h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white font-medium">
                    Image Après
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  aria-label="Précédent"
                >
                  <FaChevronLeft />
                </button>

                <div className="flex space-x-2">
                  {beforeAfterCases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Aller au cas ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  aria-label="Suivant"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie miniatures */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Tous nos cas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beforeAfterCases.map((item, index) => (
              <div
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 ${
                  index === currentIndex ? 'ring-4 ring-primary-600' : ''
                }`}
              >
                <div className="grid grid-cols-2 gap-1">
                  <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white text-sm font-medium">
                    Avant
                  </div>
                  <div className="h-40 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-medium">
                    Après
                  </div>
                </div>
                <div className="p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-primary-600 rounded-full text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre sourire ?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Prenez rendez-vous pour une consultation personnalisée et découvrez
            ce que nous pouvons faire pour vous
          </p>
          <a href="/contact" className="btn btn-white text-lg px-8 py-4">
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
