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
    question: "What does this actually cost?",
    answer:
      "It depends on scope. A focused 2-hour consultation might be K300. A full thesis methodology overhaul could be K2,500-5,000. A complete tender response might be K8,000-15,000. I quote fixed prices after our initial conversation. No hourly billing, no surprises.",
  },
  {
    question: "How fast can you turn things around?",
    answer:
      "Standard projects: 1-3 weeks depending on complexity. Rush jobs: Often possible, but I'll be honest if your timeline is unrealistic. I'd rather tell you upfront than over-promise and under-deliver.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Statistical analysis: R (tidyverse), SPSS, Excel, Python. Documents: Quarto, LaTeX, Word (whatever your institution requires). Visualization: ggplot2, Excel charts, custom graphics. Project management: Notion, WhatsApp for quick communication. I match tools to the task—not the other way around.",
  },
  {
    question: "What if I'm not sure what I need?",
    answer:
      "That's what the free consultation is for. Tell me where you are and where you need to get. I'll help you figure out what's actually required—even if that means pointing you to free resources instead of hiring me.",
  },
  {
    question: "Can you help with urgent/last-minute projects?",
    answer:
      "Usually, yes. I've pulled students back from the edge more than once. But \"urgent\" costs more than \"planned,\" and some timelines genuinely can't be rescued. Book a call. Be honest about your deadline. I'll be honest about what's possible.",
  },
  {
    question: "Do you do the work *for* students, or *with* them?",
    answer:
      "With them. I'll guide, review, explain, and push back—but the thinking has to be yours. You need to understand your own research well enough to defend it. That said, I'm not going to watch you drown. If you're stuck, I'll help you get unstuck. The goal is a defended thesis *and* skills you keep afterward.",
  },
  {
    question: "How do sessions work? Online or in-person?",
    answer:
      "Primarily online via Zoom, WhatsApp, or Google Meet for flexibility. For clients in Lusaka, in-person meetings can be arranged. All materials are shared digitally for your convenience.",
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
