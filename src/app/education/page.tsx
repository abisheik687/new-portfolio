"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const education = [
    {
        school: "Mailam Engineering College, Anna University",
        degree: "Bachelor of Technology in Information Technology",
        score: "GPA: 8.30",
        location: "Villupuram, India",
        period: "Dec 2022 – Present"
    },
    {
        school: "Amalorpavam Hr Sec School",
        degree: "SSLC & HSC in TamilNadu State Board",
        score: "Percentage: 80.2% (SSLC) & 74.3% (HSC)",
        location: "Puducherry, India",
        period: "Aug 2008 – May 2022"
    }
];

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-hidden pt-32 pb-24 px-6 md:px-12">
            <ParallaxBackground />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-display font-bold mb-16 tracking-tighter"
                >
                    EDUCATION
                </motion.h1>

                <div className="grid gap-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors duration-500 backdrop-blur-sm"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                                    {edu.school}
                                </h2>
                                <span className="font-mono text-sm text-muted-foreground mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                                    {edu.period}
                                </span>
                            </div>

                            <h3 className="text-xl font-display text-white mb-2">
                                {edu.degree}
                            </h3>

                            <div className="flex flex-col md:flex-row gap-4 text-muted-foreground font-mono text-sm mt-4">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    {edu.score}
                                </span>
                                <span className="hidden md:block text-white/20">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                    {edu.location}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
