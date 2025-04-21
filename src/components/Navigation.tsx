"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { Search, X, Send } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Research", href: "/research" },
  { name: "Admissions", href: "/admissions" },
  { name: "College Life", href: "/college-life" },
];

export function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Here you can implement your search logic
    console.log("Searching for:", searchQuery);
    // For now, we'll just close the search
    setIsSearchOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/cropped-logo-branding-compressed.png"
                alt="CodeLovers University"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-gray-900"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 mr-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <MobileMenu />
          </div>
        </div>
        {isSearchOpen && (
          <div className="py-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson"
              />
              <button
                onClick={handleSearch}
                className="absolute right-12 top-2 text-gray-500 hover:text-gray-700"
                aria-label="Send search"
              >
                <Send size={20} />
              </button>
              <button
                className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 