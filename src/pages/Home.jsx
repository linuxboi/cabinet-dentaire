import { Link } from 'react-router-dom';
import { FaStar, FaAward, FaUserMd, FaShieldAlt, FaTooth, FaSmile, FaHeart } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Souriez, le bonheur est contagieux.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in-up animation-delay-200">
              Orthodontie, soins dentaires et esthétique à Casablanca
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
              <Link to="/contact" className="btn btn-white text-lg px-8 py-4">
                Prendre rendez-vous
              </Link>
              <a href="tel:+212XXXXXXXXX" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
                Appeler maintenant
              </a>
            </div>

            {/* Bande de réassurance */}
            <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400 text-xl" />
                <span>★★★★★ Avis Google</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaAward className="text-xl" />
                <span>+17 ans d'expérience</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUserMd className="text-xl" />
                <span>Urgences acceptées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Aperçu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des soins dentaires complets pour toute la famille
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: FaTooth, title: 'Orthodontie', desc: 'Alignement dentaire et correction des malpositions pour un sourire harmonieux.' },
              { icon: FaShieldAlt, title: 'Soins & Prévention', desc: 'Examens réguliers, détartrage et traitements préventifs pour votre santé bucco-dentaire.' },
              { icon: FaSmile, title: 'Esthétique dentaire', desc: 'Blanchiment, facettes et restaurations esthétiques pour sublimer votre sourire.' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-primary-600 text-5xl mb-4 flex justify-center">
                  <service.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <Link to="/services" className="text-primary-600 hover:text-primary-700 font-medium">
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn btn-outline">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi Mandarona */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir Mandarona ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Votre santé bucco-dentaire mérite ce qu'il y a de mieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: FaUserMd, title: 'Équipe expérimentée', desc: 'Des praticiens qualifiés et bienveillants avec plus de 17 ans d\'expérience dans tous les domaines de la dentisterie.' },
              { icon: FaAward, title: 'Technologie de pointe', desc: 'Équipements modernes : radiographie 3D, stérilisation avancée, techniques innovantes pour des soins de qualité supérieure.' },
              { icon: FaShieldAlt, title: 'Hygiène certifiée', desc: 'Protocoles d\'hygiène et de sécurité rigoureux conformes aux normes internationales pour votre protection.' },
              { icon: FaSmile, title: 'Accompagnement personnalisé', desc: 'Une écoute attentive et des plans de traitement sur mesure adaptés à vos besoins et votre budget.' }
            ].map((item, index) => (
              <div key={index} className="flex space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary-600 text-4xl flex-shrink-0">
                  <item.icon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les avis de nos patients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: 'Équipe très professionnelle et accueillante. Le Dr Zaki a fait un travail exceptionnel sur mon orthodontie. Je recommande vivement !', author: 'Fatima Z.' },
              { text: 'Centre moderne et propre. Personnel chaleureux et à l\'écoute. Mes enfants n\'ont plus peur d\'aller chez le dentiste !', author: 'Karim M.' },
              { text: 'Résultats incroyables sur mon blanchiment dentaire. Service impeccable du début à la fin. Merci à toute l\'équipe !', author: 'Salma B.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 italic leading-relaxed mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à retrouver votre sourire ?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-white text-lg px-8 py-4">
              Prendre rendez-vous
            </Link>
            <a href="https://wa.me/212XXXXXXXXX" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
