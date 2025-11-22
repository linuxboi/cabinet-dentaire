import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaStar, FaTooth } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: <FaAward />,
      number: '17+',
      label: "Années d'expérience",
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <FaUsers />,
      number: '5000+',
      label: 'Patients satisfaits',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <FaStar />,
      number: '★★★★★',
      label: 'Avis Google',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: <FaTooth />,
      number: '100%',
      label: 'Équipements modernes',
      color: 'from-primary-500 to-primary-700'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg group-hover:shadow-2xl transition-shadow`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  delay: index * 0.2 
                }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.number}
              </motion.div>
              
              <div className="text-xs sm:text-sm lg:text-base opacity-95 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
