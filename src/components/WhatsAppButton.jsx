import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '212XXXXXXXXX';
  const message = encodeURIComponent('Bonjour, je souhaite prendre rendez-vous au Centre Dentaire Mandarona.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 animate-pulse"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
    </a>
  );
};

export default WhatsAppButton;
