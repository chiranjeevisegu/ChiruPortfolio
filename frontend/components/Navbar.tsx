'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('about');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            { rootMargin: '-40% 0px -40% 0px' }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [navItems]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 flex justify-end md:justify-center pt-4 pointer-events-none px-4"
        >
            <motion.div
                layout
                className="pointer-events-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-[2rem] px-6 py-3 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 shadow-2xl relative max-w-[90vw] md:max-w-max mx-auto md:mx-0"
            >
                {/* Mobile Header (Label + Toggle) */}
                <div className="flex md:hidden items-center justify-between w-full min-w-[140px]">
                    <span className="text-white font-bold text-sm tracking-widest uppercase text-primary ml-2">
                        {navItems.find(n => n.id === activeSection)?.label || "Menu"}
                    </span>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 bg-white/5 rounded-full text-white hover:bg-white/10 active:scale-95 transition-all"
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>

                {/* Nav Items List */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-2 md:gap-1 w-full md:w-auto`}>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-1 w-full md:w-auto">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    handleScroll(item.id);
                                    setIsMenuOpen(false); // Close on click
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative text-sm font-medium transition-all duration-300 whitespace-nowrap px-4 py-2 md:px-3 md:py-1.5 rounded-full w-full md:w-auto text-left md:text-center
                                    ${item.id === 'contact'
                                        ? 'bg-white text-black hover:bg-white/90 font-bold md:ml-2'
                                        : activeSection === item.id
                                            ? 'text-white bg-white/10 md:bg-transparent'
                                            : 'text-white/50 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.id && item.id !== 'contact' && (
                                    <motion.span
                                        layoutId="active-nav"
                                        className="absolute bottom-0 md:-bottom-1 left-0 w-[2px] h-full md:w-full md:h-[2px] bg-primary rounded-full md:block hidden"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Resume Button */}
                    <motion.a
                        href="https://drive.google.com/uc?export=download&id=1ktw6_V143aNflzqt5HZkth74a30-DZG2"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white hover:text-black font-medium text-sm px-4 py-2 md:py-1.5 rounded-full transition-colors border border-white/10 w-full md:w-auto mt-2 md:mt-0 md:ml-2"
                        title="Download Resume"
                    >
                        <FileText size={16} /> <span>Resume</span>
                    </motion.a>
                </div>
            </motion.div>
        </motion.nav>
    );
}
