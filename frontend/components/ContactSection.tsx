'use client';

import { motion } from 'framer-motion';

export default function ContactSection({ id }: { id?: string }) {
    return (
        <section id={id} className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-gradient-to-t from-black to-transparent">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-2xl"
            >
                <span className="text-sm uppercase tracking-widest text-secondary mb-4 block">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build the Future?</h2>
                <p className="text-secondary mb-12">
                    Whether you have a question, a project idea, or just want to verify if I'm a real person (and not an AI myself), feel free to reach out.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:chiranjevisegu1@gmail.com"
                        className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Email Me
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/venkatachiranjeevi-segu-84290025b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
                    >
                        LinkedIn
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/chiranjeevisegu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
                    >
                        GitHub
                    </motion.a>
                </div>

                {/* Footer removed to use global Footer component */}
            </motion.div>
        </section>
    );
}
