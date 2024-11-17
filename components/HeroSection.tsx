'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import StickerRenderer from './StickerRenderer';
import { defaultStickers } from '../config/stickers';

const HeroSection = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="hero-section min-h-screen flex items-center justify-center text-white relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <StickerRenderer stickers={defaultStickers.hero} />

      <div className="text-center relative z-10 px-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          БУМ студия музыки
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            className="cta-button bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-lg sm:text-xl font-semibold"
            onClick={handleClick}
          >
            ЗАПИСАТЬСЯ НА ПРОБНОЕ ЗАНЯТИЕ
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;