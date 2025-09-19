'use client';
import { useState, useEffect } from 'react';

const ResponsiveImage = ({ src, alt, width, height, mobileWidth, mobileHeight }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint (640px)
    };

    checkMobile(); // Run once on mount
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <img src={src} alt={alt || ''} width={isMobile ? mobileWidth : width} height={isMobile ? mobileHeight : height} />
  );
};

export default ResponsiveImage;
