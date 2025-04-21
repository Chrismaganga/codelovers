import Image from 'next/image';
import React from 'react';

interface FeatureItem {
  image: string;
  title: string;
  description: string;
  alt: string;
}

const features: FeatureItem[] = [
  {
    image: "/images/Campus10082024_Features_DG_008.jpg",
    title: "Academic Excellence",
    description: "World-class faculty and cutting-edge research facilities",
    alt: "Academic Excellence"
  },
  {
    image: "/images/campus-reax-1920.jpg",
    title: "Historic Campus",
    description: "Beautiful architecture and state-of-the-art facilities",
    alt: "Historic Campus"
  },
  {
    image: "/images/090518_first_week_RL_0159_1300.jpg",
    title: "Vibrant Community",
    description: "Diverse student body and rich studying life",
    alt: "Vibrant Community"
  }
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="relative h-48 mb-4">
            <Image
              src={feature.image}
              alt={feature.alt}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
} 