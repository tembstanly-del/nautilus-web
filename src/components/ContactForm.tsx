"use client";

import { COMPANY } from "@/app/constants";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            if (headingRef.current) {
                gsap.fromTo(
                    headingRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }

            // Form card animation
            if (formRef.current) {
                gsap.fromTo(
                    formRef.current,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: formRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="py-24 px-6 bg-nautilus-sand">
            <div className="max-w-4xl mx-auto">
                <div ref={headingRef} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-nautilus-deep mb-4">
                        Start the Conversation
                    </h2>
                    <p className="text-nautilus-teal/70 font-light">
                        Whether for academic guidance or organizational strategy.
                    </p>
                </div>

                <Card ref={formRef} className="p-8 md:p-12 border-nautilus-deep/10">
                    <CardContent className="p-0">
                        <form action="https://formspree.io/f/tembstan.ly@gmail.com" method="POST" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium text-nautilus-deep uppercase tracking-wider">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        className="bg-nautilus-sand/50 border-b border-nautilus-deep/20 focus:border-nautilus-gold rounded-none border-t-0 border-x-0"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-nautilus-deep uppercase tracking-wider">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        className="bg-nautilus-sand/50 border-b border-nautilus-deep/20 focus:border-nautilus-gold rounded-none border-t-0 border-x-0"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="role" className="text-sm font-medium text-nautilus-deep uppercase tracking-wider">
                                    I am a...
                                </Label>
                                <select
                                    id="role"
                                    name="role"
                                    className="flex h-9 w-full rounded-md border border-input bg-nautilus-sand/50 px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    <option value="student">Student needing research help</option>
                                    <option value="organization">Organization needing consultancy</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium text-nautilus-deep uppercase tracking-wider">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="bg-nautilus-sand/50 border-nautilus-deep/20 focus:border-nautilus-gold resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-nautilus-deep text-nautilus-sand font-serif text-lg py-6 hover:bg-nautilus-teal transition-colors duration-300"
                            >
                                Send Message
                            </Button>
                        </form>

                        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-nautilus-deep/60 text-sm">
                            <a href={`mailto:${COMPANY.contact.email}`} className="flex items-center hover:text-nautilus-gold transition-colors">
                                <Mail className="w-4 h-4 mr-2" />
                                {COMPANY.contact.email}
                            </a>
                            <a href={COMPANY.contact.whatsappLink} className="flex items-center hover:text-nautilus-gold transition-colors">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                WhatsApp: {COMPANY.contact.whatsapp}
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
