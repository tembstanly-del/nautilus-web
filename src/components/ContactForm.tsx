"use client";

import { COMPANY } from "@/app/constants";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
    return (
        <section id="contact" className="py-24 px-6 bg-nautilus-cream">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-nautilus-slate mb-4">
                        Start the Conversation
                    </h2>
                    <p className="text-nautilus-shell-deep/70 font-light">
                        Whether for academic guidance or organizational strategy.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 shadow-sm border border-nautilus-slate/5 rounded-sm">
                    <form action="https://formspree.io/f/tembstan.ly@gmail.com" method="POST" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="role">I am a...</Label>
                            <select
                                id="role"
                                name="role"
                                className="flex h-11 w-full rounded-md border border-nautilus-shell-light/30 bg-nautilus-cream-dark/50 px-4 py-3 text-base text-nautilus-slate transition-all focus-visible:outline-none focus-visible:border-nautilus-shell-primary focus-visible:ring-2 focus-visible:ring-nautilus-shell-primary/20 md:text-sm"
                            >
                                <option value="student">Student needing research help</option>
                                <option value="organization">Organization needing consultancy</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full font-serif text-lg">
                            Send Message
                        </Button>
                    </form>

                    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-nautilus-slate/60 text-sm">
                        <a href={`mailto:${COMPANY.contact.email}`} className="flex items-center hover:text-nautilus-shell-primary transition-colors">
                            <Mail className="w-4 h-4 mr-2" />
                            {COMPANY.contact.email}
                        </a>
                        <a href={COMPANY.contact.whatsappLink} className="flex items-center hover:text-nautilus-shell-primary transition-colors">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            WhatsApp: {COMPANY.contact.whatsapp}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
