"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY } from "@/app/constants";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip once
      setTimeout(() => setShowTooltip(true), 500);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-white px-4 py-3 rounded-lg shadow-xl border border-gray-200 max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm text-nautilus-slate font-medium">
              💬 Need help? Chat with us on WhatsApp!
            </p>
            <p className="text-xs text-nautilus-slate/60 mt-1">
              We typically reply within minutes
            </p>
          </div>
          <div className="w-3 h-3 bg-white border-r border-b border-gray-200 transform rotate-45 absolute -bottom-1.5 right-6" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={COMPANY.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:animate-none" />

        {/* Icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />

        {/* Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
          1
        </span>
      </a>

      {/* Hover text */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-nautilus-slate text-white px-3 py-1 rounded text-sm whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>
    </div>
  );
}
