'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function CertificationsSection({ id }: { id?: string }) {
    const certs = [
        { name: "OCI Generative AI Professional Certificate", issuer: "Oracle", date: "2025" },
        { name: "OCI AI Foundations Associate", issuer: "Oracle", date: "2025" },
        { name: "Power BI Job Simulation", issuer: "Forage", date: "2024" },
        { name: "Quantum Enigmas", issuer: "IBM Skill Build", date: "2024" },
        { name: "Artificial Intelligence Primer", issuer: "Infosys Springboard", date: "2024" },
        { name: "Remote Sensing & Image Analysis", issuer: "IIRS & ISRO", date: "2023" }
    ];

    return (
        <section id={id} className="min-h-screen py-20 px-4 md:px-20 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl w-full"
            >
                <div className="flex flex-col items-center mb-16">
                    <span className="text-sm uppercase tracking-widest text-secondary mb-2">Validation</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Certifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="flex items-center gap-4 p-6 bg-card border border-white/5 rounded-2xl hover:bg-white/10 hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                        >
                            <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white leading-tight mb-1">{cert.name}</h3>
                                <p className="text-sm text-secondary">{cert.issuer} • {cert.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
