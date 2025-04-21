import Image from "next/image";
import Link from "next/link";

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      title: "Application",
      description: "Submit your online application with required documents.",
      icon: "📝",
    },
    {
      title: "Review",
      description: "Our admissions committee reviews your application.",
      icon: "🔍",
    },
    {
      title: "Interview",
      description: "Selected candidates are invited for an interview.",
      icon: "💬",
    },
    {
      title: "Decision",
      description: "Receive your admission decision.",
      icon: "🎉",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/campus-reax-1920.jpg"
          alt="CodeLovers University Admissions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Admissions</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
            <p className="text-lg text-gray-600 mb-6">
              Join our community of innovators and technology leaders. Our admissions process 
              is designed to identify talented individuals who are passionate about technology 
              and ready to make a difference in the world.
            </p>
            <div className="space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-3xl">{step.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Requirements</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>• Completed application form</li>
              <li>• Official transcripts</li>
              <li>• Statement of purpose</li>
              <li>• Letters of recommendation</li>
              <li>• Portfolio (for certain programs)</li>
              <li>• English proficiency test scores (if applicable)</li>
            </ul>
            <div className="mt-8">
              <Link
                href="/admissions/apply"
                className="btn-primary inline-block"
              >
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 