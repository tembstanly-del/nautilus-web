"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const examples = [
  {
    type: "Thesis Methodology",
    before: {
      title: "Before",
      problems: [
        "Vague research question",
        "Unclear sampling method",
        "No justification for approach",
        "Missing ethical considerations",
      ],
    },
    after: {
      title: "After",
      improvements: [
        "Specific, defensible research question",
        "Justified sampling with calculations",
        "Clear methodology rationale",
        "Complete ethical clearance documentation",
      ],
    },
    result: "Successfully defended with examiner praise",
  },
  {
    type: "Grant Proposal",
    before: {
      title: "Before",
      problems: [
        "Generic problem statement",
        "Weak budget justification",
        "Missing implementation timeline",
        "No sustainability plan",
      ],
    },
    after: {
      title: "After",
      improvements: [
        "Data-backed, specific problem analysis",
        "Detailed, itemized budget with quotes",
        "Gantt chart with clear milestones",
        "3-year sustainability strategy",
      ],
    },
    result: "$50K grant approved on first submission",
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
              <h3 className="text-xl font-serif text-nautilus-slate mb-6 text-center">
                {example.type}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
                {/* Before */}
                <Card className="border-2 border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <h4 className="font-semibold text-red-900">
                        {example.before.title}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {example.before.problems.map((problem, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-red-800"
                        >
                          <span className="text-red-500 mt-1">✗</span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-nautilus-shell-primary rounded-full items-center justify-center shadow-lg z-10">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>

                {/* After */}
                <Card className="border-2 border-green-200 bg-green-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-900">
                        {example.after.title}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {example.after.improvements.map((improvement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-green-800"
                        >
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Result */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-nautilus-shell-pale rounded-full">
                  <span className="text-sm font-medium text-nautilus-shell-deep">
                    Result:
                  </span>
                  <span className="text-sm text-nautilus-slate">
                    {example.result}
                  </span>
                </div>
              </div>
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
