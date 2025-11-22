import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaArrowRight } from 'react-icons/fa';

const Team = () => {
  const doctors = [
    {
      name: 'Dr. Amine Benjelloun',
      role: 'Esthétique Dentaire',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Sarah Alami',
      role: 'Soins Préventifs',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Karim Tazi',
      role: 'Orthodontie',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Leila Berrada',
      role: 'Soins Spécialisés',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Omar El Fassi',
      role: 'Soins Spécialisés',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Dr. Youssef Bennani',
      role: 'Orthodontie',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-50 min-h-[600px] flex items-center">
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <div className="lg:w-1/2 py-12 lg:py-0">
                    <div className="bg-white p-8 lg:p-16 rounded-[3rem] shadow-xl max-w-xl relative z-20">
                        <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8">Notre Équipe</h1>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Rencontrez l'équipe talentueuse de notre clinique, dédiée à fournir des soins personnalisés à chacun de nos patients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* Right Image (Background style) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] h-full z-0">
            <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80" 
                alt="Team" 
                className="w-full h-full object-cover object-center lg:rounded-bl-[5rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 via-transparent to-transparent lg:hidden"></div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor, index) => (
                    <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="mb-2">
                            <h3 className="text-2xl font-light text-gray-900">{doctor.name}</h3>
                            <p className="text-gray-400 text-sm">{doctor.role}</p>
                        </div>
                        
                        <div className="flex justify-center my-8">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50">
                                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                            <Link to="#" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary-600 transition-colors">
                                Voir le profil <FaArrowRight className="-rotate-45" />
                            </Link>
                            <div className="flex gap-2">
                                <a href="#" className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors">
                                    <FaTwitter size={12} />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors">
                                    <FaLinkedinIn size={12} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Sign up CTA */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Collage */}
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                    <div className="col-span-2 h-64 rounded-[2rem] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-48 rounded-[2rem] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-48 rounded-[2rem] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Right Content */}
                <div className="lg:w-1/2 bg-primary-600 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
                            Prenez rendez-vous <br/> <span className="font-medium">dès aujourd'hui</span>
                        </h2>
                        <p className="text-primary-100/80 text-lg leading-relaxed mb-12 max-w-md">
                            Avec des années d'expérience et un engagement envers la formation continue, nos médecins sont des experts dans leur domaine et s'efforcent de fournir le plus haut niveau de soins dentaires.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
