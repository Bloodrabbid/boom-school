'use client';

import { motion } from 'framer-motion';
import { type Sticker } from '../config/stickers';
import { memo, useEffect, useState } from 'react';

interface StickerRendererProps {
  stickers: Sticker[];
}

const StickerRenderer = memo(({ stickers }: StickerRendererProps) => {
  const [configuredStickers, setConfiguredStickers] = useState<Sticker[]>(stickers);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/api/stickers');
        if (!response.ok) {
          // If API fails, fallback to default stickers
          setConfiguredStickers(stickers);
          return;
        }
        
        const config = await response.json();
        
        // Find the corresponding section in the config
        const sectionKey = Object.keys(config).find(key => 
          config[key].some((s: Sticker) => 
            stickers.some(defaultS => defaultS.src === s.src)
          )
        );

        if (sectionKey && Array.isArray(config[sectionKey])) {
          // Merge default properties with configured ones
          const mergedStickers = config[sectionKey].map((configSticker: Sticker) => ({
            ...configSticker,
            // Ensure all required properties exist
            size: {
              width: Number(configSticker.size?.width) || 4,
              height: Number(configSticker.size?.height) || 4
            },
            position: {
              ...(configSticker.position || { type: 'absolute' })
            },
            animation: {
              animate: configSticker.animation?.animate || {},
              transition: configSticker.animation?.transition || {}
            },
            zIndex: Number(configSticker.zIndex) || 10
          }));
          setConfiguredStickers(mergedStickers);
        } else {
          // Fallback to default stickers if section not found
          setConfiguredStickers(stickers);
        }
      } catch (error) {
        // Fallback to default stickers on error
        console.error('Error loading stickers config:', error);
        setConfiguredStickers(stickers);
      }
    };

    loadConfig();
  }, [stickers]);

  return (
    <>
      {configuredStickers.map((sticker, index) => (
        <motion.img
          key={`${sticker.src}-${index}`}
          src={sticker.src.replace(/_/g, '-')}
          alt={sticker.alt}
          className="absolute"
          style={{
            width: `${sticker.size.width}rem`,
            height: `${sticker.size.height}rem`,
            ...sticker.position,
            zIndex: sticker.zIndex || 10,
          }}
          animate={sticker.animation.animate}
          transition={sticker.animation.transition}
        />
      ))}
    </>
  );
});

StickerRenderer.displayName = 'StickerRenderer';

export default StickerRenderer;