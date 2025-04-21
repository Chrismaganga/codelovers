import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/campus-reax-1920.jpg"
          alt="CodeLovers University Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About CodeLovers University</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              CodeLovers University is dedicated to advancing knowledge and educating students in technology, 
              computer science, and related fields who will make a difference globally.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We foster an environment of innovation and creativity, preparing our students to be leaders 
              in the rapidly evolving tech industry.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2024, CodeLovers University has quickly established itself as a leading institution 
              in technology education and research.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to excellence in education and research has made us a hub for technological 
              innovation and development.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
              <p className="text-gray-600">President</p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-bold mb-2">Prof. Michael Chen</h3>
              <p className="text-gray-600">Vice President of Academic Affairs</p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-bold mb-2">Dr. Emily Rodriguez</h3>
              <p className="text-gray-600">Dean of Research</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 