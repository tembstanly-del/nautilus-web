"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image
              src="/nautilus-logo.svg"
              alt="Nautilus"
              width={240}
              height={70}
              className="h-12 w-auto transition-opacity group-hover:opacity-80"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-nautilus-slate hover:text-nautilus-shell-primary transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-nautilus-slate hover:text-nautilus-shell-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-nautilus-shell-primary text-white rounded-full hover:bg-nautilus-shell-deep transition-colors font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-nautilus-slate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-nautilus-divider pt-4">
            <a
              href="#services"
              className="block text-nautilus-slate hover:text-nautilus-shell-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-nautilus-slate hover:text-nautilus-shell-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-center px-6 py-2 bg-nautilus-shell-primary text-white rounded-full hover:bg-nautilus-shell-deep transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
