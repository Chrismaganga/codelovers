"use client";

import { Menu, X } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const navigationItems = [
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Research", href: "/research" },
  { name: "Admissions", href: "/admissions" },
  { name: "College Life", href: "/college-life" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-gray-900"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen ? "true" : "false"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 