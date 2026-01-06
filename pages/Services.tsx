import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { MEN_SERVICES, WOMEN_SERVICES, MASSAGE_SERVICES, PACKAGES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'Men' | 'Women' | 'Massage' | 'Packages'>('Men');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['Men', 'Women', 'Massage', 'Packages'].includes(tab)) {
      setActiveTab(tab as any);
    }
  }, [searchParams]);

  const getServices = () => {
    switch (activeTab) {
      case 'Men': return MEN_SERVICES;
      case 'Women': return WOMEN_SERVICES;
      case 'Massage': return MASSAGE_SERVICES;
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="bg-midnight py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-6xl font-serif text-white mb-6"
          >
            Service Menu
          </motion.h1>
          <p className="text-ash max-w-2xl mx-auto text-lg">Curated grooming and beauty experiences delivered by master stylists.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Responsive Category Selector */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-2 gap-3 md:flex md:justify-center md:bg-midnight md:p-1 md:rounded-full md:border md:border-white/10 md:w-max md:mx-auto">
            {['Men', 'Women', 'Massage', 'Packages'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`
                  py-4 md:py-3 px-2 md:px-10 
                  rounded-xl md:rounded-full 
                  text-sm md:text-lg font-semibold 
                  transition-all duration-300 
                  w-full md:w-auto 
                  flex items-center justify-center
                  ${activeTab === tab 
                    ? 'bg-gold text-charcoal shadow-lg font-bold' 
                    : 'bg-midnight md:bg-transparent text-ash hover:text-white border border-white/5 md:border-transparent hover:bg-white/5'
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'Packages' ? (
             <motion.div
              key="packages"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {PACKAGES.map((pkg) => (
                <div key={pkg.id} className="group flex flex-col bg-midnight rounded-xl overflow-hidden border border-white/5 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl">
                  {/* Image Area */}
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={pkg.imageUrl} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded text-gold text-xs font-bold uppercase tracking-wider">
                      {pkg.category}
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif text-white mb-2">{pkg.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.services.slice(0, 5).map((service, i) => (
                        <li key={i} className="flex items-start text-ash text-sm">
                          <Check className="w-4 h-4 text-gold mr-3 mt-0.5 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                      {pkg.services.length > 5 && (
                         <li className="flex items-start text-ash text-sm italic pl-7">
                           + {pkg.services.length - 5} more services
                         </li>
                      )}
                    </ul>
                    
                    <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                      <div>
                        {pkg.originalPrice && <span className="block text-gray-500 text-xs line-through mb-1">{pkg.originalPrice}</span>}
                        <span className="text-lg font-mono font-bold text-white leading-tight block">{pkg.price}</span>
                      </div>
                      <Link 
                        to={`/book?service=${encodeURIComponent(pkg.title)}&category=${pkg.category}`} 
                        className="bg-gold text-charcoal px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors flex items-center"
                      >
                        Book <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {getServices().map((service) => (
                <div 
                  key={service.id} 
                  className="group p-6 rounded-xl bg-midnight/50 border border-white/5 hover:border-gold/50 transition-all duration-300 hover:bg-midnight"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1 block">{service.subcategory}</span>
                      <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{service.title}</h3>
                    </div>
                    <span className="text-white font-mono font-semibold text-lg text-right min-w-[100px]">{service.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 border-t border-white/5 pt-4">
                    <span>Duration: {service.duration}</span>
                    <Link 
                      to={`/book?service=${encodeURIComponent(service.title)}&category=${service.category}`}
                      className="group-hover:translate-x-1 transition-transform text-gold cursor-pointer font-semibold uppercase tracking-wide"
                    >
                      Book Now &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;