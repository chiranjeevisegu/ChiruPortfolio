'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Logo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="fixed top-6 left-6 z-50 flex flex-col items-center gap-1 cursor-pointer pointer-events-auto group"
            onClick={() => window.location.href = '/'}
        >
            {/* Avatar Container */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary/30 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:border-primary group-hover:bg-primary/20 transition-all duration-500 bg-black/50 backdrop-blur-sm">
                <Image
                    src="/assets/hero-image.png"
                    alt="SVC Avatar"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* SVC Text & Status */}
            <div className="flex items-center gap-1.5 mt-1 group cursor-help" title="Available for new roles">
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-secondary group-hover:text-white transition-colors font-mono">
                    SVC
                </span>
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
            </div>
        </motion.div>
    );
}
