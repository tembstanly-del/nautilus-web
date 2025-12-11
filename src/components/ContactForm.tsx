"use client";

import { COMPANY } from "@/app/constants";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
    return (
        <section id="contact" className="py-24 px-6 bg-nautilus-sand">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-nautilus-deep mb-4">
                        Start the Conversation
                    </h2>
                    <p className="text-nautilus-teal/70 font-light">
                        Whether for academic guidance or organizational strategy.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 shadow-sm border border-nautilus-deep/5 rounded-sm">
                    <form action="https://formspree.io/f/tembstan.ly@gmail.com" method="POST" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-nautilus-deep uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-nautilus-sand/50 border-b border-nautilus-deep/20 px-4 py-3 focus:outline-none focus:border-nautilus-gold transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-nautilus-deep uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-nautilus-sand/50 border-b border-nautilus-deep/20 px-4 py-3 focus:outline-none focus:border-nautilus-gold transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="role" className="text-sm font-medium text-nautilus-deep uppercase tracking-wider">I am a...</label>
                            <select name="role" className="w-full bg-nautilus-sand/50 border-b border-nautilus-deep/20 px-4 py-3 focus:outline-none focus:border-nautilus-gold transition-colors text-nautilus-deep/80">
                                <option value="student">Student needing research help</option>
                                <option value="organization">Organization needing consultancy</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-nautilus-deep uppercase tracking-wider">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="w-full bg-nautilus-sand/50 border-b border-nautilus-deep/20 px-4 py-3 focus:outline-none focus:border-nautilus-gold transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-nautilus-deep text-nautilus-sand font-serif text-lg py-4 hover:bg-nautilus-teal transition-colors duration-300">
                            Send Message
                        </button>
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
                </div>
            </div>
        </section>
    );
}
