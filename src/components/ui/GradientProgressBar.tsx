'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type GradientProgressBarProps = {
  progress: number; // initial progress 0–100
  setProgress: (progress: number) => void;
  avatarSrc: string;
};

export default function GradientProgressBar({ progress, setProgress, avatarSrc }: GradientProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // prevent image selection
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const updateDrag = (clientX: number) => {
    if (!isDragging.current || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    let newProgress = ((clientX - rect.left) / rect.width) * 100;
    newProgress = Math.max(0, Math.min(100, newProgress)); // clamp
    setProgress(newProgress);
  };

  const handleMouseMove = (e: MouseEvent) => updateDrag(e.clientX);
  const handleTouchMove = (e: TouchEvent) => updateDrag(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', stopDrag);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopDrag);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="relative h-[48px] lg:h-[57px] w-full rounded-[5px] bg-[#138DB1] px-2 py-1 border-[4px] border-[#003E58]"
    >
      <div
        className="relative h-full rounded-[5px] shadow-pinkShadow border-[#003E58] border-[4px] bg-pinkGrad"
        style={{ width: `${progress}%` }}
      >
        <div
          className="absolute -right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-cyan-900 bg-pink-300 overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          onDragStart={(e) => e.preventDefault()} // prevent native image drag
        >
          <Image
            src={avatarSrc}
            alt="Avatar"
            width={54}
            height={57}
            className="rounded-full object-cover pointer-events-none"
            draggable={false} // prevent browser dragging
          />
        </div>
      </div>
    </div>
  );
}
