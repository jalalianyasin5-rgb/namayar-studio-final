import React, { useState } from 'react';
import { Icon3D } from './Icon3D';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackLabel,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#E8E4DC] dark:bg-[#14141A] ${containerClassName}`}>
      {!hasError ? (
        <>
          {!isLoaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-[#EDE9E1] via-[#E2DDD2] to-[#D6CFC2] dark:from-[#141419] dark:via-[#1B1B22] dark:to-[#101014] animate-pulse"
            />
          )}
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
          />
        </>
      ) : (
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#EAE5DC] via-[#DFD9CE] to-[#D2C9B8] dark:from-[#121217] dark:via-[#181820] dark:to-[#0D0D11]">
          <div className="mb-3">
            <Icon3D variant="film" size="md" />
          </div>
          <p className="text-xs font-medium text-[#4C4943] dark:text-[#A8A39A] max-w-xs">
            {fallbackLabel || alt}
          </p>
        </div>
      )}
    </div>
  );
};
