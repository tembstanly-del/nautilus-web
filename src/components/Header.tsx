"use client";

import { useState, useEffect } from "react";
import { COMPANY } from "@/app/constants";
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
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              {/* Placeholder for logo image - will be replaced with actual logo */}
              <Image
                src="/nautilus-logo.png"
                alt="Nautilus Logo"
                fill
                className="object-contain"
                onError={(e) => {
                  // Fallback to SVG if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              {/* SVG Fallback - Simplified nautilus spiral */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-nautilus-shell-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0"
                  className="opacity-30"
                />
                <path
                  d="M50,50 m-25,0 a25,25 0 1,1 50,0"
                  className="opacity-50"
                />
                <path
                  d="M50,50 m-15,0 a15,15 0 1,1 30,0"
                  className="opacity-70"
                />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-semibold text-nautilus-slate group-hover:text-nautilus-shell-primary transition-colors">
                NAUTILUS
              </span>
              <span className="text-xs text-nautilus-slate/60 tracking-wider uppercase">
                {COMPANY.tagline}
              </span>
            </div>
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
