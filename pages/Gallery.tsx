import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';

const Gallery = () => {
  const [filter, setFilter] = useState<'All' | 'Men' | 'Women'>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-charcoal py-12">
       <div className="bg-midnight py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl font-serif text-white mb-6"
          >
            Style Gallery
          </motion.h1>
          <p className="text-ash">A showcase of precision and elegance.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {['All', 'Men', 'Women'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full border transition-all ${filter === cat ? 'bg-gold border-gold text-charcoal font-bold' : 'border-white/20 text-white hover:border-gold hover:text-gold'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg aspect-[3/4]"
                onClick={() => setSelectedImage(item.imageUrl)}
              >
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 text-white hover:text-gold text-4xl">&times;</button>
          <img src={selectedImage} alt="Full Preview" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
        </div>
      )}
    </div>
  );
};

export default Gallery;