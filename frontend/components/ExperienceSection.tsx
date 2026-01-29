'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SpotlightCard from './SpotlightCard';

export default function ExperienceSection({ id }: { id?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id={id} ref={containerRef} className="min-h-screen py-20 px-4 md:px-20 relative flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto w-full relative"
            >
                <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[2px] bg-white/10" />
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute left-0 md:left-4 top-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-blue-500 origin-top shadow-[0_0_10px_var(--primary)]"
                />

                <span className="block text-sm font-mono text-primary tracking-widest mb-12 uppercase ml-12 md:ml-20">Experience</span>

                <div className="space-y-16 ml-12 md:ml-20">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        {/* Dot on the line - centered on the timeline line */}
                        <div className="absolute -left-[55px] md:-left-[71px] top-2 w-4 h-4 rounded-full bg-black border-2 border-primary" />

                        {/* Card Content Wrapped in Spotlight */}
                        <SpotlightCard className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                            {/* Header: Role & Company */}
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                    Intern <span className="text-secondary/60">@</span> Infosys Springboard
                                </h3>
                                <span className="font-mono text-sm text-secondary/60 mt-1 md:mt-0">Nov 2024 - Jan 2025</span>
                            </div>

                            {/* Subheader: Project */}
                            <h4 className="text-xl text-primary font-medium mb-4">Radiology Image Captioning using Deep Learning</h4>

                            {/* Impact / Description */}
                            <div className="pl-4 border-l border-white/10 space-y-4">
                                <p className="text-white/80 italic">
                                    Mission-critical AI system for automated medical diagnostics.
                                </p>

                                {/* Clean Bullets - Reduced to 3 points */}
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3 text-secondary/80 text-base">
                                        <span className="text-primary mt-1.5 text-xs">●</span>
                                        <span>
                                            Engineered a <strong>CNN-LSTM architecture</strong> (VGG16 backbone) to generate clinically accurate captions for radiology images.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-secondary/80 text-base">
                                        <span className="text-primary mt-1.5 text-xs">●</span>
                                        <span>
                                            Trained on the massive <strong>ROCO dataset (65k+ images)</strong>, optimizing feature extraction for medical anomalies.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-secondary/80 text-base">
                                        <span className="text-primary mt-1.5 text-xs">●</span>
                                        <span>
                                            Achieved high BLEU scores, significantly reducing manual annotation time for radiologists.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
