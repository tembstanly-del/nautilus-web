"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    description: "Thesis, proposals, and research studies",
  },
  {
    number: "5+",
    label: "Years Experience",
    description: "In research and consultancy",
  },
  {
    number: "30+",
    label: "Happy Clients",
    description: "Students and organizations",
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Projects completed on time",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const statElements = sectionRef.current?.querySelectorAll("[data-stat]");

      if (statElements && statElements.length > 0) {
        // Animate numbers counting up
        statElements.forEach((stat) => {
          const numberElement = stat.querySelector("[data-number]");
          const targetText = numberElement?.textContent || "0";
          const isPercentage = targetText.includes("%");
          const target = parseInt(targetText.replace(/\D/g, ""));

          gsap.fromTo(
            numberElement,
            { textContent: 0 },
            {
              textContent: target,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              onUpdate: function () {
                if (numberElement) {
                  const current = Math.ceil(this.targets()[0].textContent);
                  numberElement.textContent = isPercentage ? `${current}%` : `${current}+`;
                }
              },
            }
          );
        });

        // Animate stat cards
        gsap.fromTo(
          statElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-nautilus-slate text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-nautilus-shell-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nautilus-shell-light rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Trusted by Students & Organizations
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Building a track record of excellence in research and consultancy
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-stat
              className="text-center opacity-0"
            >
              <div
                data-number
                className="text-4xl md:text-5xl font-serif text-nautilus-shell-light mb-2"
              >
                {stat.number}
              </div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-white/60">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
