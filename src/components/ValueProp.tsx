"use client";

import { REASONS_TO_CHOOSE } from "@/app/constants";
import { CheckCircle2 } from "lucide-react";

export default function ValueProp() {
    return (
        <section className="py-24 px-6 bg-nautilus-slate text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                            A Generalist in a <br />
                            <span className="text-nautilus-shell-light italic">Specialist World.</span>
                        </h2>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                            Specialization is powerful, but it fragments knowledge. By connecting chambers of expertise—pharmacy, education, research, and analysis—we offer a level of rigorous integration that single-discipline specialists cannot match.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {REASONS_TO_CHOOSE.map((reason) => (
                            <div key={reason.title} className="flex items-start group">
                                <CheckCircle2 className="w-6 h-6 text-nautilus-shell-light mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <h3 className="text-xl font-serif text-white mb-1">
                                        {reason.title}
                                    </h3>
                                    <p className="text-white/70 text-sm font-light">
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
