'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';

export default function PublicationsSection({ id }: { id?: string }) {
    return (
        <section id={id} className="min-h-screen py-20 px-4 md:px-20 relative flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto w-full"
            >
                <div className="flex flex-col items-center mb-16">
                    <span className="text-sm uppercase tracking-widest text-secondary mb-2">Research & Impact</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4">
                        <BookOpen size={40} className="text-primary" /> Publications
                    </h2>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border border-white/5 p-8 md:p-12 rounded-3xl hover:bg-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                >
                    {/* Background Gradient Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10 group-hover:bg-primary/20 transition-all duration-500" />

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                                    IEEE Xplore
                                </span>
                                <span className="text-secondary/60 text-sm font-mono">May 2025</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                                Deep Learning-Based Prediction of Household Energy Consumption: An LSTM Approach with High Precision
                            </h3>

                            <p className="text-lg text-secondary/80 leading-relaxed mb-8">
                                <span className="text-white font-medium italic">"Energy efficiency starts with accurate prediction."</span>
                                <br /><br />
                                This research introduces a novel Long Short-Term Memory (LSTM) framework tailored for household energy forecasting. By capturing complex temporal dependencies in power usage data, our model achieves unprecedented precision, paving the way for smarter grids and sustainable energy management.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                {[
                                    "LSTM Networks",
                                    "Time-Series Forecasting",
                                    "Smart Grid",
                                    "Energy Efficiency"
                                ].map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-secondary hover:text-white hover:bg-white/10 transition-colors cursor-default border border-white/5">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="https://doi.org/10.1109/AIDE54228.2025.10987497"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                            >
                                Read Paper <ExternalLink size={18} />
                            </a>
                        </div>

                        {/* Visual Accent / Icon */}
                        <div className="hidden md:flex flex-col items-center justify-center w-32 h-32 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors">
                            <Quote size={48} className="text-primary/50 group-hover:text-primary transition-colors" />
                            <span className="text-xs text-secondary/50 mt-2 font-mono">DOI Verified</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
