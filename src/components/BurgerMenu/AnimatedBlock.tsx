// components/AnimatedBlock.tsx
import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const AnimatedBlock = ({ children }: { children: React.ReactNode }) => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="element-animation">
      {children}
    </div>
  );
};
