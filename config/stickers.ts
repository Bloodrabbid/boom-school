import { type AnimationProps, type TargetAndTransition, type Transition } from 'framer-motion';

export interface StickerAnimation {
  animate: TargetAndTransition;
  transition: Transition;
}

export interface Sticker {
  src: string;
  alt: string;
  size: {
    width: number;
    height: number;
  };
  position: {
    type: 'absolute';
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animation: StickerAnimation;
  zIndex?: number;
}

export interface SectionStickers {
  [key: string]: Sticker[];
}

// Переименовываем в defaultStickers для ясности
export const defaultStickers: SectionStickers = {
  hero: [
    {
      src: '/guitar-10.svg',
      alt: 'Guitar',
      size: { width: 6, height: 6 },
      position: {
        type: 'absolute',
        top: '20%',
        left: '10%'
      },
      animation: {
        animate: {
          rotate: [-10, 10, -10],
          y: [-10, 10, -10]
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      zIndex: 10
    },
    {
      src: '/drum-9.svg',
      alt: 'Drum',
      size: { width: 5, height: 5 },
      position: {
        type: 'absolute',
        top: '30%',
        right: '15%'
      },
      animation: {
        animate: {
          scale: [1, 1.1, 1],
          rotate: [-5, 5, -5]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      zIndex: 10
    }
  ],
  about: [
    {
      src: '/vinyl.svg',
      alt: 'Vinyl',
      size: { width: 4, height: 4 },
      position: {
        type: 'absolute',
        top: '10px',
        left: '10px'
      },
      animation: {
        animate: { rotate: 360 },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      },
      zIndex: 10
    },
    {
      src: '/cd.svg',
      alt: 'CD',
      size: { width: 3, height: 3 },
      position: {
        type: 'absolute',
        top: '20px',
        right: '20px'
      },
      animation: {
        animate: { rotate: -360 },
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }
      },
      zIndex: 10
    },
    {
      src: '/radio.svg',
      alt: 'Radio',
      size: { width: 5, height: 5 },
      position: {
        type: 'absolute',
        bottom: '10px',
        left: '10%'
      },
      animation: {
        animate: { y: [0, -10, 0] },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      zIndex: 10
    }
  ],
  quiz: [
    {
      src: '/guitar-4.svg',
      alt: 'Guitar',
      size: { width: 5, height: 5 },
      position: {
        type: 'absolute',
        top: '20px',
        left: '5%'
      },
      animation: {
        animate: { rotate: [-5, 5, -5] },
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      zIndex: 10
    },
    {
      src: '/drum-9.svg',
      alt: 'Drum',
      size: { width: 4, height: 4 },
      position: {
        type: 'absolute',
        top: '40px',
        right: '5%'
      },
      animation: {
        animate: { scale: [1, 1.1, 1] },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      zIndex: 10
    },
    {
      src: '/tambourine.svg',
      alt: 'Tambourine',
      size: { width: 3, height: 3 },
      position: {
        type: 'absolute',
        bottom: '20px',
        left: '10%'
      },
      animation: {
        animate: { rotate: [0, 360] },
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }
      },
      zIndex: 10
    },
    {
      src: '/piano.svg',
      alt: 'Piano',
      size: { width: 5, height: 5 },
      position: {
        type: 'absolute',
        bottom: '40px',
        right: '10%'
      },
      animation: {
        animate: { y: [-5, 5, -5] },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      zIndex: 10
    }
  ]
};