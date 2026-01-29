'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

export default function EducationSection({ id }: { id?: string }) {
    const education = [
        {
            year: "2022 - Present",
            degree: "B.Tech in Computer Science and Engineering",
            specialization: "Artificial Intelligence",
            institution: "Amrita Vishwa Vidyapeetham, Amaravati",
            score: "CGPA: 8.67",
            desc: "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, DBMS, OS."
        },
        {
            year: "2020 - 2022",
            degree: "Class XII (Intermediate)",
            specialization: "MPC (Maths, Physics, Chemistry)",
            institution: "Sri Chaitanya Junior College, Vijayawada",
            score: "Percentage: 93.1%",
            desc: "Focus on core sciences and mathematics foundation."
        },
        {
            year: "2019 - 2020",
            degree: "Class X (Secondary School)",
            specialization: "General Education",
            institution: "Sri Chaitanya School, Gudivada",
            score: "Percentage: 99.8%",
            desc: "Academic excellence award winner."
        }
    ];

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
                className="max-w-5xl mx-auto w-full relative"
            >
                <div className="flex flex-col items-center mb-16">
                    <span className="text-sm uppercase tracking-widest text-secondary mb-2">Academic Background</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4">
                        <GraduationCap size={40} className="text-primary" /> Education
                    </h2>
                </div>

                <div className="relative ml-12 md:ml-20">
                    {/* Continuous Line */}
                    <div className="absolute -left-[48px] md:-left-[64px] top-[-20px] bottom-[-20px] w-[2px] bg-white/10 hidden md:block" />

                    {/* Moving Dot/Line Progress */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute -left-[48px] md:-left-[64px] top-[-20px] bottom-[-20px] w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    />

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative group"
                            >
                                {/* Timeline Dot for Item */}
                                <div className="absolute -left-[55px] md:-left-[71px] top-8 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-primary group-hover:bg-primary transition-all duration-300 z-10 hidden md:block" />

                                <div className="bg-card border border-white/5 p-8 rounded-2xl hover:bg-white/5 hover:border-primary/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{edu.degree}</h3>
                                            <p className="text-lg text-primary/80">{edu.specialization}</p>
                                            <p className="text-md text-secondary mt-1">{edu.institution}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-mono text-white mb-2">
                                                {edu.year}
                                            </span>
                                            <p className="font-bold text-primary">{edu.score}</p>
                                        </div>
                                    </div>
                                    <p className="text-secondary/70 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {edu.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
