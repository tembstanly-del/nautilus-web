"use client";

import { REASONS_TO_CHOOSE } from "@/app/constants";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ValueProp() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const reasonsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation with split text effect
            if (headingRef.current) {
                const words = headingRef.current.querySelectorAll('.word');
                gsap.fromTo(
                    words,
                    { opacity: 0, x: -50, rotationY: 45 },
                    {
                        opacity: 1,
                        x: 0,
                        rotationY: 0,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }

            // Description fade in
            if (descriptionRef.current) {
                gsap.fromTo(
                    descriptionRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: descriptionRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }

            // Reasons stagger animation
            reasonsRef.current.forEach((reason, idx) => {
                if (reason) {
                    const icon = reason.querySelector('.check-icon');
                    const content = reason.querySelector('.reason-content');

                    gsap.fromTo(
                        reason,
                        { opacity: 0, x: 50 },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: reason,
                                start: "top 85%",
                            },
                            delay: idx * 0.1,
                        }
                    );

                    // Icon draw animation
                    if (icon) {
                        gsap.fromTo(
                            icon,
                            { scale: 0, rotation: -180 },
                            {
                                scale: 1,
                                rotation: 0,
                                duration: 0.6,
                                ease: "back.out(1.7)",
                                scrollTrigger: {
                                    trigger: reason,
                                    start: "top 85%",
                                },
                                delay: idx * 0.1 + 0.2,
                            }
                        );
                    }
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-nautilus-deep text-nautilus-sand">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 ref={headingRef} className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                            <span className="word inline-block">A</span>{" "}
                            <span className="word inline-block">Generalist</span>{" "}
                            <span className="word inline-block">in</span>{" "}
                            <span className="word inline-block">a</span> <br />
                            <span className="word inline-block text-nautilus-gold italic">Specialist</span>{" "}
                            <span className="word inline-block text-nautilus-gold italic">World.</span>
                        </h2>
                        <p ref={descriptionRef} className="text-lg text-nautilus-sand/80 font-light leading-relaxed mb-8">
                            Specialization is powerful, but it fragments knowledge. By connecting chambers of expertise—pharmacy, education, research, and analysis—we offer a level of rigorous integration that single-discipline specialists cannot match.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {REASONS_TO_CHOOSE.map((reason, idx) => (
                            <div
                                key={reason.title}
                                ref={(el) => {
                                    if (el) reasonsRef.current[idx] = el;
                                }}
                                className="flex items-start group"
                            >
                                <CheckCircle2 className="check-icon w-6 h-6 text-nautilus-gold mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <div className="reason-content">
                                    <h3 className="text-xl font-serif text-nautilus-cream mb-1">
                                        {reason.title}
                                    </h3>
                                    <p className="text-nautilus-sand/60 text-sm font-light">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
