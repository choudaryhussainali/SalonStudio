import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        {/* Animated Glow Background */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-64 h-64 bg-gold/30 blur-[100px] rounded-full pointer-events-none"
        />

        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.img 
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://lh3.googleusercontent.com/kWLSCqTAI5aF66Ms9kiz6hSZY9SIixRic5dkrvb2WE7XtHVsYrsgunBL_CY7GPTk2wnZSto_tKyJHNePmw=s265-w265-h265" 
            alt="Salon Studio"
            className="w-24 h-24 md:w-32 md:h-32 mb-8 object-contain drop-shadow-2xl"
          />
          
          <div className="text-center">
            <motion.h1 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif font-bold text-white tracking-widest uppercase mb-4"
            >
              Salon<span className="text-gold">Studio</span>
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" 
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-ash text-xs md:text-sm tracking-[0.4em] uppercase font-light"
            >
              Luxury Grooming Experience
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;