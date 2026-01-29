'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BackgroundBeams() {
    const [particles, setParticles] = useState<{ top: string; left: string; duration: number; delay: number; size: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 10 + 20,
            delay: Math.random() * 10,
            size: Math.random() * 2 + 1
        }));
        setParticles(newParticles);
    }, []);
    return (
        <div className="fixed inset-0 w-full h-full bg-neutral-950 overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-950/90 mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)" />

            {/* Moving gradients */}
            <motion.div
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[40%] -left-[20%] w-[70vw] h-[70vw] rounded-full bg-purple-900/40 blur-[120px]"
            />

            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-900/40 blur-[100px]"
            />

            {/* Simple Grid Pattern - Subtle & Professional */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute -bottom-[40%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-indigo-900/40 blur-[150px]"
            />

            {/* Grid Pattern */}
            {/* Grid Pattern Removed for Smoothness */}

            {/* Radial overlay to dim the center for better text readability */}
            {/* Floating Particles - Stardust Effect */}
            <div className="absolute inset-0 z-0">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20"
                        style={{
                            top: p.top,
                            left: p.left,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.4, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: p.delay
                        }}
                    />
                ))}
            </div>

            {/* Radial overlay to dim the center for better text readability */}
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}
