import { useState } from 'react';
import { motion } from 'framer-motion';
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
              CONTACT
            </span>
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
              Nous sommes <br/>
              <span className="font-bold">à votre écoute</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Une question ? Un rendez-vous ? Notre équipe est là pour vous répondre et vous accompagner.
            </p>
          </motion.div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-primary-600 text-white p-8 rounded-[2rem] shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-500 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Adresse</h4>
                      <p className="opacity-80 text-sm">123 Boulevard Mohammed V<br />Casablanca 20000, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-500 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Téléphone</h4>
                      <a href="tel:+212XXXXXXXXX" className="opacity-80 hover:opacity-100 transition-opacity text-sm">+212 XXX XXX XXX</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-500 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a href="mailto:contact@mandarona.ma" className="opacity-80 hover:opacity-100 transition-opacity text-sm">contact@mandarona.ma</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-100 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Horaires d'ouverture</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-bold">9h00 - 19h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-bold">9h00 - 13h00</span>
                  </li>
                  <li className="flex justify-between text-red-500">
                    <span>Dimanche</span>
                    <span className="font-bold">Fermé</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-light mb-8 text-primary-600">
                  Envoyez-nous <span className="font-bold">un message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none"
                        placeholder="Votre numéro"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Sujet</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none appearance-none"
                      >
                        <option value="consultation">Consultation générale</option>
                        <option value="orthodontie">Orthodontie</option>
                        <option value="esthetique">Esthétique dentaire</option>
                        <option value="implants">Implantologie</option>
                        <option value="urgence">Urgence</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    {formStatus === 'sending' ? 'Envoi en cours...' : (
                      <>
                        <span>Envoyer le message</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </button>

                  {formStatus === 'success' && (
                    <div className="bg-green-50 text-green-700 px-6 py-4 rounded-xl text-center font-medium border border-green-200">
                      Message envoyé avec succès ! Nous vous répondrons rapidement.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-[3rem] shadow-xl overflow-hidden h-[400px] relative">
             {/* Placeholder for Map */}
             <div className="w-full h-full bg-[#e5e7eb] rounded-[2.5rem] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FaMapMarkerAlt className="text-6xl mx-auto mb-4 text-primary-600" />
                  <p className="text-xl font-medium">Carte Google Maps</p>
                  <p>123 Boulevard Mohammed V, Casablanca</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
