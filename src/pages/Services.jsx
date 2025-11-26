import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      category: t('servicesPage.categories.surgery'),
      title: t('servicesPage.items.implantology'),
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('servicesPage.categories.kids'),
      title: t('servicesPage.items.pedodontics'),
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('servicesPage.categories.esthetic'),
      title: t('servicesPage.items.whitening'),
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('servicesPage.categories.surgery'),
      title: t('servicesPage.items.extraction'),
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('servicesPage.categories.periodontics'),
      title: t('servicesPage.items.gumCare'),
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('servicesPage.categories.emergency'),
      title: t('servicesPage.items.emergencies'),
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('servicesPage.categories.orthodontics'),
      title: t('servicesPage.items.alignment'),
      image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('servicesPage.categories.prevention'),
      title: t('servicesPage.items.conservative'),
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('servicesPage.categories.esthetic'),
      title: t('servicesPage.items.veneers'),
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
            alt="Services Hero"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* White Overlay Shape */}
        <div className="absolute bottom-0 left-0 w-full lg:w-[45%] bg-white rounded-tr-[5rem] p-8 lg:p-20 pt-20 lg:pt-32">
          <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-6">{t('servicesPage.hero.title')}</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md">
            {t('servicesPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {service.category}
                    </span>
                    <h3 className="text-3xl font-light text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div>
                    <button className="px-6 py-3 border border-white/30 rounded-lg text-white text-sm font-medium backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300">
                      {t('servicesPage.learnMore')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 lg:pb-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[600px]">
            {/* Left Image */}
            <div className="lg:w-1/2 rounded-[3rem] overflow-hidden relative h-[400px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt="Doctor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 bg-accent-50 rounded-[3rem] p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                {t('servicesPage.cta.subtitle')}
              </span>
              <h2 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t('servicesPage.cta.title') }} />
              <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-md">
                {t('servicesPage.cta.description')}
              </p>
              <div>
                <Link to="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block">
                  {t('servicesPage.cta.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
