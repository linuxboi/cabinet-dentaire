import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTooth, FaCheck, FaStar, FaShieldAlt, FaSmile, FaUserMd, FaHeart, FaMicroscope } from 'react-icons/fa';
import CTA from '../components/CTA';

import { useTranslation } from 'react-i18next';

const Home = () => {
   const { t } = useTranslation();
   const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

   const reviews = [
      {
         name: "Hassan Toufik",
         text: "Excellent service. Dr Awatif Zaki Ziraoui is brilliant and dedicated to patients satisfaction. At each review appointment she will listened to your concerns and is always upfront about timelines.",
         rating: 5
      },
      {
         name: "Dirar Elharti",
         text: "Excellent service The Best",
         rating: 5
      },
      {
         name: "Omar BENJELLOUN",
         text: "Reasonable appointment times and very competent dentist",
         rating: 5
      },
      {
         name: "Nabila AIT ALI",
         text: "Very, very competent dentist with excellent follow-up",
         rating: 5
      }
   ];

   return (
      <div className="font-sans text-gray-800 overflow-x-hidden">
         {/* Hero Section */}
         <section className="relative bg-gray-50 pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
               {/* Left Content */}
               <div className="lg:w-1/2 z-10 relative mb-12 lg:mb-0">
                  <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="text-5xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.1]"
                     dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
                  />
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 }}
                     className="text-gray-500 mb-10 max-w-md text-lg"
                  >
                     {t('home.hero.subtitle')}
                  </motion.p>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     className="flex flex-col sm:flex-row items-start gap-8 mb-16"
                  >
                     <Link to="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                        {t('home.hero.bookAppointment')}
                     </Link>
                     <div className="text-sm text-gray-500 pt-1">
                        <p className="mb-1">{t('home.hero.emergency')}</p>
                        <Link to="/contact" className="text-gray-900 font-bold flex items-center gap-2 hover:text-primary-600 transition-colors">
                           {t('home.hero.contactUs')} <span className="text-lg">→</span>
                        </Link>
                     </div>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="flex gap-6"
                  >
                     <div className="rounded-[2rem] overflow-hidden w-40 h-40 shadow-lg">
                        <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=300&q=80" alt="Dentist" className="w-full h-full object-cover" />
                     </div>
                     <div className="rounded-[2rem] overflow-hidden w-40 h-40 shadow-lg mt-8">
                        <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300&q=80" alt="Chair" className="w-full h-full object-cover" />
                     </div>
                  </motion.div>
               </div>
               {/* Right Image */}
               <div className="lg:w-1/2 relative pl-0 lg:pl-10">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8 }}
                     className="relative rounded-[3rem] overflow-hidden shadow-2xl"
                  >
                     <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" alt="Smiling Woman" className="w-full h-auto object-cover" />

                     {/* Overlay Card */}
                     <div className="absolute bottom-8 left-4 right-4 sm:left-8 sm:right-8 bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-3xl text-white overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                        <div className="relative z-10">
                           <p className="uppercase tracking-[0.2em] text-xs font-medium mb-3 opacity-90">{t('home.hero.yourHealthPriority')}</p>
                           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                              <span className="text-3xl font-light">{t('home.hero.callUs')}</span>
                              <a href="tel:+212XXXXXXXXX" className="text-lg font-medium bg-white/20 hover:bg-white/30 transition-colors px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                                 05 XX XX XX XX
                              </a>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Intro Section */}
         <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
               <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
                  <div className="lg:w-1/3 pt-4">
                     <p className="text-gray-500 text-lg leading-relaxed">{t('home.intro.slogan')}</p>
                  </div>
                  <div className="lg:w-2/3">
                     <h2 className="text-3xl lg:text-5xl font-light leading-tight text-gray-900 mb-8">
                        {t('home.intro.title')}
                     </h2>
                     <FaTooth className="text-5xl text-gray-900" />
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="flex gap-6">
                     <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80" className="rounded-[2rem] w-1/2 h-80 object-cover shadow-lg" />
                     <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80" className="rounded-[2rem] w-1/2 h-80 object-cover mt-16 shadow-lg" />
                  </div>
                  <div className="lg:pl-8">
                     <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        {t('home.intro.description')}
                     </p>
                     <button
                        onClick={() => setIsLearnMoreOpen(!isLearnMoreOpen)}
                        className="text-gray-900 font-bold flex items-center gap-2 hover:gap-4 transition-all group mb-4"
                     >
                        {t('home.intro.learnMore')} <span className={`text-xl transition-transform ${isLearnMoreOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`}>→</span>
                     </button>

                     <AnimatePresence>
                        {isLearnMoreOpen && (
                           <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                           >
                              <p className="text-gray-600 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                 {t('home.intro.extendedDescription')}
                              </p>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>
            </div>
         </section>

         {/* Why Choose Us */}
         <section className="py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <span className="uppercase tracking-[0.2em] text-xs font-medium text-gray-400">{t('home.whyChooseUs.title')}</span>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { title: t('home.whyChooseUs.items.tech.title'), desc: t('home.whyChooseUs.items.tech.desc'), icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png' },
                     { title: t('home.whyChooseUs.items.painless.title'), desc: t('home.whyChooseUs.items.painless.desc'), icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966456.png' },
                     { title: t('home.whyChooseUs.items.transparency.title'), desc: t('home.whyChooseUs.items.transparency.desc'), icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966486.png' },
                     { title: t('home.whyChooseUs.items.expertTeam.title'), desc: t('home.whyChooseUs.items.expertTeam.desc'), icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966356.png' }
                  ].map((item, index) => (
                     <div key={index} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <h3 className="text-2xl font-light text-gray-900 mb-6">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-sm">{item.desc}</p>
                        <div className="mt-auto">
                           <img src={item.icon} alt={item.title} className="w-12 h-12 opacity-20 grayscale" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Everything you need */}
         <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
               <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                     <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80" alt="Child Smiling" className="w-full h-auto" />
                     </div>
                  </div>
                  <div className="lg:w-1/2 lg:pl-10">
                     <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('home.everythingYouNeed.title') }} />
                     <p className="text-gray-500 mb-10">{t('home.everythingYouNeed.subtitle')}</p>

                     <ul className="space-y-6">
                        {(t('home.everythingYouNeed.items', { returnObjects: true }) || []).map((item, index) => (
                           <li key={index} className="flex items-center gap-4 text-gray-600">
                              <span className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 text-xs">
                                 <FaCheck />
                              </span>
                              {item}
                           </li>
                        ))}
                     </ul>
                     <p className="mt-8 text-gray-400 italic">{t('home.everythingYouNeed.more')}</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Services (Dark) */}
         <section className="py-20 lg:py-32 bg-primary-900 text-white">
            <div className="container mx-auto px-4">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                     <span className="uppercase tracking-[0.2em] text-xs font-medium text-primary-300 mb-4 block">{t('home.services.expertise')}</span>
                     <h2 className="text-4xl lg:text-5xl font-light">{t('home.services.title')}</h2>
                  </div>
                  <Link to="/services" className="hidden md:inline-block text-white border-b border-white/30 pb-1 hover:text-primary-200 hover:border-primary-200 transition-colors">
                     {t('home.services.allServices')}
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     { title: t('home.services.items.orthodontics.title'), desc: t('home.services.items.orthodontics.desc'), icon: FaTooth },
                     { title: t('home.services.items.carePrevention.title'), desc: t('home.services.items.carePrevention.desc'), icon: FaShieldAlt },
                     { title: t('home.services.items.esthetic.title'), desc: t('home.services.items.esthetic.desc'), icon: FaSmile },
                     { title: t('home.services.items.surgery.title'), desc: t('home.services.items.surgery.desc'), icon: FaUserMd },
                     { title: t('home.services.items.periodontics.title'), desc: t('home.services.items.periodontics.desc'), icon: FaHeart },
                     { title: t('home.services.items.prosthesis.title'), desc: t('home.services.items.prosthesis.desc'), icon: FaMicroscope }
                  ].map((service, index) => (
                     <div key={index} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-white group-hover:text-primary-900 transition-colors duration-300">
                           <service.icon />
                        </div>
                        <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                        <p className="text-primary-100/70 leading-relaxed mb-8 text-sm">{service.desc}</p>
                        <Link to="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-wider hover:text-primary-300 transition-colors">
                           {t('home.services.learnMore')} <span className="ml-2 text-lg">→</span>
                        </Link>
                     </div>
                  ))}
               </div>

               <div className="mt-12 text-center md:hidden">
                  <Link to="/services" className="inline-block border border-white/30 rounded-full px-8 py-3 text-white hover:bg-white hover:text-primary-900 transition-colors">
                     {t('home.services.allServices')}
                  </Link>
               </div>
            </div>
         </section>

         {/* Team */}
         <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
               <div className="text-center mb-4">
                  <span className="uppercase tracking-[0.2em] text-xs font-medium text-gray-400">{t('home.team.subtitle')}</span>
               </div>
               <h2 className="text-4xl lg:text-5xl font-light text-center text-gray-900 mb-16">
                  {t('home.team.title')}
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {[
                     { name: 'Dr. Amine Benjelloun', role: t('home.team.roles.surgeon'), img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80' },
                     { name: 'Dr. Sarah Alami', role: t('home.team.roles.orthodontist'), img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80' },
                     { name: 'Dr. Karim Tazi', role: t('home.team.roles.implantologist'), img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80' }
                  ].map((doctor, index) => (
                     <div key={index} className="group cursor-pointer">
                        <div className="bg-gray-100 rounded-[2rem] overflow-hidden aspect-[3/4] mb-6 relative">
                           <img src={doctor.img} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                           <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300"></div>
                        </div>
                        <h3 className="text-2xl font-light text-gray-900 text-center">{doctor.name}</h3>
                        <p className="text-primary-600 text-center font-medium text-sm uppercase tracking-wider mt-2">{doctor.role}</p>
                     </div>
                  ))}
               </div>

               <div className="text-center">
                  <Link to="/equipe" className="bg-primary-100 text-primary-700 px-8 py-4 rounded-lg font-medium hover:bg-primary-200 transition-colors">
                     {t('home.team.viewAll')}
                  </Link>
               </div>
            </div>
         </section>

         {/* Stats/Quote */}
         <section className="relative">
            <div className="relative h-[600px] lg:h-[700px]">
               <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1920&q=80" alt="Doctor" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
               </div>
               <div className="relative container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl text-white p-8 lg:p-12 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/10">
                     <FaTooth className="text-4xl mb-6 opacity-80" />
                     <h3 className="text-2xl lg:text-4xl font-light leading-snug mb-6">
                        {t('home.quote.text')}
                     </h3>
                     <p className="font-medium opacity-80">{t('home.quote.author')}</p>
                  </div>
               </div>
            </div>

            <div className="bg-primary-900 text-white py-16">
               <div className="container mx-auto px-4">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                     {[
                        { num: '17+', label: t('stats.yearsExperience') },
                        { num: '5000+', label: t('stats.satisfiedPatients') },
                        { num: '100%', label: t('stats.qualityCommitment') },
                        { num: '4.9', label: t('stats.googleReviews') }
                     ].map((stat, index) => (
                        <div key={index} className="px-4">
                           <div className="text-4xl font-light mb-2">{stat.num}</div>
                           <div className="text-sm text-primary-200">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>



         {/* Testimonials */}
         <section className="py-20 lg:py-32 text-center">
            <div className="container mx-auto px-4">
               <div className="flex justify-center gap-1 text-primary-600 mb-8">
                  {[1, 2, 3, 4, 5].map(i => <FaStar key={i} />)}
               </div>
               <h2 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                  {t('home.testimonials.text')}
               </h2>
               <p className="text-gray-400 text-sm mb-20">{t('home.testimonials.note')}</p>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {reviews.map((review, index) => (
                     <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 text-left h-full flex flex-col">
                        <div className="flex gap-1 text-primary-500 mb-4 text-sm">
                           {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow italic">"{review.text}"</p>
                        <div className="mt-auto">
                           <p className="font-bold text-gray-900">{review.name}</p>
                           <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Patient</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
};

export default Home;
