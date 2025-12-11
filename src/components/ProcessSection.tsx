"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Calendar, FileCheck, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Free Consultation",
    description:
      "15-minute call to understand your needs, timeline, and goals. No obligation—just honest guidance on the best approach.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Proposal & Agreement",
    description:
      "Clear scope, timeline, and fixed pricing. You know exactly what to expect before we start. Transparent and straightforward.",
  },
  {
    icon: Users,
    number: "03",
    title: "Collaborative Work",
    description:
      "Regular updates, your feedback incorporated at every stage. You're involved as much or as little as you prefer.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Delivery & Support",
    description:
      "Final deliverables with documentation and explanations. Post-project support for revisions and questions included.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        const stepElements = sectionRef.current.querySelectorAll("[data-step]");
        const lineElements = sectionRef.current.querySelectorAll("[data-line]");

        // Animate steps
        gsap.fromTo(
          stepElements,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );

        // Animate connecting lines
        gsap.fromTo(
          lineElements,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
            delay: 0.3,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-4">
            How It Works
          </h2>
          <p className="text-nautilus-slate/70 max-w-2xl mx-auto">
            A simple, transparent process from first contact to successful completion
          </p>
        </div>

        <div className="relative">
          {/* Desktop: Horizontal timeline */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div data-step className="text-center opacity-0">
                    {/* Icon circle */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-nautilus-shell-primary rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="text-sm font-mono text-nautilus-shell-deep mb-2">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif text-nautilus-slate mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-nautilus-slate/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting line (except last) */}
                  {index < steps.length - 1 && (
                    <div
                      data-line
                      className="absolute top-8 left-[60%] w-[80%] h-0.5 bg-nautilus-shell-light origin-left"
                      style={{ transform: "scaleX(0)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative flex gap-6">
                  {/* Icon and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-nautilus-shell-primary rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-nautilus-shell-light mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div data-step className="flex-1 pb-8 opacity-0">
                    <div className="text-xs font-mono text-nautilus-shell-deep mb-1">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-serif text-nautilus-slate mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-nautilus-slate/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-nautilus-shell-primary text-white px-8 py-3 rounded-full hover:bg-nautilus-shell-deep transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
