import React, { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  yOffset?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  yOffset,
  duration,
  delay,
  className = '',
}: FadeInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
