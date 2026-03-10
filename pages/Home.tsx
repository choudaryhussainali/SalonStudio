import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { TESTIMONIALS } from '../constants';
import { Star, ArrowRight, MapPin, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden bg-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(200,163,95,0.15),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          
          {/* Opening Hours Pill */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-10 hover:border-gold/30 transition-colors cursor-default"
          >
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-ash text-sm font-medium tracking-wide">Mon - Sun: 11:00 AM to 10:00 PM</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight max-w-6xl mx-auto drop-shadow-xl"
          >
            We Don’t Just <span className="text-gold italic">Cut Hair</span>, We Create <span className="text-gold italic">Experiences</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-ash text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From the moment you walk in, we focus on precision, comfort, and personalized care, ensuring you leave looking sharp and feeling confident.
          </motion.p>

          {/* CTA Button & Arrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative inline-block mb-24 z-20"
          >
            {/* Decorative Arrow (Desktop Only) */}
            <svg 
              className="absolute -left-32 md:-left-48 top-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 text-gold hidden md:block opacity-90 drop-shadow-[0_0_8px_rgba(200,163,95,0.4)]" 
              viewBox="0 0 100 100"
              style={{ transform: 'translateY(-50%)' }}
            >
              {/* Shaft - Swooping up towards the button */}
              <path 
                d="M 20 60 Q 55 90 93 52" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                fill="none" 
                strokeDasharray="8 4" 
                strokeLinecap="round" 
              />
              {/* Arrow Head - Dart shape, rotated to match the curve tangent (~ -45deg) */}
              <path 
                d="M 93 52 L 80 60 L 84 52 L 80 44 Z" 
                fill="currentColor" 
                stroke="none" 
                transform="rotate(-45 93 52)"
              />
            </svg>

            <Link 
              to="/book" 
              className="px-10 py-5 bg-gold text-charcoal font-bold text-lg rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(200,163,95,0.3)] hover:shadow-[0_0_30px_rgba(200,163,95,0.5)] transform hover:-translate-y-1"
            >
              Book an Appointment
            </Link>
          </motion.div>

          {/* Hero Image Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2 md:px-0"
          >
            {[
              {
                src: "https://images.unsplash.com/photo-1701885183616-cf00e2db1a3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D?q=80&w=2070&auto=format&fit=crop",
                title: "Haircut"
              },
              {
                src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
                title: "Shaving"
              },
              {
                src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2074&auto=format&fit=crop",
                title: "Styling"
              },
              {
                src: "https://plus.unsplash.com/premium_photo-1664537434872-db1649ce689f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1974&auto=format&fit=crop",
                title: "Trimming"
              }
            ].map((item, index) => (
              <Link 
                to="/services"
                key={index}
                className={`group overflow-hidden rounded-2xl h-64 md:h-96 relative shadow-2xl border border-white/5 cursor-pointer block ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <h3 className="text-2xl font-serif text-white font-bold mb-1 transform transition-transform duration-500 group-hover:-translate-y-6 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="inline-flex items-center text-gold text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                      View More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-midnight">
        <div className="container mx-auto px-6">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">More Than Just a Haircut</h2>
              <p className="text-ash text-lg mb-10 leading-relaxed">
                We believe grooming is an essential part of a man's character. Our master barbers combine traditional techniques with modern styling to create a look that is uniquely yours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-white/5 p-4 rounded-lg mr-4 text-gold shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Master Barbers</h4>
                    <p className="text-gray-500 text-sm">Highly trained professionals</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/5 p-4 rounded-lg mr-4 text-gold shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Precision</h4>
                    <p className="text-gray-500 text-sm">Detailed oriented styling</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/5 p-4 rounded-lg mr-4 text-gold shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Premium Products</h4>
                    <p className="text-gray-500 text-sm">Top-shelf grooming essentials</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/5 p-4 rounded-lg mr-4 text-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Prime Locations</h4>
                    <p className="text-gray-500 text-sm">Accessible luxury spaces</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Barber working on hair" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Optional: Dark overlay if image is too bright */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

{/* Exclusive Eid Deals Section */}
      <section className="py-24 bg-midnight border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Festive Specials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Exclusive Eid Deals</h2>
            <p className="text-ash max-w-2xl mx-auto">Celebrate the festivities with our limited-time premium grooming and beauty offers.</p>
          </AnimatedSection>

          {/* MEN'S DEALS GRID (8 Images) */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif text-gold mb-8 text-center border-b border-white/10 pb-4 inline-block mx-auto flex justify-center max-w-xs">Men's Deals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {Array.from({ length: 8 }).map((_, index) => (
                <AnimatedSection 
                  key={`men-${index}`} 
                  delay={0.1 * (index % 4)} 
                  className="relative group rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all shadow-2xl bg-charcoal aspect-[4/5]"
                >
                  <Link to="/book?category=Men" className="block w-full h-full">
                    <img 
                      src={`/eid-deal-men-${index + 1}.png`} 
                      alt={`Men's Eid Deal ${index + 1}`} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Dark overlay that fades on hover */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500"></div>
                    
                    {/* Hover Button */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="bg-gold text-charcoal px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(200,163,95,0.4)] whitespace-nowrap">
                        Book Men's Deal
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* WOMEN'S DEALS GRID (9 Images) */}
          <div>
            <h3 className="text-3xl font-serif text-gold mb-8 text-center border-b border-white/10 pb-4 inline-block mx-auto flex justify-center max-w-xs">Women's Deals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {Array.from({ length: 9 }).map((_, index) => (
                <AnimatedSection 
                  key={`women-${index}`} 
                  delay={0.1 * (index % 4)} 
                  className="relative group rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all shadow-2xl bg-charcoal aspect-[4/5]"
                >
                  <Link to="/book?category=Women" className="block w-full h-full">
                    <img 
                      src={`/eid-deal-women-${index + 1}.png`} 
                      alt={`Women's Eid Deal ${index + 1}`} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Dark overlay that fades on hover */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500"></div>
                    
                    {/* Hover Button */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="bg-gold text-charcoal px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(200,163,95,0.4)] whitespace-nowrap">
                        Book Women's Deal
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Signature Packages Section */}
      <section className="py-24 bg-charcoal relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-midnight/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Exclusive Offers</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Signature Packages</h2>
            <p className="text-ash max-w-2xl mx-auto mb-8">Curated experiences designed to provide the ultimate luxury at exceptional value.</p>
            
            <Link 
              to="/services?tab=Packages"
              className="inline-flex items-center justify-center px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 font-bold uppercase text-sm tracking-wider"
            >
              View All Signature Packages
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {/* Men's Packages Card */}
             <AnimatedSection delay={0.1} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-gold/30">
                <Link to="/services?tab=Packages" className="block w-full h-full">
                  <img 
                    src="https://i0.wp.com/naushemian.com/wp-content/uploads/B612_20240518_210755_618-scaled.webp?fit=1707%2C2560&ssl=1?q=80&w=1000&auto=format&fit=crop" 
                    alt="Men's Packages" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-serif text-white mb-2">Groom's Packages</h3>
                    <p className="text-gray-300 mb-4">Executive grooming, facials, and relaxation bundles tailored for the modern man.</p>
                    <span className="text-gold font-bold uppercase tracking-wider text-sm flex items-center group-hover:translate-x-2 transition-transform">
                      Explore Packages <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </Link>
             </AnimatedSection>

             {/* Women's Packages Card */}
             <AnimatedSection delay={0.2} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-gold/30">
                <Link to="/services?tab=Packages" className="block w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJpZGFsfGVufDB8fDB8fHww" 
                    alt="Women's Packages" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-serif text-white mb-2">Bridal's Packages</h3>
                    <p className="text-gray-300 mb-4">Bridal perfection, party makeovers, and complete spa indulgence for her.</p>
                    <span className="text-gold font-bold uppercase tracking-wider text-sm flex items-center group-hover:translate-x-2 transition-transform">
                      Explore Packages <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </Link>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-midnight relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Services</h2>
            <p className="text-ash max-w-2xl mx-auto">Tailored treatments for men and women, delivered with artistry.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2} className="group relative overflow-hidden rounded-xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" alt="Men" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-serif text-white mb-2">For Men</h3>
                <p className="text-gray-300 mb-6 line-clamp-2">Precision cuts, luxury shaves, and executive facials.</p>
                <Link to="/services?tab=Men" className="inline-block bg-gold text-charcoal px-6 py-2 rounded-full font-bold w-max hover:bg-white transition-colors">View Services</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="group relative overflow-hidden rounded-xl h-[400px]">
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" alt="Women" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-serif text-white mb-2">For Women</h3>
                <p className="text-gray-300 mb-6 line-clamp-2">Signature cuts, color transformations, and bridal makeup.</p>
                <Link to="/services?tab=Women" className="inline-block bg-white text-charcoal px-6 py-2 rounded-full font-bold w-max hover:bg-gold transition-colors">View Services</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Client Stories</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.2} className="bg-midnight p-8 rounded-xl border border-white/5 relative hover:border-gold/20 transition-colors">
                <div className="flex text-gold mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-ash italic mb-6">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold font-serif">
                    {t.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{t.name}</h4>
                    {t.role && <p className="text-xs text-gray-500">{t.role}</p>}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-24 bg-gradient-to-r from-midnight to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C8A35F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <MapPin className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Visit Us in DHA Phase 5</h2>
          <p className="text-ash text-xl max-w-2xl mx-auto mb-10">
            Plaza No 69CCA, 1st Floor, DHA Phase 5 Sector C, Lahore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
              to="/location" 
              className="px-8 py-4 bg-white text-charcoal font-bold rounded-full hover:bg-gold transition-colors duration-300"
            >
              Get Directions
            </Link>
             <Link 
              to="/book" 
              className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-charcoal transition-colors duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
