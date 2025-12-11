"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp } from "@/lib/gsap-animations";

const faqs = [
  {
    question: "How much do your services cost?",
    answer:
      "Pricing varies based on project scope and complexity. For students, thesis guidance typically starts at $50/hour or fixed project rates. For organizations, we offer customized packages. Contact us for a free 15-minute consultation and personalized quote.",
  },
  {
    question: "What's the typical turnaround time?",
    answer:
      "Timeline depends on the project. Thesis chapters typically take 1-2 weeks, complete thesis design 4-8 weeks, and data analysis 3-7 days. We work with your deadlines and provide realistic timelines during consultation.",
  },
  {
    question: "What software/tools do you use for data analysis?",
    answer:
      "We're proficient in SPSS, R, Python, and Excel. We choose the best tool for your specific needs and can work with your preferred software. All analysis includes clear interpretation and visualization.",
  },
  {
    question: "Do you offer refunds or revisions?",
    answer:
      "Yes! We offer unlimited revisions until you're satisfied (within project scope). If we can't meet agreed-upon standards, we provide full refunds. Your satisfaction and academic integrity are our priorities.",
  },
  {
    question: "Can you help with urgent/last-minute projects?",
    answer:
      "We accommodate rush projects when possible, though we recommend starting early for best results. Contact us immediately to discuss your timeline—we'll be honest about what's achievable.",
  },
  {
    question: "How do sessions work? Online or in-person?",
    answer:
      "We primarily work online via Zoom, WhatsApp, or Google Meet for flexibility. For clients in Lusaka, in-person meetings can be arranged. All materials are shared digitally for your convenience.",
  },
  {
    question: "What if I'm not sure what I need?",
    answer:
      "That's exactly why we offer a free 15-minute consultation! We'll discuss your goals, assess your needs, and recommend the best approach. No obligation—just honest guidance.",
  },
];

export default function FAQSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeInUp(titleRef.current);

      if (accordionRef.current) {
        const items = accordionRef.current.querySelectorAll("[data-faq-item]");
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: accordionRef.current,
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
    <section className="py-24 px-6 bg-nautilus-shell-pale">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-nautilus-slate/70">
            Everything you need to know about our services
          </p>
        </div>

        <div
          ref={accordionRef}
          className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-nautilus-shell-light/20"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                data-faq-item
                className="opacity-0"
              >
                <AccordionTrigger className="text-left font-serif text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-nautilus-slate/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <p className="text-nautilus-slate/60">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-nautilus-shell-primary hover:text-nautilus-shell-deep font-medium underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
