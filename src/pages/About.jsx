import { FaHeart, FaUsers, FaAward, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos du Centre Dentaire Mandarona</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Votre santé bucco-dentaire, notre priorité depuis plus de 17 ans
          </p>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
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
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <FaHeart className="text-primary-600 text-8xl mb-4 mx-auto" />
                <p className="text-gray-600">Image du cabinet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre pratique quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: FaHeart, title: 'Bienveillance', desc: 'Nous traitons chaque patient avec respect, empathie et attention. Votre confort et votre bien-être sont au cœur de nos préoccupations.' },
              { icon: FaAward, title: 'Excellence', desc: 'Formation continue, équipements à la pointe de la technologie et protocoles de soins rigoureux pour des résultats optimaux.' },
              { icon: FaShieldAlt, title: 'Sécurité', desc: 'Respect strict des normes d\'hygiène internationales et protocoles de stérilisation avancés pour votre protection totale.' },
              { icon: FaUsers, title: 'Accessibilité', desc: 'Soins de qualité accessibles à tous, avec des plans de traitement personnalisés adaptés à votre budget et vos besoins.' }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-primary-600 text-5xl mb-4 flex justify-center">
                  <value.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Approche</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un parcours de soins pensé pour votre confort
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { num: '1', title: 'Consultation & Diagnostic', desc: 'Examen complet de votre santé bucco-dentaire avec des technologies d\'imagerie avancées (radiographie 3D) pour un diagnostic précis.' },
              { num: '2', title: 'Plan de Traitement Personnalisé', desc: 'Élaboration d\'un plan sur mesure adapté à vos besoins, vos objectifs et votre budget, avec des explications claires et transparentes.' },
              { num: '3', title: 'Soins & Suivi', desc: 'Réalisation des traitements dans le confort et la sérénité, avec un suivi régulier pour garantir des résultats durables.' },
              { num: '4', title: 'Prévention & Conseils', desc: 'Accompagnement post-traitement avec des conseils personnalisés pour maintenir votre sourire en pleine santé.' }
            ].map((step, index) => (
              <div key={index} className="flex space-x-6 items-start">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                  {step.num}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Chiffres */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '17+', label: 'Années d\'expérience' },
              { number: '5000+', label: 'Patients satisfaits' },
              { number: '100%', label: 'Équipements modernes' },
              { number: '★★★★★', label: 'Avis Google' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-95">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
