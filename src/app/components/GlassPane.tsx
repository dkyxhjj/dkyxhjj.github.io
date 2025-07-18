import React, { ReactNode } from 'react';

interface GlassPaneProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPane({ children, className = '' }: GlassPaneProps) {
  return (
    <div className={`backdrop-blur-[2px] bg-white/5 rounded-[10px] border-t border-l border-white/10 p-5 ${className}`}>
      {children}
    </div>
  );
}
