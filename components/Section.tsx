'use client';

import React from 'react';
import TornPaper from './TornPaper';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  tornTop?: boolean;
  tornBottom?: boolean;
  topColor?: string;
  bottomColor?: string;
  spacing?: number;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  backgroundColor = 'bg-black',
  tornTop = false,
  tornBottom = false,
  topColor = '#FF4B26',
  bottomColor = '#FF4B26',
  spacing = 200,
}) => {
  return (
    <div className="relative">
      {tornTop && (
        <TornPaper 
          position="top" 
          color={topColor}
          backgroundColor={backgroundColor.replace('bg-', '')}
          height={spacing}
        />
      )}
      <section
        className={`relative ${backgroundColor} ${className}`}
        style={{
          paddingTop: tornTop ? spacing : 0,
          paddingBottom: tornBottom ? spacing : 0,
        }}
      >
        {children}
      </section>
      {tornBottom && (
        <TornPaper 
          position="bottom" 
          color={bottomColor}
          backgroundColor={backgroundColor.replace('bg-', '')}
          height={spacing}
        />
      )}
    </div>
  );
};

export default Section;