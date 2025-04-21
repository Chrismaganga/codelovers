import Image from "next/image";
import Link from "next/link";
import React from "react";

const newsItems = [
  {
    id: 1,
    image: "/images/100408_Yard_045-1200x630.jpg",
    title: "Groundbreaking Research Discovery",
    description:
      "CodeLovers scientists make significant breakthrough in quantum computing",
    alt: "Research Breakthrough",
    link: "/news/research-breakthrough",
  },
  {
    id: 2,
    image: "/images/051220_features_1192.jpg",
    title: "Student Innovation Award",
    description:
      "CodeLovers students win prestigious international competition",
    alt: "Student Achievement",
    link: "/news/student-innovation",
  },
  {
    id: 3,
    image: "/images/092418_Dental_School_079.jpg",
    title: "Annual Tech Conference",
    description:
      "CodeLovers triumph in international coding competition",
    alt: "Campus Event",
    link: "/news/tech-conference",
  },
];

const securityLinks = [
  { name: "Accessibility", href: "/accessibility" },
  { name: "Digital Accessibility", href: "/digital-accessibility" },
  { name: "Privacy Statement", href: "/privacy" },
  { name: "Copyright", href: "/copyright" },
  { name: "Trademark Notice", href: "/trademark" },
];

const websiteLinks = [
  { name: "CodeLovers", href: "https://codelovers.com" },
  { name: " CodeloversGazette", href: "https://news.com" },
  { name: "CodeLovers Magazine", href: "https://codeloversmagazine.org" },
  { name: " CodeLovers Divinity School", href: "https://cds.codelovers.com" },
  { name: "Codelovers Extension School", href: "https://extension.codelovers.com" },
];

const contactLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Maps & Directions", href: "/maps" },
  { name: "Campus Tours", href: "/tours" },
  { name: "Jobs", href: "/jobs" },
  { name: "Emergency", href: "/emergency" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/images/Instagram-1.png",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: "/images/tiktok-1.png",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/images/Linkedin-1.png",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/images/FB3.png",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: "/images/youtube-1.png",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Security & Brand Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Security & Brand</h3>
            <ul className="space-y-2">
              {securityLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Website Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Website</h3>
            <ul className="space-y-2">
              {websiteLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="hover:opacity-75 transition-opacity"
                  />
                </a>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} CodeLovers University. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
