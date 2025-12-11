"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Pharmacy Graduate Student",
    text: "Stanley's guidance was invaluable for my thesis. He helped me refine my methodology and taught me SPSS from scratch. I defended successfully and learned skills I'll use throughout my career.",
    achievement: "Defended with Distinction",
  },
  {
    name: "Green Health Initiative",
    role: "NGO, Lusaka",
    text: "Nautilus helped us secure a $50K grant with a compelling proposal. The research design and data analysis were thorough and professional. Stanley understands both the technical and narrative sides of proposals.",
    achievement: "Grant Approved",
  },
  {
    name: "James K.",
    role: "Computer Science Student",
    text: "I was stuck on my data analysis for weeks. Stanley not only helped me complete it but explained every step so I understood my own research. Worth every kwacha!",
    achievement: "Completed in 2 Weeks",
  },
  {
    name: "MedSupply Ltd.",
    role: "Healthcare Company",
    text: "We needed tender documentation for medical equipment procurement. Nautilus delivered a compliant, professional submission on a tight deadline. Their attention to detail made all the difference.",
    achievement: "Tender Won",
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
    <section ref={sectionRef} className="py-24 px-6 bg-nautilus-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-4">
            What Clients Say
          </h2>
          <p className="text-nautilus-slate/70 max-w-2xl mx-auto">
            Real feedback from students and organizations we've helped succeed
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
