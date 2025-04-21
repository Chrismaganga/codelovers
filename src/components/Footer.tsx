import Image from "next/image";
import Link from "next/link";
import React from 'react';

const footerLinks = {
  about: [
    { name: "History", href: "/about/history" },
    { name: "Leadership", href: "/about/leadership" },
    { name: "Schools", href: "/about/schools" },
  ],
  academics: [
    { name: "Programs", href: "/academics/programs" },
    { name: "Courses", href: "/academics/courses" },
    { name: "Research", href: "/academics/research" },
  ],
  resources: [
    { name: "Library", href: "/resources/library" },
    { name: "Museums", href: "/resources/museums" },
    { name: "Events", href: "/resources/events" },
  ],
  contact: [
    { name: "Directory", href: "/contact/directory" },
    { name: "News", href: "/contact/news" },
    { name: "Media", href: "/contact/media" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/images/Instagram-1.png"
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: "/images/tiktok-1.png"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/images/Linkedin-1.png"
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/images/FB3.png"
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: "/images/youtube-1.png"
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              About
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Academics
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.academics.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
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