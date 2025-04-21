import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/campus-reax-1920.jpg"
            alt="CodeLovers University Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to CodeLovers University
            </h1>
            <p className="mt-6 text-xl max-w-3xl">
              Founded in 2024, CodeLovers University is a leading institution in technology and innovation.
            </p>
            <div className="mt-10">
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-codelovers-light-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Explore CodeLovers</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900">Academics</h3>
              <p className="mt-2 text-gray-600">Explore our world-class academic programs and research opportunities.</p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/academics">Learn more →</Link>
              </Button>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900">Admissions</h3>
              <p className="mt-2 text-gray-600">Learn about our admission process and requirements.</p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/admissions">Learn more →</Link>
              </Button>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900">Research</h3>
              <p className="mt-2 text-gray-600">Discover groundbreaking research and innovation.</p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/research">Learn more →</Link>
              </Button>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900">Campus Life</h3>
              <p className="mt-2 text-gray-600">Experience the vibrant community at CodeLovers.</p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/campus-life">Learn more →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* <Footer /> */}
=======
>>>>>>> abf132500d4e197aeb621c2d69cebc2048648e21
    </div>
  );
}
