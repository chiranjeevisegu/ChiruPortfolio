'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('about');

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'publications', label: 'Research' },
        { id: 'achievements', label: 'Awards' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 pointer-events-none"
        >
            <div className="pointer-events-auto bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-4 md:gap-8 shadow-2xl overflow-x-auto no-scrollbar max-w-[95vw] mx-auto">
                {navItems.map((item) => (
                    <motion.button
                        key={item.id}
                        onClick={() => {
                            setActiveSection(item.id);
                            handleScroll(item.id);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap px-3 py-1.5 rounded-full 
                            ${item.id === 'contact'
                                ? 'bg-white text-black hover:bg-white/90 font-bold ml-2'
                                : activeSection === item.id
                                    ? 'text-white'
                                    : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {item.label}
                        {activeSection === item.id && item.id !== 'contact' && (
                            <motion.span
                                layoutId="active-nav"
                                className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </motion.button>
                ))}

                {/* Resume Button - Critical for Recruiters */}
                <motion.a
                    href="https://drive.google.com/uc?export=download&id=1ktw6_V143aNflzqt5HZkth74a30-DZG2"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white/10 text-white hover:bg-white hover:text-black font-medium text-xs md:text-sm px-4 py-1.5 rounded-full transition-colors ml-2 border border-white/10"
                    title="Download Resume"
                >
                    <FileText size={16} /> <span className="hidden md:inline">Resume</span>
                </motion.a>
            </div>
        </motion.nav>
    );
}
