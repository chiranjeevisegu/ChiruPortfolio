'use client';

import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-black/80 border-t border-white/10 py-12 px-4 md:px-20 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">

                {/* LEFT: Brand & Bio */}
                <div className="text-center md:text-left md:max-w-sm">
                    <h3
                        className="text-2xl font-bold text-white tracking-tight mb-2 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Chiranjeevi<span className="text-primary">.</span>
                    </h3>
                    <p className="text-secondary/60 text-xs leading-relaxed">
                        Building intelligent digital experiences with AI & ML
                        <br className="hidden md:block" /> that bridges the gap between data and human interaction.
                    </p>
                </div>

                {/* MIDDLE: Connect (Socials) */}
                <div className="flex gap-6 items-center">
                    <a href="https://github.com/chiranjeevisegu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 group">
                        <Github size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    </a>
                    <a href="https://www.linkedin.com/in/venkatachiranjeevi-segu-84290025b/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 hover:scale-110 transition-all duration-300 group">
                        <Linkedin size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    </a>
                    <a href="https://www.instagram.com/chiranjeevi_segu/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-pink-500 hover:scale-110 transition-all duration-300 group">
                        <Instagram size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                    </a>
                    <a href="mailto:chiranjevisegu1@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-red-400 hover:scale-110 transition-all duration-300 group">
                        <Mail size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
                    </a>
                </div>

                {/* RIGHT: Copyright */}
                <div className="text-center md:text-right">
                    <p className="text-xs text-secondary/40 font-mono">
                        &copy; {new Date().getFullYear()} Chiranjeevi.
                        <br />
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
