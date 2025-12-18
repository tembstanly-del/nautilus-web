"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const examples = [
  {
    type: "The Methodology Rewrite",
    story: "A BPharm student came to me with a methodology chapter rejected twice. The research question was vague, the sampling made no sense, and the supervisor had lost patience.",
    action: "We rebuilt from the ground up: sharpened the research question, justified the sampling with actual calculations, documented the ethical considerations. Three weeks of focused work.",
    result: "Defended successfully. Examiner specifically praised the methodology section.",
  },
  {
    type: "The Statistics Rescue",
    story: "A Masters student in Public Health had collected data but frozen at analysis. Six weeks until submission. The SPSS file was a mess. She'd never run anything beyond descriptive statistics.",
    action: "We cleaned the dataset, identified the right tests (she needed chi-square and binary logistic regression, not the ANOVA she'd planned), ran the analysis together so she understood every step.",
    result: "Completed with two weeks to spare. Successfully defended.",
  },
];

export default function BeforeAfterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll("[data-comparison]");

        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power3.out",
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
    <section ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-nautilus-shell-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-nautilus-shell-light rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-4">
            Real Transformations
          </h2>
          <p className="text-nautilus-slate/70 max-w-2xl mx-auto">
            See how we help turn unclear, weak work into clear, defendable excellence
          </p>
        </div>

        <div className="space-y-12">
          {examples.map((example, index) => (
            <div key={index} data-comparison className="opacity-0">
              <Card className="border-l-4 border-nautilus-shell-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-nautilus-slate mb-6">
                    {example.type}
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-nautilus-cream-dark/30 p-6 rounded-lg">
                      <p className="text-nautilus-slate/80 leading-relaxed">
                        {example.story}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-nautilus-shell-primary mt-1 flex-shrink-0" />
                      <p className="text-nautilus-slate/80 leading-relaxed">
                        {example.action}
                      </p>
                    </div>

                    <div className="bg-green-50/50 border border-green-200 p-6 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-green-900">Result: </span>
                          <span className="text-green-800 italic">{example.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-nautilus-slate/70 mb-4">
            Want similar results for your project?
          </p>
          <a
            href="#contact"
            className="inline-block bg-nautilus-shell-primary text-white px-8 py-3 rounded-full hover:bg-nautilus-shell-deep transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
