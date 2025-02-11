'use client';

import React from 'react';

interface TornPaperProps {
  position: 'top' | 'bottom';
  color?: string;
  backgroundColor?: string;
  height?: number;
  className?: string;
}

const TornPaper: React.FC<TornPaperProps> = ({ 
  position, 
  color = '#FF4B26',
  backgroundColor = 'black',
  height = 200,
  className = ''
}) => {
  const isTop = position === 'top';
  
  return (
    <div 
      className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 right-0 w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg 
        width="100%" 
        height={height} 
        viewBox="0 0 1440 200" 
        preserveAspectRatio="none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          transform: isTop ? 'rotate(180deg)' : 'none',
        }}
      >
        {/* Основной фон */}
        <path 
          d="M0 0 L1440 0 L1440 200 
            Q1410 185 1380 182 Q1360 190 1340 188 Q1330 180 1320 178
            Q1300 185 1280 187 Q1270 178 1260 175 Q1230 183 1200 182
            Q1180 178 1160 180 Q1140 185 1120 187 Q1100 182 1080 183
            Q1060 188 1040 190 Q1010 180 980 178 Q950 185 920 187
            Q900 178 880 175 Q860 182 840 183 Q820 178 800 180
            Q780 188 760 190 Q740 183 720 182 Q700 188 680 190
            Q660 180 640 178 Q620 185 600 187 Q570 180 540 175
            Q510 182 480 183 Q460 178 440 175 Q420 185 400 187
            Q380 180 360 178 Q340 188 320 190 Q300 183 280 182
            Q260 188 240 190 Q220 180 200 178 Q180 185 160 187
            Q140 180 120 175 Q90 182 80 183 Q60 178 40 180
            Q20 185 0 187 Z" 
          fill={backgroundColor}
        />
        
        {/* Рваный цветной край */}
        <path 
          d="M0 187
            Q30 183 40 180
            Q70 185 80 183
            C100 178 110 177 120 175
            Q150 182 160 187
            C180 183 190 180 200 178
            Q230 185 240 190
            C260 185 270 183 280 182
            Q310 188 320 190
            C340 185 350 180 360 178
            Q390 185 400 187
            C420 182 430 178 440 175
            Q470 182 480 183
            C510 178 525 177 540 175
            Q570 182 600 187
            C620 183 630 180 640 178
            Q670 185 680 190
            C700 185 710 183 720 182
            Q750 188 760 190
            C780 185 790 182 800 180
            Q830 185 840 183
            C860 178 870 177 880 175
            Q910 182 920 187
            C950 182 965 180 980 178
            Q1010 185 1040 190
            C1060 185 1070 183 1080 183
            Q1110 188 1120 187
            C1140 182 1150 181 1160 180
            Q1190 185 1200 182
            C1220 178 1240 177 1260 175
            Q1290 182 1280 187
            C1300 182 1310 180 1320 178
            Q1350 185 1340 188
            C1360 183 1370 182 1380 182
            Q1410 188 1440 200
            L0 200 Z" 
          fill={color}
        />
      </svg>
    </div>
  );
};

export default TornPaper;