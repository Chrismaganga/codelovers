import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navigationItems = [
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Research", href: "/research" },
  { name: "Admissions", href: "/admissions" },
  { name: "Campus Life", href: "/campus-life" },
];

export function Navigation() {
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
          </div>
          <div className="flex items-center md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
} 