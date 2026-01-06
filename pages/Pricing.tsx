import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { MEN_SERVICES, WOMEN_SERVICES, MASSAGE_SERVICES, MEN_DEALS, WOMEN_HAIR_DEALS, WOMEN_FACE_DEALS } from '../constants';
import { Tag, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="bg-midnight py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Pricing Menu</h1>
          <p className="text-ash text-lg">Transparent, competitive pricing for premium services.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Exclusive Deals Section */}
        <AnimatedSection className="mb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-48 opacity-50"></div>
            <div className="mx-6 flex items-center text-gold">
              <Tag className="w-6 h-6 mr-3" />
              <h2 className="text-3xl md:text-4xl font-serif text-white whitespace-nowrap">Exclusive Deals</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-48 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <DealCard title="Men's Packages" deals={MEN_DEALS} />
            <DealCard title="Women's Hair Offers" deals={WOMEN_HAIR_DEALS} />
            <DealCard title="Women's Face & Glam" deals={WOMEN_FACE_DEALS} />
          </div>
        </AnimatedSection>

        {/* Standard Pricing Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection delay={0.2}>
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
               <h2 className="text-3xl font-serif text-gold">Men's Grooming</h2>
            </div>
            <ServiceTable services={MEN_SERVICES} />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
             <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
               <h2 className="text-3xl font-serif text-gold">Women's Styling</h2>
             </div>
            <ServiceTable services={WOMEN_SERVICES} />
          </AnimatedSection>
        </div>

        {/* Massage Pricing List */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatedSection delay={0.6}>
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
               <h2 className="text-3xl font-serif text-gold">Massage & Therapy</h2>
            </div>
            <ServiceTable services={MASSAGE_SERVICES} />
          </AnimatedSection>
        </div>
        
        <div className="text-center pb-12">
            <Link 
              to="/book" 
              className="inline-flex items-center bg-gold text-charcoal px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-gold/20"
            >
              Book an Appointment <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>

      </div>
    </div>
  );
};

const DealCard = ({ title, deals }: { title: string, deals: Service[] }) => (
  <div className="bg-midnight rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-300 flex flex-col shadow-xl group h-full">
     <div className="bg-gradient-to-r from-midnight via-white/5 to-midnight p-5 border-b border-white/5 text-center relative">
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
       <h3 className="text-xl font-serif text-gold font-bold tracking-wide">{title}</h3>
     </div>
     <div className="p-6 space-y-6 flex-grow">
       {deals.map((deal) => (
          <div key={deal.id} className="relative pl-4 border-l-2 border-white/10 hover:border-gold transition-colors duration-300">
             <div className="flex justify-between items-start mb-1">
               <h4 className="text-white font-medium text-lg leading-tight">{deal.title}</h4>
               <span className="text-gold font-mono font-bold whitespace-nowrap ml-3 text-lg">{deal.price}</span>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed">{deal.description}</p>
             <div className="text-xs text-gray-600 mt-1 italic">{deal.duration}</div>
          </div>
       ))}
     </div>
     <div className="p-4 bg-white/5 border-t border-white/5 text-center mt-auto">
       <Link 
         to={`/book?category=${deals[0]?.category}`} 
         className="text-xs font-bold uppercase tracking-widest text-ash hover:text-gold transition-colors flex items-center justify-center"
       >
         Claim Offer <ArrowRight className="w-3 h-3 ml-1" />
       </Link>
     </div>
  </div>
);

const ServiceTable = ({ services }: { services: Service[] }) => (
  <div className="bg-midnight rounded-xl overflow-hidden border border-white/5 shadow-lg">
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-white/5 text-xs uppercase text-gray-400 tracking-wider">
          <tr>
            <th className="p-5 font-medium">Service</th>
            <th className="p-5 font-medium text-right whitespace-nowrap">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {services.map((s) => (
            <tr key={s.id} className="hover:bg-white/5 transition-colors group">
              <td className="p-5">
                <p className="text-white font-medium text-lg group-hover:text-gold transition-colors">{s.title}</p>
                <p className="text-xs text-gray-500 mt-1">{s.description}</p>
              </td>
              <td className="p-5 text-gold font-mono font-bold text-right align-top whitespace-nowrap">
                {s.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Pricing;