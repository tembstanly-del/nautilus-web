"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/app/constants";

export default function HeroSection() {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {/* Abstract Golden Ratio / Nautilus Spiral */}
                <svg
                    viewBox="0 0 1000 1000"
                    className="w-full h-full text-nautilus-shell-primary animate-[spin_120s_linear_infinite]"
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
                        d="M500,500 m-250,0 a250,250 0 1,1 500,0 a250,250 0 1,1 -500,0"
                        className="opacity-40"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        d="M500,500 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0"
                        className="opacity-60"
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <h2 className="text-nautilus-shell-deep font-serif text-xl md:text-2xl tracking-widest uppercase mb-4">
                        {COMPANY.latinTagline}
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-nautilus-slate leading-tight">
                        Structure. Wisdom. <br />
                        <span className="italic text-nautilus-shell-primary">Synthesis.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-nautilus-slate/70 max-w-2xl mx-auto font-sans font-light leading-relaxed"
                >
                    {COMPANY.founder} presents {COMPANY.name}.
                    <br />
                    <span className="block mt-4 text-base md:text-lg">
                        We integrate research, analysis, and writing for those who need rigorous thinking across disciplines.
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <a href="#contact" className="inline-block bg-nautilus-shell-primary text-white px-8 py-3 rounded-full hover:bg-nautilus-shell-deep transition-colors duration-300 font-medium tracking-wide shadow-lg hover:shadow-xl">
                        Begin the Conversation
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
