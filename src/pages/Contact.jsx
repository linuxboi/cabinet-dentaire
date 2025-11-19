import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'consultation',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    setTimeout(() => {
      console.log('Form data:', formData);
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', subject: 'consultation', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-1 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos Coordonnées</h2>
              <p className="text-gray-600 mb-8">
                N'hésitez pas à nous contacter par téléphone, email ou à venir
                directement nous rendre visite à notre cabinet.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">123 Boulevard Mohammed V<br />Casablanca 20000, Maroc</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <a href="tel:+212XXXXXXXXX" className="text-gray-600 hover:text-primary-600">+212 XXX XXX XXX</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <a href="https://wa.me/212XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                      +212 XXX XXX XXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:contact@mandarona.ma" className="text-gray-600 hover:text-primary-600">contact@mandarona.ma</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horaires d'ouverture</h4>
                    <p className="text-gray-600 text-sm">
                      Lundi - Vendredi: 9h00 - 19h00<br />
                      Samedi: 9h00 - 13h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a href="tel:+212XXXXXXXXX" className="btn btn-primary w-full">
                  <FaPhone className="mr-2" /> Appeler maintenant
                </a>
                <a href="https://wa.me/212XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prendre Rendez-vous</h2>
              <p className="text-gray-600 mb-8">
                Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-gray-700 font-medium mb-2">
                    <FaUser className="text-primary-600 mr-2" /> Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom et prénom"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="flex items-center text-gray-700 font-medium mb-2">
                      <FaPhone className="text-primary-600 mr-2" /> Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+212 XXX XXX XXX"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center text-gray-700 font-medium mb-2">
                      <FaEnvelope className="text-primary-600 mr-2" /> Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-gray-700 font-medium mb-2 block">Motif de consultation *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
                  >
                    <option value="consultation">Consultation générale</option>
                    <option value="orthodontie">Orthodontie</option>
                    <option value="esthetique">Esthétique dentaire</option>
                    <option value="implants">Implantologie</option>
                    <option value="urgence">Urgence dentaire</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-700 font-medium mb-2 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Décrivez brièvement votre demande..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn btn-primary w-full text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Envoyer ma demande
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg text-center font-medium">
                    ✓ Votre message a été envoyé avec succès ! Nous vous recontacterons bientôt.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Où nous trouver</h2>
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-96 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <FaMapMarkerAlt className="text-primary-600 text-8xl mb-4 mx-auto" />
              <p className="text-gray-700 text-xl font-semibold mb-2">Google Maps</p>
              <p className="text-gray-600">123 Boulevard Mohammed V, Casablanca</p>
              <p className="text-sm text-gray-500 mt-4">
                Intégrer ici une vraie carte Google Maps avec l'API Google Maps
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
