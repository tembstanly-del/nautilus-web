"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (800px)
      const shouldShow = window.scrollY > 800;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 animate-in slide-in-from-top-full duration-500">
      <div className="bg-gradient-to-r from-nautilus-highlight via-yellow-400 to-nautilus-highlight shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Calendar className="w-5 h-5 text-nautilus-slate hidden sm:block" />
              <p className="text-sm md:text-base font-medium text-nautilus-slate">
                <span className="hidden sm:inline">🎁 </span>
                <strong>Limited slots!</strong> Book your free 15-minute consultation today
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="bg-nautilus-slate hover:bg-nautilus-slate/90 text-white shadow-lg"
              >
                <a href="#contact">Book Now</a>
              </Button>

              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 hover:bg-black/10 rounded-full transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4 text-nautilus-slate" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
