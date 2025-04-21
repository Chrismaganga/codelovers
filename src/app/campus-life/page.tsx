import Image from "next/image";
import Link from "next/link";

export default function CampusLifePage() {
  const campusFeatures = [
    {
      title: "Student Clubs",
      description: "Join one of our many tech-focused student organizations.",
      image: "/images/090518_first_week_RL_0159_1300.jpg",
    },
    {
      title: "Hackathons",
      description: "Participate in regular coding competitions and hackathons.",
      image: "/images/051220_features_1192.jpg",
    },
    {
      title: "Tech Talks",
      description: "Attend lectures and workshops from industry leaders.",
      image: "/images/092418_Dental_School_079.jpg",
    },
    {
      title: "Career Services",
      description: "Get support for internships and job placements.",
      image: "/images/100408_Yard_045-1200x630.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/campus-reax-1920.jpg"
          alt="CodeLovers University Campus Life"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Campus Life</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Student Experience</h2>
            <p className="text-lg text-gray-600 mb-6">
              At CodeLovers University, we believe that learning extends beyond the classroom. 
              Our vibrant campus life offers numerous opportunities for students to engage, 
              collaborate, and grow both academically and personally.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From tech clubs to hackathons, from career workshops to networking events, 
              there's always something exciting happening on campus.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Facilities</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>• State-of-the-art computer labs</li>
              <li>• Collaborative workspaces</li>
              <li>• Innovation hubs</li>
              <li>• Research centers</li>
              <li>• Student lounges</li>
              <li>• Sports and recreation facilities</li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Campus Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campusFeatures.map((feature, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 