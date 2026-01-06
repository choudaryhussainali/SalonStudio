import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <div className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <img src="https://images.unsplash.com/photo-1521590832169-d42398403323?q=80&w=2070&auto=format&fit=crop" alt="Background" className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-white mb-6"
          >
            Our Story
          </motion.h1>
          <p className="text-xl text-ash max-w-2xl mx-auto">Redefining luxury grooming standards in Pakistan since 2018.</p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-24 bg-midnight">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">The Vision</h2>
            <h3 className="text-4xl font-serif text-white mb-6">Excellence in Every Detail</h3>
            <p className="text-ash leading-relaxed mb-6">
              Salon Studio was born from a desire to create a space where grooming is not just a routine, but a ritual. 
              Situated in the upscale DHA Phase 5 of Lahore, we envisioned a sanctuary that blends modern aesthetics with traditional hospitality.
            </p>
            <p className="text-ash leading-relaxed">
              Our mission is simple: to provide an executive, world-class experience that leaves you looking and feeling your absolute best.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop" className="rounded-lg mt-8" alt="Detail 1"/>
             <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" className="rounded-lg" alt="Detail 2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;