import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface TiltCard25DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
}

export const TiltCard25D: React.FC<TiltCard25DProps> = ({
  children,
  className = '',
  intensity = 1.6,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || e.pointerType === 'touch' || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    setTilt({
      rotateX: -normY * intensity * 1.4,
      rotateY: normX * intensity * 1.4,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      isHovered: true,
    });
  };

  const handlePointerLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  return (
    <div className="perspective-stage h-full">
      <motion.div
        ref={cardRef}
        onClick={onClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        animate={{
          rotateX: prefersReducedMotion ? 0 : tilt.rotateX,
          rotateY: prefersReducedMotion ? 0 : tilt.rotateY,
          y: !prefersReducedMotion && tilt.isHovered ? -2.5 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 28,
          mass: 0.6,
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative surface-25d-interactive rounded-2xl overflow-hidden ${className}`}
      >
        {/* Subtle 2.5D Specular Rim Highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: tilt.isHovered && !prefersReducedMotion ? 1 : 0,
            background: `radial-gradient(560px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(196, 172, 128, 0.06), transparent 65%)`,
          }}
        />
        {children}
      </motion.div>
    </div>
  );
};
