'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DrumSVG: React.FC = () => (
    <div className="relative w-16 h-16">
      {/* Барабанные палочки */}
      <motion.div
          className="absolute w-1 h-8 bg-white"
          style={{
            left: '55%',
            top: '0%',
            transformOrigin: 'bottom center',
            transform: 'rotate(45deg)'
          }}
          animate={{
            rotate: [45, 35, 45],
            scale: [1, 0.95, 1]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
      />
      <motion.div
          className="absolute w-1 h-8 bg-white"
          style={{
            left: '35%',
            top: '0%',
            transformOrigin: 'bottom center',
            transform: 'rotate(-45deg)'
          }}
          animate={{
            rotate: [-45, -35, -45],
            scale: [1, 0.95, 1]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.3
          }}
      />

      {/* Барабан (вид сбоку) */}
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-white"
      >
        {/* Основной цилиндр барабана */}
        <ellipse cx="12" cy="9" rx="10" ry="5" />
        {/* Стойки */}
        <line x1="7" y1="13.4" x2="7" y2="21.3" />
        <line x1="12" y1="14" x2="12" y2="22" />
        <line x1="17" y1="13.4" x2="17" y2="21.3" />
        {/* Нижняя часть барабана */}
        <path d="M2 9v8a10 5 0 0 0 20 0V9" />
      </svg>

      {/* Круги анимации */}
      {[1, 2, 3].map((i) => (
          <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-white"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.3, 0.2, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
          />
      ))}
    </div>
);

export default DrumSVG;