"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Головна", href: "/" },
  { name: "Про мене", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-teal-400 transition-colors"
        >
          [Ваш лого/Ініціали]
        </Link>
        <ul className="flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    text-lg font-medium transition-colors
                    ${
                      isActive
                        ? "text-teal-400"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
