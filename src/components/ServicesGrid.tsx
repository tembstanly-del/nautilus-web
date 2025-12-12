"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SERVICES } from "@/app/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { drawLine, fadeInUp } from "@/lib/gsap-animations";
import { GraduationCap, Building2 } from "lucide-react";

export default function ServicesGrid() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title
            fadeInUp(titleRef.current);

            // Animate divider
            if (dividerRef.current) {
                drawLine(dividerRef.current, 1.2);
            }

            // Stagger animate service cards
            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll("[data-service-card]");
                gsap.fromTo(
                    cards,
                    {
                        opacity: 0,
                        y: 60,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
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
        <section id="services" className="py-24 px-6 bg-nautilus-shell-pale relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-4"
                    >
                        Integrated Expertise
                    </h2>
                    <div
                        ref={dividerRef}
                        className="w-24 h-1 bg-nautilus-shell-primary mx-auto origin-left"
                    />
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {SERVICES.map((service) => {
                        const Icon = service.target === "Students" ? GraduationCap : Building2;
                        return (
                            <Card
                                key={service.target}
                                data-service-card
                                className="border-t-4 border-nautilus-shell-light hover:border-nautilus-shell-primary transition-all duration-500 opacity-0 group"
                            >
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded-full bg-nautilus-shell-pale flex items-center justify-center group-hover:bg-nautilus-shell-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            <Icon className="w-6 h-6 text-nautilus-shell-primary group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                                        </div>
                                        <CardTitle className="text-nautilus-shell-deep group-hover:text-nautilus-slate transition-colors">
                                            For {service.target}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-lg italic text-nautilus-slate/70 border-l-2 border-nautilus-shell-primary pl-4 font-serif mt-4">
                                        &ldquo;{service.quote}&rdquo;
                                    </CardDescription>
                                </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {service.items.map((item) => (
                                        <li key={item} className="flex items-start text-nautilus-slate/80 hover:text-nautilus-slate transition-colors duration-200 hover:translate-x-1">
                                            <span className="w-1.5 h-1.5 bg-nautilus-shell-primary rounded-full mr-3 mt-2 flex-shrink-0 transition-transform duration-200 hover:scale-150" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
