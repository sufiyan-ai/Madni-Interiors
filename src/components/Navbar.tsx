"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact-form" },
  ];

  // Matches footer: #122419 — transparent on hero, solid dark-green when scrolled
  const headerBg = isScrolled
    ? "bg-[#122419]/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg} ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="relative h-10 w-36 sm:h-12 sm:w-44 flex-shrink-0">
          <Image
            src="/logo.jpg"
            alt="Madni Interiors"
            fill
            sizes="(max-width: 640px) 144px, 176px"
            className="object-contain object-left"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="https://wa.me/919137411893"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white transition-colors font-medium rounded-sm text-sm uppercase tracking-wider whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Consult Now
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu — same dark-green bg */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#122419] border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-amber-400 font-medium uppercase tracking-widest transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919137411893"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-8 py-3 bg-amber-500 text-white font-bold rounded-sm uppercase tracking-wider text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consult Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
