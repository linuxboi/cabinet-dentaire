import { Link } from 'react-router-dom';
import { FaTooth, FaTeeth, FaSmile, FaSyringe, FaChild, FaExclamationTriangle } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 'orthodontie',
      icon: <FaTooth />,
      title: 'Orthodontie',
      description: 'Correction des malpositions dentaires et des problèmes d\'occlusion pour un sourire harmonieux et une meilleure santé bucco-dentaire.',
      details: [
        'Appareils dentaires fixes (bagues métalliques et céramiques)',
        'Aligneurs invisibles (Invisalign)',
        'Appareils amovibles',
        'Orthodontie pour enfants et adultes',
        'Traitements interceptifs précoces'
      ]
    },
    {
      id: 'soins',
      icon: <FaTeeth />,
      title: 'Soins dentaires & Prévention',
      description: 'Traitements préventifs et curatifs pour maintenir vos dents en parfaite santé tout au long de votre vie.',
      details: [
        'Examens et bilans bucco-dentaires complets',
        'Détartrage et prophylaxie',
        'Traitement des caries',
        'Soins des gencives (parodontologie)',
        'Dévitalisation et endodontie',
        'Conseils en hygiène bucco-dentaire'
      ]
    },
    {
      id: 'esthetique',
      icon: <FaSmile />,
      title: 'Esthétique dentaire',
      description: 'Solutions esthétiques avancées pour sublimer votre sourire et retrouver confiance en vous.',
      details: [
        'Blanchiment dentaire professionnel',
        'Facettes en céramique',
        'Couronnes esthétiques',
        'Reconstitution esthétique (composites)',
        'Smile design personnalisé'
      ]
    },
    {
      id: 'implantologie',
      icon: <FaSyringe />,
      title: 'Implantologie',
      description: 'Remplacement des dents manquantes par des implants dentaires pour une solution durable et esthétique.',
      details: [
        'Pose d\'implants dentaires',
        'Couronnes sur implants',
        'Bridges sur implants',
        'Prothèses complètes sur implants',
        'Greffe osseuse si nécessaire',
        'Technologie guidée par ordinateur'
      ]
    },
    {
      id: 'pediatrie',
      icon: <FaChild />,
      title: 'Dentisterie pédiatrique',
      description: 'Soins dentaires spécialisés pour les enfants dans un environnement rassurant et ludique.',
      details: [
        'Prévention et éducation bucco-dentaire',
        'Soins des dents de lait',
        'Scellement des sillons',
        'Fluoration',
        'Détection précoce des problèmes orthodontiques',
        'Approche douce et rassurante'
      ]
    },
    {
      id: 'urgences',
      icon: <FaExclamationTriangle />,
      title: 'Urgences dentaires',
      description: 'Prise en charge rapide des urgences dentaires pour soulager la douleur et traiter les problèmes aigus.',
      details: [
        'Douleurs dentaires aiguës',
        'Abcès et infections',
        'Dents cassées ou fracturées',
        'Dents expulsées (avulsion)',
        'Traumatismes dentaires',
        'Consultation dans les plus brefs délais'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Des soins dentaires complets pour toute la famille
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-primary-600 text-6xl mb-4">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-primary-600 font-bold text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn-primary">
                  Prendre rendez-vous
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-primary-600 text-8xl mb-4">{service.icon}</div>
                    <p className="text-gray-600">Image {service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Des questions sur nos services ?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous conseiller et vous orienter
            vers les soins les mieux adaptés à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-white text-lg px-8 py-4">
              Nous contacter
            </Link>
            <a href="tel:+212XXXXXXXXX" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
