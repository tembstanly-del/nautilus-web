"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { COMPANY } from "@/app/constants";
import { Button } from "@/components/ui/button";
import { parallaxY } from "@/lib/gsap-animations";

export default function HeroSection() {
    const spiralRef = useRef<SVGSVGElement>(null);
    const latinRef = useRef<HTMLHeadingElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Parallax effect on spiral
        if (spiralRef.current) {
            parallaxY(spiralRef.current, -30);
        }

        // Animate content with GSAP
        const ctx = gsap.context(() => {
            gsap.fromTo(
                latinRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
            );

            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
            );

            gsap.fromTo(
                descRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
            );

            gsap.fromTo(
                btnRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)", delay: 1.2 }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {/* Abstract Golden Ratio / Nautilus Spiral */}
                <svg
                    ref={spiralRef}
                    viewBox="0 0 1000 1000"
                    className="w-full h-full text-nautilus-shell-primary animate-[spin_120s_linear_infinite]"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        d="M500,500 m0,-400 a400,400 0 1,1 0,800 a400,400 0 1,1 0,-800"
                        className="opacity-20"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        d="M500,500 m-250,0 a250,250 0 1,1 500,0 a250,250 0 1,1 -500,0"
                        className="opacity-40"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        d="M500,500 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0"
                        className="opacity-60"
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
                <div className="space-y-4">
                    <h2 ref={latinRef} className="text-nautilus-shell-deep font-serif text-xl md:text-2xl tracking-widest uppercase mb-4 opacity-0">
                        {COMPANY.latinTagline}
                    </h2>
                    <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-nautilus-slate leading-tight opacity-0">
                        Structure. Wisdom. <br />
                        <span className="italic text-nautilus-shell-primary">Synthesis.</span>
                    </h1>
                </div>

                <p
                    ref={descRef}
                    className="text-lg md:text-xl text-nautilus-slate/70 max-w-2xl mx-auto font-sans font-light leading-relaxed opacity-0"
                >
                    {COMPANY.founder} presents {COMPANY.name}.
                    <br />
                    <span className="block mt-4 text-base md:text-lg">
                        We integrate research, analysis, and writing for those who need rigorous thinking across disciplines.
                    </span>
                </p>

                <div ref={btnRef} className="opacity-0">
                    <Button asChild size="lg">
                        <a href="#contact">
                            Begin the Conversation
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
