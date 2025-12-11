"use client";

import { SERVICES } from "@/app/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const cards = cardsRef.current;

        cards.forEach((card, idx) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none none",
                    },
                    delay: idx * 0.15,
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-nautilus-cream relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-4">
                        Integrated Expertise
                    </h2>
                    <div className="w-24 h-1 bg-nautilus-shell-primary mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {SERVICES.map((service, idx) => (
                        <Card
                            key={service.target}
                            ref={(el) => {
                                if (el) cardsRef.current[idx] = el;
                            }}
                            className="border-t-4 border-nautilus-teal/20 hover:border-nautilus-gold transition-all duration-500 group hover:shadow-lg"
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif text-nautilus-teal group-hover:text-nautilus-deep transition-colors">
                                    For {service.target}
                                </CardTitle>
                                <CardDescription asChild>
                                    <blockquote className="text-lg italic text-nautilus-deep/70 mt-4 border-l-2 border-nautilus-gold pl-4 font-serif">
                                        "{service.quote}"
                                    </blockquote>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {service.items.map((item) => (
                                        <li key={item} className="flex items-center text-nautilus-deep/80 font-medium">
                                            <span className="w-1.5 h-1.5 bg-nautilus-teal rounded-full mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
