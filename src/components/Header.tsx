"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Main", href: "/" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Якщо користувач прокрутив більше ніж на 10px, змінюємо стан
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-gray-900/80 backdrop-blur-sm shadow-lg"
            : "bg-gray-900"
        }
      `}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-teal-400 transition-colors"
        >
          mezgoodle
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
