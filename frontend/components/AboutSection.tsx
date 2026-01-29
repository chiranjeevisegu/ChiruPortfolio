'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function AboutSection({ id, isFlipped, onFlip }: { id?: string; isFlipped: boolean; onFlip: () => void }) {
    return (
        <section id={id} className="min-h-screen py-20 flex flex-col items-center justify-center relative px-4 md:px-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center"
            >
                {/* LEFT: Professional Calling Card with Flip */}
                {/* LEFT: Professional Calling Card with Flip & Stats */}
                <div className="md:col-span-5 flex flex-col items-center md:items-end gap-8 perspective-1000">
                    <div className="relative group w-full max-w-[320px] h-[480px] cursor-pointer" onClick={onFlip}>
                        {/* Background Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>

                        <motion.div
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                            className="w-full h-full relative preserve-3d"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* FRONT FACE: Professional Identity */}
                            <div className="absolute inset-0 backface-hidden bg-black border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl justify-between">
                                <div className="flex flex-col items-center w-full">
                                    {/* Profile Image */}
                                    <div className="w-24 h-24 rounded-full border-2 border-white/10 mb-6 overflow-hidden">
                                        <img
                                            src="/profile.jpg"
                                            alt="Chiranjeevi"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h2 className="text-3xl font-bold text-white mb-2">Chiranjeevi</h2>
                                    <p className="text-primary font-medium tracking-wide text-sm uppercase mb-6">AI & ML Engineer</p>

                                    <div className="w-full h-px bg-white/5 mb-6" />

                                    <div className="space-y-3 w-full text-left mb-8">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-secondary">Location</span>
                                            <span className="text-white">Gudivada, India</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-secondary">Email</span>
                                            <a href="mailto:chiranjevisegu1@gmail.com" className="text-white hover:text-primary transition-colors">chiranjevisegu1@gmail.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-center w-full">
                                    <a href="https://github.com/chiranjeevisegu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors hover:scale-110 duration-300 group" onClick={(e) => e.stopPropagation()}>
                                        <Github size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/venkatachiranjeevi-segu-84290025b/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors hover:scale-110 duration-300 group" onClick={(e) => e.stopPropagation()}>
                                        <Linkedin size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                    </a>
                                    <a href="https://www.instagram.com/chiranjeevi_segu/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-pink-500 transition-colors hover:scale-110 duration-300 group" onClick={(e) => e.stopPropagation()}>
                                        <Instagram size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                                    </a>
                                    <a href="mailto:chiranjevisegu1@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-red-500 transition-colors hover:scale-110 duration-300 group" onClick={(e) => e.stopPropagation()}>
                                        <Mail size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                    </a>
                                </div>
                                <div className="text-xs text-secondary/50 mt-4">(Tap to Flip for Recruiter Info)</div>
                            </div>

                            {/* BACK FACE: Recruiter Magnet */}
                            <div
                                className="absolute inset-0 backface-hidden bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl justify-between rotate-y-180"
                                style={{ transform: "rotateY(180deg)" }}
                            >
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-white mb-6">Why Hire Me?</h3>

                                    <div className="space-y-6 text-left">
                                        <div className="bg-white/5 p-4 rounded-lg border-l-2 border-primary">
                                            <h4 className="text-white font-bold text-sm mb-1">Fast Learner</h4>
                                            <p className="text-xs text-secondary">Mastered Generative AI & RAG systems in under 3 months.</p>
                                        </div>

                                        <div className="bg-white/5 p-4 rounded-lg border-l-2 border-purple-500">
                                            <h4 className="text-white font-bold text-sm mb-1">Innovator</h4>
                                            <p className="text-xs text-secondary">Emergin Tech Track Winner - HackkVyuha'25 &  Winner - PromptCraft'25</p>
                                        </div>

                                        <div className="bg-white/5 p-4 rounded-lg border-l-2 border-green-500">
                                            <h4 className="text-white font-bold text-sm mb-1">Leader</h4>
                                            <p className="text-xs text-secondary">Led 50+ students in Drisya Multimedia Club & Captian of Campus Football Team.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full mt-6">
                                    <p className="text-[10px] text-secondary">Open to Relocation • Immediate Joiner</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* At a Glance Card */}
                    <div className="w-full max-w-[320px] bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/5 hover:border-primary/30 transition-all duration-300">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 text-center border-b border-white/5 pb-2">At a Glance</h4>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                                <span className="block text-xl font-bold text-white">10+</span>
                                <span className="text-[10px] text-secondary uppercase">Projects</span>
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-white">1+</span>
                                <span className="text-[10px] text-secondary uppercase">Papers</span>
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-white">2</span>
                                <span className="text-[10px] text-secondary uppercase">Hackathon Winner</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: About Content (Aside) */}
                {/* RIGHT: About Content (Aside) */}
                <div className="md:col-span-7 space-y-10 text-left md:pl-8">
                    {/* About Me */}
                    <div className="space-y-4">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest">About Me</span>
                        <p className="text-secondary/90 text-lg leading-relaxed">
                            Specialize in <strong className="text-white">Artificial Intelligence</strong> at Amrita Vishwa Vidyapeetham. I explore how intelligent systems understand images, language, and human interaction.
                        </p>
                    </div>

                    {/* Focus Areas */}
                    <div className="space-y-4">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest">Focus Areas</span>
                        <p className="text-secondary/80 mb-4">I build and experiment with AI systems across:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {["Deep Learning & Machine Learning", "Agentic AI & RAG Systems", "Computer Vision & Medical Imaging", "Multimodal AI", "Research-Oriented AI", "AI-powered Web & VR Apps"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-white/80 bg-white/5 px-3 py-2 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                                    <span className="text-primary">▹</span> {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-secondary/80 text-sm mt-4 italic border-l-2 border-primary/30 pl-4">
                            "From radiology image captioning to VR healthcare visualization."
                        </p>
                    </div>

                    {/* Philosophy */}
                    <div className="space-y-4">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest">Philosophy</span>
                        <p className="text-secondary/90 text-lg leading-relaxed">
                            I learn by building. I break complex problems into simple components, validate ideas through experiments, and refine solutions until they run effectively.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
