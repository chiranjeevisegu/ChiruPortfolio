'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Medal, Zap, Sparkles, Award } from 'lucide-react';

export default function AchievementsSection({ id }: { id?: string }) {
    const achievements = [
        {
            title: "Track Winner – HackVyuha'25",
            subtitle: "Emerging Tech | Team Aqua Ring",
            desc: "Awarded 1st place in the Emerging Tech track at SRM University AP's flagship 24-hour hackathon, HackVyuha'25, among 5 competitive categories.",
            icon: <Trophy size={32} />,
            color: "text-yellow-400",
            border: "hover:border-yellow-400/50",
            bg: "hover:bg-yellow-400/10",
            badge: "WINNER"
        },
        {
            title: "PromptCraft Challenge",
            subtitle: "Text GenAI - 1st Place",
            desc: "Won 1st Place by delivering precise and well-structured AI-generated text outputs aligned with the given problem constraints.",
            icon: <Sparkles size={32} />,
            color: "text-purple-400",
            border: "hover:border-purple-400/50",
            bg: "hover:bg-purple-400/10",
            badge: "WINNER"
        },
        {
            title: "Multimedia Student Club",
            subtitle: "Drisya - Organizer",
            desc: "Organized and coordinated major university events including Shivaratri, Talent Search, Janmashtami, and Fit India campaigns.",
            icon: <Users size={32} />,
            color: "text-blue-400",
            border: "hover:border-blue-400/50",
            bg: "hover:bg-blue-400/10",
            badge: "FOUNDER"
        },
        {
            title: "Campus Football Team",
            subtitle: "Udgam & Mahotsav Tournaments",
            desc: "Participated in competitive football tournaments, showcasing teamwork, resilience, and leadership skills on the field.",
            icon: <Medal size={32} />,
            color: "text-green-400",
            border: "hover:border-green-400/50",
            bg: "hover:bg-green-400/10",
            badge: "CAPTAIN"
        }
    ];

    return (
        <section id={id} className="min-h-screen py-20 px-4 md:px-20 relative flex flex-col justify-center">
            {/* Background Decoration */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto w-full"
            >
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-sm uppercase tracking-widest text-secondary mb-2">Beyond/Code</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3">
                        <Award size={36} className="text-primary" /> Honors & Activities
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`p-8 bg-card/50 backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col gap-4 transition-all duration-300 group cursor-default ${item.border} ${item.bg}`}
                        >
                            <div className="flex justify-between items-start">
                                <div className={`p-3 rounded-2xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <span className={`text-xs font-mono px-3 py-1 rounded-full border border-white/5 bg-black/20 text-secondary group-hover:text-white transition-colors`}>
                                    {item.badge}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className={`text-sm font-medium ${item.color} opacity-80 mb-4`}>{item.subtitle}</p>
                                <p className="text-secondary/80 leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
