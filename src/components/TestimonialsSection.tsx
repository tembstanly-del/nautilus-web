"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "BPharm Graduate Student",
    text: "I was three weeks from submission with a methodology chapter my supervisor had rejected twice. Stanley rebuilt it with me from scratch—not just fixing it, but explaining why each choice mattered. I went into my defense actually understanding my own research.",
    achievement: "Defended with Distinction",
  },
  {
    name: "James K.",
    role: "Computer Science Graduate",
    text: "My SPSS output looked like hieroglyphics. Stanley didn't just run the tests for me—he sat with me until I understood what a p-value actually means and why my confidence intervals mattered. I use those skills now in my job.",
    achievement: "Analysis completed in 2 weeks",
  },
  {
    name: "David L.",
    role: "MBChB Student",
    text: "Working with Stanley transformed my research proposal. His expertise in medical research methodology and statistical analysis helped me design a robust study. The examiners were impressed.",
    achievement: "Proposal Approved",
  },
  {
    name: "Mercy C.",
    role: "Masters Student, Public Health",
    text: "Stanley's one-on-one sessions were exactly what I needed. He guided me through complex statistical concepts and helped me present my findings clearly. I couldn't have done it without him.",
    achievement: "Thesis Defended Successfully",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll("[data-testimonial]");

        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-nautilus-cream texture-paper">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-4">
            What Clients Say
          </h2>
          <p className="text-nautilus-slate/70 max-w-2xl mx-auto">
            Real feedback from students and organizations we&apos;ve helped succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              data-testimonial
              className="relative overflow-hidden opacity-0 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-nautilus-shell-primary/20 mb-4" />

                <p className="text-nautilus-slate/80 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-serif font-semibold text-nautilus-slate">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-nautilus-slate/60">
                      {testimonial.role}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="inline-block px-3 py-1 bg-nautilus-shell-pale text-nautilus-shell-deep text-xs font-medium rounded-full">
                      {testimonial.achievement}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-nautilus-slate/60">
            Join our growing list of satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
}
