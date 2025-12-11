"use client";

import { SERVICES } from "@/app/constants";
import { motion } from "framer-motion";

export default function ServicesGrid() {
    return (
        <section className="py-24 px-6 bg-nautilus-cream relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-nautilus-deep mb-4">
                        Integrated Expertise
                    </h2>
                    <div className="w-24 h-1 bg-nautilus-gold mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={service.target}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-nautilus-teal/20 hover:border-nautilus-gold transition-colors duration-500 group"
                        >
                            <h3 className="text-2xl font-serif text-nautilus-teal mb-6 group-hover:text-nautilus-deep transition-colors">
                                For {service.target}
                            </h3>
                            <blockquote className="text-lg italic text-nautilus-deep/70 mb-8 border-l-2 border-nautilus-gold pl-4 font-serif">
                                "{service.quote}"
                            </blockquote>
                            <ul className="space-y-3">
                                {service.items.map((item) => (
                                    <li key={item} className="flex items-center text-nautilus-deep/80 font-medium">
                                        <span className="w-1.5 h-1.5 bg-nautilus-teal rounded-full mr-3 text-nautilus-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
