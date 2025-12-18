"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { fadeInUp } from "@/lib/gsap-animations";

export default function AboutSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeInUp(titleRef.current);

      if (contentRef.current) {
        const paragraphs = contentRef.current.querySelectorAll("p");
        gsap.fromTo(
          paragraphs,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-12 text-center"
        >
          About Stanley
        </h2>

        <div ref={contentRef} className="space-y-6 text-nautilus-slate/80 leading-relaxed">
          <p className="text-lg opacity-0">
            I&apos;m a pharmacist (BPharm) who fell sideways into research methodology, data analysis, and teaching.
          </p>

          <p className="opacity-0">
            It started simply: classmates needed help with their dissertations. I was the person who actually enjoyed wrestling with SPSS output and explaining why their sampling strategy wouldn&apos;t survive a viva. Word spread. Students from other programs started asking.
          </p>

          <p className="opacity-0">
            Along the way, I completed MIT&apos;s courses in data analysis and microeconomics. I learned R properly—tidyverse philosophy, Quarto for reproducible reports, visualization principles that actually communicate. I taught myself enough Python to be dangerous and enough about quantitative finance to be curious.
          </p>

          <p className="font-medium text-nautilus-slate opacity-0">
            What I discovered: <span className="text-nautilus-shell-primary">the most interesting problems don&apos;t fit neatly into one discipline.</span>
          </p>

          <p className="opacity-0">
            A thesis methodology question is also a statistics question is also a writing question is also a &ldquo;how do I explain this to my supervisor&rdquo; question. Most students hire a statistician who doesn&apos;t write, a writer who doesn&apos;t understand methods, and an editor who doesn&apos;t know the field. They end up coordinating three people who don&apos;t talk to each other.
          </p>

          <p className="opacity-0">
            I&apos;d rather be one person who sees the whole picture.
          </p>

          <div className="border-l-4 border-nautilus-shell-primary pl-6 py-4 my-8 bg-nautilus-shell-pale/30 rounded-r-lg opacity-0">
            <p className="font-serif text-lg text-nautilus-slate">
              <strong>The Nautilus philosophy:</strong> Like the chambered shell, each domain of knowledge connects to the next. Pharmacy. Research design. Data analysis. Technical writing. Programming. They&apos;re not separate skills—they&apos;re chambers of one integrated structure.
            </p>
          </div>

          <p className="opacity-0">
            I work from Lusaka. I&apos;m building this practice while working part-time in community pharmacy—which keeps me grounded in the practical realities of healthcare and reminds me daily that knowledge should <em>do</em> something.
          </p>
        </div>
      </div>
    </section>
  );
}
