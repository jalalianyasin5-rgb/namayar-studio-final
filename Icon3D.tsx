import React, { useId } from 'react';

export type Icon3DVariant =
  | 'prism'
  | 'cube'
  | 'aperture'
  | 'layers'
  | 'spark'
  | 'film'
  | 'play'
  | 'pause'
  | 'expand'
  | 'crown'
  | 'compass'
  | 'shield'
  | 'sliders'
  | 'send'
  | 'gem'
  | 'check'
  | 'alert'
  | 'arrow-up-left'
  | 'arrow-up'
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-down'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'bale'
  | 'eitaa';

interface Icon3DProps {
  variant: Icon3DVariant;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  frameless?: boolean;
  className?: string;
}

export const Icon3D: React.FC<Icon3DProps> = ({
  variant,
  size = 'md',
  frameless = false,
  className = '',
}) => {
  const rawId = useId().replace(/:/g, '');

  const containerSize = {
    xs: 'w-7 h-7 rounded-lg',
    sm: 'w-9 h-9 rounded-xl',
    md: 'w-11 h-11 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  }[size];

  const svgSize = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  const svgElement = (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${svgSize} relative z-10 transition-transform duration-300 ease-out group-hover:scale-105 ${
        frameless ? className : ''
      }`}
    >
      <defs>
        {/* Warm Champagne-Bronze Metallic Surface */}
        <linearGradient id={`${rawId}-champagne`} x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6D7BC" />
          <stop offset="50%" stopColor="#C4AC80" />
          <stop offset="100%" stopColor="#8F754B" />
        </linearGradient>

        {/* Dimensional Depth Shadow Plane */}
        <linearGradient id={`${rawId}-shadow`} x1="6" y1="6" x2="27" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A68B5E" stopOpacity="0.48" />
          <stop offset="100%" stopColor="#4A391E" stopOpacity="0.78" />
        </linearGradient>

        {/* Fine Specular Rim */}
        <linearGradient id={`${rawId}-rim`} x1="4" y1="4" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#D8C39E" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7D633A" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* 'spark' is now a bespoke Cinematic Director's Viewfinder & Anamorphic Lens Frame (Zero resemblance to Gemini logo) */}
      {variant === 'spark' && (
        <>
          {/* Dimensional Back Frame */}
          <rect
            x="6.5"
            y="8.5"
            width="20"
            height="16"
            rx="3.5"
            fill={`url(#${rawId}-shadow)`}
          />
          {/* Main Cinema Frame Body */}
          <rect
            x="5.5"
            y="7"
            width="20"
            height="16"
            rx="3.5"
            fill={`url(#${rawId}-champagne)`}
            fillOpacity="0.18"
            stroke={`url(#${rawId}-champagne)`}
            strokeWidth="1.6"
          />
          {/* Corner Director Viewfinder Brackets */}
          <path
            d="M8.5 11.5V9.8H10.5M22.5 11.5V9.8H20.5M8.5 18.5V20.2H10.5M22.5 18.5V20.2H20.5"
            stroke="#FFFDF8"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Anamorphic Lens Ring */}
          <circle
            cx="15.5"
            cy="15"
            r="3.8"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.2"
          />
          <circle cx="15.5" cy="15" r="1.4" fill="#161618" />
        </>
      )}

      {variant === 'prism' && (
        <>
          <path d="M16 4.5L26.5 23L16 27.5V4.5Z" fill={`url(#${rawId}-shadow)`} />
          <path d="M16 4.5L5.5 23L16 27.5V4.5Z" fill={`url(#${rawId}-champagne)`} />
          <path
            d="M16 4.5L26.5 23L16 27.5L5.5 23L16 4.5Z"
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
          <line x1="16" y1="4.5" x2="16" y2="27.5" stroke="#FFFDF8" strokeWidth="1.1" strokeOpacity="0.75" />
        </>
      )}

      {variant === 'cube' && (
        <>
          <path d="M16 5L26 10.5L16 16L6 10.5L16 5Z" fill="#EADBC0" />
          <path d="M6 10.5L16 16V27L6 21.5V10.5Z" fill={`url(#${rawId}-champagne)`} />
          <path d="M16 16L26 10.5V21.5L16 27V16Z" fill={`url(#${rawId}-shadow)`} />
          <path
            d="M16 5L26 10.5V21.5L16 27L6 21.5V10.5L16 5Z"
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <path d="M6 10.5L16 16L26 10.5" stroke="#FFFDF8" strokeWidth="1.1" strokeOpacity="0.7" />
        </>
      )}

      {variant === 'aperture' && (
        <>
          <circle cx="16" cy="16.8" r="10" fill={`url(#${rawId}-shadow)`} />
          <circle
            cx="16"
            cy="15.5"
            r="10"
            fill={`url(#${rawId}-champagne)`}
            fillOpacity="0.16"
            stroke={`url(#${rawId}-champagne)`}
            strokeWidth="1.5"
          />
          <circle
            cx="16"
            cy="15.5"
            r="5.8"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
          />
          <circle cx="16" cy="15.5" r="2.2" fill="#161618" />
        </>
      )}

      {variant === 'layers' && (
        <>
          <path d="M16 16L27 21.2L16 26.5L5 21.2L16 16Z" fill={`url(#${rawId}-shadow)`} />
          <path
            d="M16 11.2L27 16.5L16 21.8L5 16.5L16 11.2Z"
            fill={`url(#${rawId}-champagne)`}
            fillOpacity="0.78"
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="0.9"
          />
          <path
            d="M16 6.5L27 11.8L16 17L5 11.8L16 6.5Z"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'film' && (
        <>
          <rect x="6" y="8" width="20.5" height="16.5" rx="3.5" fill={`url(#${rawId}-shadow)`} />
          <rect
            x="5"
            y="6.8"
            width="20.5"
            height="16.5"
            rx="3.5"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
          />
          <path d="M13.2 11.8L19.2 15L13.2 18.2V11.8Z" fill="#161618" />
        </>
      )}

      {variant === 'play' && (
        <>
          <path d="M11.5 8.8L24.5 16.5L11.5 24.2V8.8Z" fill={`url(#${rawId}-shadow)`} />
          <path
            d="M10.2 7.5L23.5 15.5L10.2 23.5V7.5Z"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.15"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'pause' && (
        <>
          <rect x="9.5" y="8" width="4.8" height="16.5" rx="1.8" fill={`url(#${rawId}-shadow)`} />
          <rect x="18.5" y="8" width="4.8" height="16.5" rx="1.8" fill={`url(#${rawId}-shadow)`} />
          <rect
            x="8.5"
            y="7"
            width="4.8"
            height="16.5"
            rx="1.8"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
          />
          <rect
            x="17.5"
            y="7"
            width="4.8"
            height="16.5"
            rx="1.8"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
          />
        </>
      )}

      {variant === 'expand' && (
        <>
          <rect
            x="6.5"
            y="6.5"
            width="19"
            height="19"
            rx="4"
            fill={`url(#${rawId}-shadow)`}
            fillOpacity="0.32"
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.2"
          />
          <path
            d="M11 15V11H15M21 17V21H17"
            stroke={`url(#${rawId}-champagne)`}
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'crown' && (
        <>
          <path
            d="M6 23.5H26L24.2 11.5L19.5 15.8L16 8.8L12.5 15.8L7.8 11.5L6 23.5Z"
            fill={`url(#${rawId}-shadow)`}
            transform="translate(0, 1.4)"
          />
          <path
            d="M6 22.5H26L24.2 10.5L19.5 14.8L16 7.8L12.5 14.8L7.8 10.5L6 22.5Z"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'compass' && (
        <>
          <circle cx="16" cy="16.8" r="10" fill={`url(#${rawId}-shadow)`} />
          <circle
            cx="16"
            cy="15.5"
            r="10"
            fill={`url(#${rawId}-champagne)`}
            fillOpacity="0.18"
            stroke={`url(#${rawId}-champagne)`}
            strokeWidth="1.4"
          />
          <polygon points="16,8.2 19.2,15.5 16,14 12.8,15.5" fill="#FFFDF8" />
          <polygon points="16,22.8 19.2,15.5 16,17 12.8,15.5" fill={`url(#${rawId}-champagne)`} />
        </>
      )}

      {variant === 'shield' && (
        <>
          <path
            d="M16 5.5L25 9V15.2C25 21 20.8 25.2 16 26.8C11.2 25.2 7 21 7 15.2V9L16 5.5Z"
            fill={`url(#${rawId}-shadow)`}
            transform="translate(0, 1.4)"
          />
          <path
            d="M16 4.5L25 8V14.2C25 20 20.8 24.2 16 25.8C11.2 24.2 7 20 7 14.2V8L16 4.5Z"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
          />
        </>
      )}

      {variant === 'sliders' && (
        <>
          <rect x="6.5" y="9" width="19" height="2.2" rx="1.1" fill={`url(#${rawId}-shadow)`} />
          <rect x="6.5" y="15" width="19" height="2.2" rx="1.1" fill={`url(#${rawId}-shadow)`} />
          <rect x="6.5" y="21" width="19" height="2.2" rx="1.1" fill={`url(#${rawId}-shadow)`} />
          <circle cx="12" cy="10.1" r="2.9" fill={`url(#${rawId}-champagne)`} stroke={`url(#${rawId}-rim)`} strokeWidth="1" />
          <circle cx="20" cy="16.1" r="2.9" fill={`url(#${rawId}-champagne)`} stroke={`url(#${rawId}-rim)`} strokeWidth="1" />
          <circle cx="14" cy="22.1" r="2.9" fill={`url(#${rawId}-champagne)`} stroke={`url(#${rawId}-rim)`} strokeWidth="1" />
        </>
      )}

      {variant === 'send' && (
        <>
          <path d="M6.5 16L26 8L19.2 26.5L14.5 18.8L6.5 16Z" fill={`url(#${rawId}-shadow)`} />
          <path
            d="M5.5 14.6L25 6.6L18.2 25.1L13.5 17.4L5.5 14.6Z"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'gem' && (
        <>
          <polygon points="10.5,6.5 21.5,6.5 26.5,13 16,26.5 5.5,13" fill={`url(#${rawId}-shadow)`} transform="translate(0, 1.3)" />
          <polygon
            points="10.5,5.5 21.5,5.5 26.5,12 16,25.5 5.5,12"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <polyline points="5.5,12 26.5,12" stroke="#FFFDF8" strokeWidth="1" strokeOpacity="0.7" />
        </>
      )}

      {variant === 'check' && (
        <>
          <circle cx="16" cy="16.8" r="10" fill={`url(#${rawId}-shadow)`} />
          <circle
            cx="16"
            cy="15.5"
            r="10"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
          />
          <path
            d="M11.8 15.8L14.6 18.6L20.5 12.6"
            stroke="#141310"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'alert' && (
        <>
          <circle cx="16" cy="16" r="10.5" fill={`url(#${rawId}-shadow)`} />
          <circle cx="16" cy="15" r="10.5" fill={`url(#${rawId}-champagne)`} stroke={`url(#${rawId}-rim)`} strokeWidth="1.1" />
          <line x1="16" y1="10.2" x2="16" y2="16.2" stroke="#141310" strokeWidth="2.1" strokeLinecap="round" />
          <circle cx="16" cy="19.8" r="1.2" fill="#141310" />
        </>
      )}

      {variant === 'arrow-up-left' && (
        <>
          <path
            d="M21 21L11 11M11 11H19M11 11V19"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'arrow-up' && (
        <>
          <path
            d="M16 22.5V9.5M16 9.5L10.5 15M16 9.5L21.5 15"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'arrow-left' && (
        <>
          <path
            d="M22.5 16H9.5M9.5 16L15 10.5M9.5 16L15 21.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'arrow-right' && (
        <>
          <path
            d="M9.5 16H22.5M22.5 16L17 10.5M22.5 16L17 21.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'chevron-down' && (
        <>
          <path
            d="M9.5 13.5L16 20L22.5 13.5"
            stroke={`url(#${rawId}-champagne)`}
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'sun' && (
        <>
          <circle cx="16" cy="16" r="5.5" fill={`url(#${rawId}-champagne)`} stroke={`url(#${rawId}-rim)`} strokeWidth="1.1" />
          <path
            d="M16 5V7.2M16 24.8V27M5 16H7.2M24.8 16H27M8.2 8.2L9.8 9.8M22.2 22.2L23.8 23.8M23.8 8.2L22.2 9.8M9.8 22.2L8.2 23.8"
            stroke={`url(#${rawId}-champagne)`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      )}

      {variant === 'moon' && (
        <>
          <path
            d="M23 18.5A8 8 0 0 1 13.5 9A8 8 0 1 0 23 18.5Z"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'menu' && (
        <>
          <rect x="6.5" y="9.5" width="19" height="2.1" rx="1.05" fill={`url(#${rawId}-champagne)`} />
          <rect x="9.5" y="15" width="16" height="2.1" rx="1.05" fill={`url(#${rawId}-champagne)`} />
          <rect x="6.5" y="20.5" width="19" height="2.1" rx="1.05" fill={`url(#${rawId}-champagne)`} />
        </>
      )}

      {variant === 'close' && (
        <>
          <path
            d="M10 10L22 22M22 10L10 22"
            stroke={`url(#${rawId}-champagne)`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </>
      )}

      {variant === 'bale' && (
        <>
          {/* Dimensional Shadow Plane */}
          <path
            d="M16 6.2C9.9 6.2 5 10.5 5 15.8C5 18.2 6 20.4 7.7 22.1L6.3 26.2L11 24.6C12.5 25.1 14.2 25.4 16 25.4C22.1 25.4 27 21.1 27 15.8C27 10.5 22.1 6.2 16 6.2Z"
            fill={`url(#${rawId}-shadow)`}
            transform="translate(0.5, 1.4)"
          />
          {/* Main Champagne Metallic Bubble */}
          <path
            d="M16 6.2C9.9 6.2 5 10.5 5 15.8C5 18.2 6 20.4 7.7 22.1L6.3 26.2L11 24.6C12.5 25.1 14.2 25.4 16 25.4C22.1 25.4 27 21.1 27 15.8C27 10.5 22.1 6.2 16 6.2Z"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          {/* Inner Sculpted Bale Check Emblem */}
          <path
            d="M11.4 16.1L14.6 19.1L21.2 12.7"
            stroke="#141310"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}

      {variant === 'eitaa' && (
        <>
          {/* Dimensional Shadow Plane */}
          <circle cx="16.4" cy="17.2" r="10.2" fill={`url(#${rawId}-shadow)`} />
          {/* Outer Sculpted Medallion */}
          <circle
            cx="16"
            cy="15.8"
            r="10.2"
            fill={`url(#${rawId}-champagne)`}
            stroke={`url(#${rawId}-rim)`}
            strokeWidth="1.1"
          />
          {/* Eitaa Dynamic Curved Wing */}
          <path
            d="M20.8 11.4C16.8 11.4 11.4 13.7 11.4 17.5C11.4 19.7 13.2 21 15.8 21C18.1 21 19.8 19.9 20.4 18.5H16.2C15.3 18.5 14.6 17.9 14.6 17.1C14.6 15.5 17.4 14.2 20.8 14.2V11.4Z"
            fill="#141310"
          />
        </>
      )}
    </svg>
  );

  if (frameless) {
    return svgElement;
  }

  return (
    <div
      aria-hidden="true"
      className={`group relative inline-flex items-center justify-center shrink-0 select-none ${containerSize} bg-gradient-to-b from-[#FAF7F0] to-[#EFE9DC] dark:from-[#1D1D24] dark:to-[#121217] border border-[#B89F72]/35 dark:border-[#C4AC80]/28 shadow-[0_6px_16px_-4px_rgba(22,22,24,0.09),0_1px_0_0_rgba(255,255,255,0.75)_inset] dark:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.65),0_1px_0_0_rgba(255,248,235,0.10)_inset] transition-all duration-300 ${className}`}
    >
      {svgElement}
    </div>
  );
};
