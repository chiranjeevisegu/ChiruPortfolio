'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection({ onEnter }: { onEnter: () => void }) {
    const [isHovered, setIsHovered] = useState(false);

    // Typewriter State
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = ["Intelligent Systems", "AI Agents", "RAG Pipelines", "The Future"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            // Typing parameters
            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullText) {
                // Determine pause at end of word
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            {/* Main Content */}
            <div className="z-10 flex flex-col items-center justify-center text-center space-y-8 p-4">

                {/* User Image (Digital Twin Representation) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-64 h-64 md:w-96 md:h-96"
                >
                    {/* Glowing Ring Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-md animate-pulse" />

                    <Image
                        src="/assets/hero-image.png"
                        alt="Chiranjeevi - Digital Twin"
                        fill
                        className="object-contain drop-shadow-2xl grayscale contrast-125 brightness-110 hover:grayscale-0 transition-all duration-700"
                        priority
                    />
                </motion.div>

                {/* Text Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="space-y-4 max-w-2xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        I&#39;m Chiranjeevi
                    </h1>
                    <p className="text-lg md:text-xl text-secondary font-light min-h-[30px] flex items-center justify-center gap-1">
                        I build <span className="text-white font-medium">{text}</span><span className="animate-pulse text-primary">|</span>
                    </p>
                </motion.div>

                {/* Enter Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onClick={onEnter}
                    className="group relative px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Enter Portfolio
                        <motion.span
                            animate={{ x: isHovered ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            →
                        </motion.span>
                    </span>

                    {/* Button Glow */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all" />
                </motion.button>
            </div>

            {/* Gesture Instruction Guide - Removed */}
        </section>
    );
}
