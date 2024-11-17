'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import DrumSVG from './DrumSVG';
import ThoughtBubble from './ThoughtBubble';

const AnimatedDrumButton: React.FC = () => {
  const [isBubbleOpen, setIsBubbleOpen] = useState<boolean>(false);
  const [bubblePosition, setBubblePosition] = useState<{
    top: string;
    left: string;
  }>({ top: '0', left: '0' });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (): void => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setBubblePosition({
        top: `${rect.top - 200}px`,
        left: `${rect.left - 230}px`,
      });
    }
    setIsBubbleOpen(true);
  };

  const handleClose = (): void => {
    setIsBubbleOpen(false);
  };

  return (
    <>
      <motion.button
        ref={buttonRef}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        aria-label="Open Contact Form"
      >
        <DrumSVG />
      </motion.button>

      <ThoughtBubble
        isOpen={isBubbleOpen}
        onClose={handleClose}
        position={bubblePosition}
      >
        <h2 className="text-2xl font-bold mb-4">Запишитесь к нам!</h2>
        <p className="mb-4">
          Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Ваш телефон"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white p-2 rounded transition-colors"
          >
            Записаться
          </button>
        </form>
      </ThoughtBubble>
    </>
  );
};

export default AnimatedDrumButton;