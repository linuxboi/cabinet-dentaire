import { Link } from 'react-router-dom';
import { FaUserMd, FaGraduationCap, FaHeart } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr Awatif Zaki Ziraoui',
      role: 'Orthodontiste',
      specialty: 'Spécialiste en Orthodontie',
      education: [
        'Doctorat en Chirurgie Dentaire',
        'Spécialisation en Orthodontie',
        'Formation continue en orthodontie invisible'
      ],
      experience: 'Plus de 17 ans d\'expérience en orthodontie',
      description: 'Passionnée par l\'art du sourire, Dr Zaki apporte son expertise et sa précision à chaque traitement orthodontique, avec une attention particulière au confort et aux besoins esthétiques de ses patients.'
    },
    {
      id: 2,
      name: 'Dr Nawar',
      role: 'Chirurgien-Dentiste Omnipraticien',
      specialty: 'Soins dentaires généraux & Esthétique',
      education: [
        'Doctorat en Chirurgie Dentaire',
        'Formation en dentisterie esthétique',
        'Certification en implantologie'
      ],
      experience: 'Expert en soins conservateurs et esthétique dentaire',
      description: 'Alliant expertise technique et approche humaine, Dr Nawar s\'engage à offrir des soins dentaires de haute qualité dans un environnement rassurant et bienveillant.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Des professionnels dévoués à votre service
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Une équipe à votre écoute</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Au Centre Dentaire Mandarona, notre équipe pluridisciplinaire réunit des
                praticiens hautement qualifiés et passionnés par leur métier. Chaque membre
                apporte son expertise et son savoir-faire pour vous garantir des soins de
                la plus haute qualité.
              </p>
              <p>
                Notre philosophie repose sur trois piliers : l'excellence médicale,
                l'écoute attentive et la bienveillance. Nous nous engageons à créer
                une relation de confiance durable avec chaque patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-16">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-${index % 2 === 0 ? '5' : '5'} gap-0`}>
                <div className={`bg-gradient-to-br from-primary-100 to-primary-200 h-96 lg:h-auto flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2 lg:col-span-2' : 'lg:col-span-2'}`}>
                  <div className="text-center">
                    <FaUserMd className="text-primary-600 text-9xl mb-4 mx-auto" />
                    <p className="text-gray-600">Photo {member.name}</p>
                  </div>
                </div>

                <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'lg:order-1 lg:col-span-3' : 'lg:col-span-3'}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{member.name}</h2>
                  <h3 className="text-xl text-primary-600 font-medium mb-4">{member.role}</h3>
                  <p className="flex items-center space-x-2 text-gray-600 mb-6">
                    <FaGraduationCap className="text-primary-600" />
                    <span>{member.specialty}</span>
                  </p>

                  <p className="text-gray-600 italic leading-relaxed mb-6">
                    {member.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Formation</h4>
                    <ul className="space-y-2">
                      {member.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-600">
                          <span className="text-primary-600 font-bold">•</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="flex items-center space-x-2 text-primary-600 font-medium">
                    <FaHeart />
                    <span>{member.experience}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">L'équipe soignante et administrative</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un personnel qualifié pour votre confort
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-600 leading-relaxed mb-12">
            <p>
              Au-delà de nos praticiens, une équipe dévouée d'assistantes dentaires
              et de personnel administratif veille quotidiennement à votre accueil,
              votre confort et le bon déroulement de vos rendez-vous.
            </p>
            <p>
              Formées aux dernières techniques et protocoles d'hygiène, nos assistantes
              dentaires jouent un rôle essentiel dans la qualité des soins que nous
              vous prodiguons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaUserMd, title: 'Professionnalisme', desc: 'Formation continue et expertise reconnue' },
              { icon: FaHeart, title: 'Bienveillance', desc: 'Écoute, empathie et attention à chaque patient' },
              { icon: FaGraduationCap, title: 'Excellence', desc: 'Engagement vers la qualité et l\'innovation' }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow">
                <value.icon className="text-primary-600 text-5xl mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rencontrez notre équipe</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour faire connaissance avec nos praticiens
          </p>
          <Link to="/contact" className="btn btn-white text-lg px-8 py-4">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
