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

                <div ref={cardsRef} className="space-y-16">
                    {SERVICES.map((service) => {
                        const Icon = service.target === "Students" ? GraduationCap : Building2;
                        return (
                            <div key={service.target} data-service-card className="opacity-0">
                                <Card className="border-t-4 border-nautilus-shell-primary hover:border-nautilus-shell-deep transition-all duration-500 group">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-14 h-14 rounded-full bg-nautilus-shell-pale flex items-center justify-center group-hover:bg-nautilus-shell-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                                <Icon className="w-7 h-7 text-nautilus-shell-primary group-hover:text-white transition-all duration-300" />
                                            </div>
                                            <CardTitle className="text-2xl text-nautilus-shell-deep group-hover:text-nautilus-slate transition-colors">
                                                For {service.target}
                                            </CardTitle>
                                        </div>
                                        <CardDescription className="text-lg italic text-nautilus-slate/70 border-l-4 border-nautilus-shell-primary pl-6 font-serif leading-relaxed">
                                            &ldquo;{service.quote}&rdquo;
                                        </CardDescription>
                                        <div className="mt-6 text-nautilus-slate/70 leading-relaxed space-y-3">
                                            {service.narrative.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <h4 className="font-serif text-lg text-nautilus-slate mb-4 font-semibold">What I help with:</h4>
                                        <div className="space-y-4">
                                            {service.items.map((item) => (
                                                <div key={item.title} className="group/item">
                                                    <div className="flex items-start gap-3">
                                                        <span className="w-2 h-2 bg-nautilus-shell-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                                                        <div>
                                                            <h5 className="font-semibold text-nautilus-slate group-hover/item:text-nautilus-shell-deep transition-colors">
                                                                {item.title}
                                                            </h5>
                                                            <p className="text-sm text-nautilus-slate/70 mt-1">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
