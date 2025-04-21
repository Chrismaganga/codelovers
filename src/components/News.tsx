import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "/images/100408_Yard_045-1200x630.jpg",
    title: "Groundbreaking Research Discovery",
    description: "CodeLovers scientists make significant breakthrough in quantum computing",
    alt: "Research Breakthrough",
    link: "/news/research-breakthrough"
  },
  {
    id: 2,
    image: "/images/051220_features_1192.jpg",
    title: "Student Innovation Award",
    description: "CodeLovers students win prestigious international competition",
    alt: "Student Achievement",
    link: "/news/student-innovation"
  },
  {
    id: 3,
    image: "/images/092418_Dental_School_079.jpg",
    title: "Annual Tech Conference",
    description: "CodeLovers triumph in international coding competition",
    alt: "Campus Event",
    link: "/news/tech-conference"
  }
];

export function News() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <Link href={item.link} className="text-crimson hover:underline">
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 