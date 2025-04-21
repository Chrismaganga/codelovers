import Image from "next/image";
import Link from "next/link";

export default function AcademicsPage() {
  const programs = [
    {
      title: "Computer Science",
      description: "Master the fundamentals of programming, algorithms, and software development.",
      image: "/images/Neurons2.jpg",
    },
    {
      title: "Artificial Intelligence",
      description: "Explore machine learning, neural networks, and AI applications.",
      image: "/images/Six-layers-of-excitatory-neurons-colored-by-depth-copy.jpg",
    },
    {
      title: "Cybersecurity",
      description: "Learn to protect systems and networks from digital attacks.",
      image: "/images/SimTable.jpg",
    },
    {
      title: "Data Science",
      description: "Develop skills in data analysis, visualization, and machine learning.",
      image: "/images/Phytoplankton.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/campus-reax-1920.jpg"
          alt="CodeLovers University Academics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Academics</h1>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link
                  href={`/academics/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-codelovers-blue hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 