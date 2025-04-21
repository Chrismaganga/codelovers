import Image from "next/image";
import Link from "next/link";

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Quantum Computing",
      description: "Advancing the frontiers of quantum algorithms and hardware.",
      image: "/images/Neurons2.jpg",
    },
    {
      title: "Machine Learning",
      description: "Developing new approaches to artificial intelligence and deep learning.",
      image: "/images/Six-layers-of-excitatory-neurons-colored-by-depth-copy.jpg",
    },
    {
      title: "Cybersecurity",
      description: "Researching new methods to protect digital infrastructure.",
      image: "/images/SimTable.jpg",
    },
    {
      title: "Human-Computer Interaction",
      description: "Exploring innovative ways humans interact with technology.",
      image: "/images/Phytoplankton.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/campus-reax-1920.jpg"
          alt="CodeLovers University Research"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Research</h1>
        </div>
      </div>

      {/* Research Areas Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <Link
                  href={`/research/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
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