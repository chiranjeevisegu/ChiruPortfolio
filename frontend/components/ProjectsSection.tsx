'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function ProjectsSection({ id }: { id?: string }) {
    const projects = [
        {
            title: "VR Health Viewer",
            desc: "Full-stack web app for immersive 3D visualization of medical brain models (.nii) with gesture-based interaction using MediaPipe and Flask.",
            tags: ["Next.js", "MediaPipe", "Flask", "3D"],
            github: "https://github.com/chiranjeevisegu/AquaRing",
        },
        {
            title: "Multi-Modal Few-Shot Anomaly Detection",
            desc: "Designed a few-shot learning framework using Prototypical Networks, U-Net, and CLIP for detecting anomalies in medical images, achieving high ROC-AUC performance with minimal training samples.",
            tags: ["Few-Shot Learning", "Multi-Modal AI", "Medical Imaging", "Anomaly Detection"],
            github: "https://github.com/chiranjeevisegu/Multi-Modal-Few-Shot-Anomaly-Detection",
        },
        {
            title: "Steganography System",
            desc: "Dual-mode system for embedding encrypted text/files in images and videos using LSB and DWT/DCT techniques.",
            tags: ["Security", "Python", "Image Processing", "Cryptography"],
            github: "https://github.com/chiranjeevisegu/Steganography",
        },
        {
            title: "Power BI Data Analytics Dashboard",
            desc: "Interactive dashboards visualizing sales performance and customer segmentation. Modeled raw data using Power Query & DAX to create actionable insights with KPIs and trendlines.",
            tags: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
            github: "https://github.com/chiranjeevisegu/POWER-BI",
        },
    ];

    return (
        <section id={id} className="min-h-screen py-20 px-4 md:px-10 flex flex-col items-center justify-center bg-black/50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full"
            >
                <div className="flex flex-col items-center mb-16">
                    <span className="text-sm uppercase tracking-widest text-secondary mb-2">Builds</span>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="h-full"
                        >
                            <SpotlightCard className="h-full group bg-card shadow-lg hover:shadow-primary/10">
                                {/* Image Placeholder - making it distinct */}
                                {/* Image Placeholder - making it distinct */}
                                <div className={`h-56 bg-gradient-to-br ${idx % 3 === 0 ? "from-purple-500/20 to-blue-500/5" :
                                    idx % 3 === 1 ? "from-blue-500/20 to-green-500/5" :
                                        "from-green-500/20 to-yellow-500/5"
                                    } group-hover:scale-105 transition-transform duration-500 flex items-center justify-center border-b border-white/5 relative`}>
                                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
                                    <span className="text-5xl font-bold opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-white/50">
                                        {project.title.charAt(0)}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-secondary text-sm mb-6 line-clamp-3">{project.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <a href={project.github} className="flex items-center gap-2 text-xs text-secondary hover:text-white transition-colors">
                                            <Github size={14} /> Code
                                        </a>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
