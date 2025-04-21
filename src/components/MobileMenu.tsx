"use client";

import { Menu, X } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const navigationItems = [
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Research", href: "/research" },
  { name: "Admissions", href: "/admissions" },
  { name: "College Lifestyle", href: "/college-life style" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="px-4 py-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 