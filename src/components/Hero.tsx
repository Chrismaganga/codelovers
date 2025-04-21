import Image from 'next/image';
import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageUrl?: string;
}

export function Hero({
  title = "Welcome to CodeLovers",
  subtitle = "The world's leading technology institution",
  buttonText = "Learn More",
  imageUrl = "/images/campus-reax-1920.jpg"
}: HeroProps) {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src={imageUrl}
        alt="CodeLovers University"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
} 