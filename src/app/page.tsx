import { Button } from "@/components/ui/button";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/components/News";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col min-h-screen">
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

          <Features />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-center mb-12">Explore CodeLovers</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/Neurons2.jpg"
                    alt="Academics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Academics</h3>
                  <p className="text-gray-600 mb-4">
                    Explore our world-class academic programs and research opportunities.
                  </p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href="/academics">Learn more →</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/100408_Yard_045-1200x630.jpg"
                    alt="Research"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Research</h3>
                  <p className="text-gray-600 mb-4">
                    Discover groundbreaking research and innovation at CodeLovers.
                  </p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href="/research">Learn more →</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/090518_first_week_RL_0159_1300.jpg"
                    alt="Campus Life"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Campus Life</h3>
                  <p className="text-gray-600 mb-4">
                    Experience the vibrant community at CodeLovers.
                  </p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href="/campus-life">Learn more →</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/campus-reax-1920.jpg"
                    alt="Admissions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Admissions</h3>
                  <p className="text-gray-600 mb-4">
                    Start your journey at CodeLovers University.
                  </p>
                  <Button asChild variant="link" className="mt-4">
                    <Link href="/admissions">Learn more →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
