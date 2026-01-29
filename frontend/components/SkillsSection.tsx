'use client';

import { motion } from 'framer-motion';

export default function SkillsSection({ id }: { id?: string }) {
    const skills = [
        { category: "Programming", items: ["Python", "C", "Java", "R"] },
        { category: "Databases", items: ["MySQL", "Relational Databases"] },
        { category: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning", "Transformers", "LLMs (GPT, LLaMA)", "RAG", "Prompt Engineering", "Agentic AI", "Prototypical Networks", "U-Net", "CLIP"] },
        { category: "Medical & Scientific AI", items: ["Medical Image Analysis", "Time-Series Forecasting (LSTM)", "Multi-Modal Learning"] },
        { category: "Backend & APIs", items: ["Flask", "REST APIs", "Flask-SocketIO"] },
        { category: "Web & 3D Technologies", items: ["HTML", "CSS", "JavaScript", "React.js", "Three.js"] },
        { category: "Computer Vision", items: ["OpenCV", "MediaPipe"] },
        { category: "Tools & Platforms", items: ["Jupyter Notebook", "VS Code", "Power BI", "Docker (Foundational)", "Git & GitHub", "Android Studio", "Cisco Packet Tracer"] },
        { category: "Soft Skills", items: ["Technical Communication", "Team Collaboration", "Leadership & Mentorship", "Problem Solving", "Research-Oriented Thinking"] }
    ];

    return (
        <section id={id} className="min-h-screen py-10 px-4 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full"
            >
                <div className="text-center mb-8">
                    <span className="text-xs uppercase tracking-widest text-secondary">Technical Arsenal</span>
                    <h2 className="text-3xl font-bold text-white mt-2">Skills & Expertise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.5 }}
                            className="bg-card/50 backdrop-blur-sm border border-white/5 p-5 rounded-xl hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide border-b border-white/5 pb-2">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/5 rounded-md text-xs text-secondary hover:bg-primary/20 hover:text-white hover:border-primary/30 transition-colors cursor-default border border-white/5">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
