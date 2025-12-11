"use client";

import { useState } from "react";
import { COMPANY } from "@/app/constants";
import { Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus("success");
                form.reset();
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    {submitStatus === "success" && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-green-900">Message sent successfully!</p>
                                <p className="text-sm text-green-700 mt-1">We'll get back to you within 24 hours.</p>
                            </div>
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium text-red-900">Something went wrong</p>
                                <p className="text-sm text-red-700 mt-1">Please try again or contact us via WhatsApp.</p>
                            </div>
                        </div>
                    )}

                    <form action="https://formspree.io/f/tembstan.ly@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="role">I am a...</Label>
                            <select
                                id="role"
                                name="role"
                                disabled={isSubmitting}
                                className="flex h-11 w-full rounded-md border border-nautilus-shell-light/30 bg-nautilus-cream-dark/50 px-4 py-3 text-base text-nautilus-slate transition-all focus-visible:outline-none focus-visible:border-nautilus-shell-primary focus-visible:ring-2 focus-visible:ring-nautilus-shell-primary/20 md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
                                disabled={isSubmitting}
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full font-serif text-lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-nautilus-divider">
                        <p className="text-center text-sm text-nautilus-slate/60 mb-4">
                            Or reach out directly via:
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <Button asChild variant="outline" className="w-full md:w-auto">
                                <a href={COMPANY.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    WhatsApp: {COMPANY.contact.whatsapp}
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="w-full md:w-auto">
                                <a href={`mailto:${COMPANY.contact.email}`}>
                                    <Mail className="w-4 h-4 mr-2" />
                                    {COMPANY.contact.email}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
