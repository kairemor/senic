"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavbarProps {
  links: { href: string; name: string }[];
  activeSection: string;
}

export default function Navbar({ links, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, height: 0 },
    open: { opacity: 1, y: 0, height: "auto" },
  };

  // Get link name based on language
  interface Link {
    href: string;
    name: string;
  }

  const getLinkName = (link: Link): string => link.name;
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/kairemor/image/upload/v1748609690/WhatsApp_Image_2025-05-29_at_18.06.06_branmu.jpg"
              alt="S.E.N.I.C. Logo"
              width={isScrolled ? 35 : 40} // Adjust size when scrolled
              height={isScrolled ? 35 : 40} // Adjust size when scrolled
              className="rounded-full transition-all duration-300"
            />
            {/* Optional: Keep text next to logo if desired */}
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              S.E.N.I.C.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-gray-200"
                } ${
                  activeSection === link.href.slice(1)
                    ? "font-bold"
                    : "font-medium"
                }`}
              >
                {getLinkName(link)}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white rounded-lg mt-2 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col py-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 transition-colors duration-300 ${
                      activeSection === link.href.slice(1)
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {getLinkName(link)}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
