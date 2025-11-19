import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-200">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              Centre Dentaire Mandarona
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Votre sourire est notre priorité. Nous offrons des soins dentaires modernes,
              personnalisés et humains dans un environnement chaleureux.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-all hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/212XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-all hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {['/', '/a-propos', '/services', '/equipe', '/avant-apres', '/contact'].map((path, index) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-600 hover:text-primary-600 transition-all inline-block hover:translate-x-1"
                  >
                    {['Accueil', 'À propos', 'Nos Services', 'Notre Équipe', 'Avant/Après', 'Contact'][index]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {['Orthodontie', 'Soins dentaires', 'Esthétique dentaire', 'Implantologie', 'Pédiatrie', 'Urgences'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-primary-600 transition-all inline-block hover:translate-x-1"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-600 text-lg mt-1 flex-shrink-0" />
                <span className="text-gray-600">Casablanca, Maroc</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-primary-600 text-lg mt-1 flex-shrink-0" />
                <a href="tel:+212XXXXXXXXX" className="text-gray-600 hover:text-primary-600 transition-colors">
                  +212 XXX XXX XXX
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-600 text-lg mt-1 flex-shrink-0" />
                <a href="mailto:contact@mandarona.ma" className="text-gray-600 hover:text-primary-600 transition-colors">
                  contact@mandarona.ma
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-primary-600 text-lg mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Lun-Ven: 9h-19h<br />Sam: 9h-13h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Centre Dentaire Mandarona - Tous droits réservés
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <Link to="/mentions-legales" className="text-gray-600 hover:text-primary-600 transition-colors">
              Mentions légales
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/politique-confidentialite" className="text-gray-600 hover:text-primary-600 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
