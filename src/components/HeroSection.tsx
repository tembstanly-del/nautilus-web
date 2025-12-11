"use client";

import { COMPANY } from "@/app/constants";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
    const spiralRef = useRef<SVGSVGElement>(null);
    const latinTaglineRef = useRef<HTMLHeadingElement>(null);
    const mainHeadingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Spiral animation with GSAP
            if (spiralRef.current) {
                gsap.to(spiralRef.current, {
                    rotation: 360,
                    duration: 120,
                    ease: "none",
                    repeat: -1,
                });
            }

            // Create master timeline for entrance animations
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Latin tagline fade in from top
            if (latinTaglineRef.current) {
                tl.fromTo(
                    latinTaglineRef.current,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.8 }
                );
            }

            // Main heading with split text effect
            if (mainHeadingRef.current) {
                const words = mainHeadingRef.current.querySelectorAll('.word');
                tl.fromTo(
                    words,
                    { opacity: 0, y: 30, rotationX: -45 },
                    {
                        opacity: 1,
                        y: 0,
                        rotationX: 0,
                        duration: 1,
                        stagger: 0.1
                    },
                    "-=0.4"
                );
            }

            // Description fade in
            if (descriptionRef.current) {
                tl.fromTo(
                    descriptionRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.3"
                );
            }

            // Button with magnetic hover effect setup
            if (buttonRef.current) {
                tl.fromTo(
                    buttonRef.current,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 0.6 },
                    "-=0.3"
                );

                // Magnetic button effect
                const button = buttonRef.current.querySelector('a');
                if (button) {
                    button.addEventListener('mouseenter', () => {
                        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
                    });
                    button.addEventListener('mouseleave', () => {
                        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
                    });
                }
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {/* Abstract Golden Ratio / Nautilus Spiral */}
                <svg
                    ref={spiralRef}
                    viewBox="0 0 1000 1000"
                    className="w-full h-full text-nautilus-gold"
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
                        d="M500,500 m0,-250 a250,250 0 1,1 0,500 a250,250 0 1,1 0,-500"
                        className="opacity-40"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        d="M500,500 m0,-150 a150,150 0 1,1 0,300 a150,150 0 1,1 0,-300"
                        className="opacity-60"
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
                <div className="space-y-4">
                    <h2
                        ref={latinTaglineRef}
                        className="text-nautilus-gold font-serif text-xl md:text-2xl tracking-widest uppercase mb-4"
                    >
                        {COMPANY.latinTagline}
                    </h2>
                    <h1
                        ref={mainHeadingRef}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-nautilus-deep leading-tight"
                    >
                        <span className="word inline-block">Structure.</span>{" "}
                        <span className="word inline-block">Wisdom.</span> <br />
                        <span className="word inline-block italic text-nautilus-teal">Synthesis.</span>
                    </h1>
                </div>

                <p
                    ref={descriptionRef}
                    className="text-lg md:text-xl text-nautilus-teal/80 max-w-2xl mx-auto font-sans font-light leading-relaxed"
                >
                    {COMPANY.founder} presents {COMPANY.name}.
                    <br />
                    <span className="block mt-4 text-base md:text-lg">
                        We integrate research, analysis, and writing for those who need rigorous thinking across disciplines.
                    </span>
                </p>

                <div ref={buttonRef}>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-full border-nautilus-deep/20 text-nautilus-deep hover:bg-nautilus-deep hover:text-nautilus-sand font-medium tracking-wide"
                    >
                        <a href="#contact">
                            Begin the Conversation
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
