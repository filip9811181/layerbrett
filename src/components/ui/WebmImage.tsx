import React from 'react';

interface WebmImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  fallbackText?: string;
}

const WebmImage: React.FC<WebmImageProps> = ({
  src,
  alt = '',
  width,
  height,
  className = '',
  loading = 'lazy',
  style,
  onLoad,
  onError,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'auto',
  fallbackText = '',
  ...props
}) => {
  return (
    <video
      width={width}
      height={height}
      className={className}
      style={style}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      onLoadedData={onLoad}
      onError={onError}
      aria-label={alt}
      {...props}
    >
      <source src={src} type="video/webm" />
      {fallbackText}
    </video>
  );
};

export default WebmImage;
