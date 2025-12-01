"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
    "Oracle Cloud Infrastructure Foundations / AI Associate",
    "ISRO Geospatial Analysis Using Real-World Data – Indian Space Research Organisation",
    "HTML5 Application Development - Pearson VUE, Certiport",
    "TCS iON Career Edge - Young Professional by TCS iON",
    "AWS Cloud Practitioner Essentials - Certification and Training by AWS",
    "Palo Alto Networks Cybersecurity Foundation by Coursera",
    "FullStack and IOT Development - Mailam Engineering College & VEI Technologies",
    "IOT Workshop, Acharia arts and science college",
    "Flutter App Development, Techobytes"
];

const achievements = [
    "NXTware X OpenAI hackathon state level finalist",
    "Top 12,000 in TCS CodeVita Round 1 (out of 6 lakh participants)",
    "Completed 11 ICT Learnathon Courses covering AI, Cloud and emerging Technologies",
    "Achieved Ultimate Champion Milestone in Google Cloud Arcade",
    "Participated in ISRO BIH Hackathon 2025 (Geospatial Analysis)",
    "Participated in Smart India Hackathon(2024) & Xylem Hackathon(2023)",
    "Attended the Ethical Tech Submit by Shaastra 2024 at IIT Madras",
    "Member of Google Developer Student Club (GDSC)"
];

export default function CertificationsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-hidden pt-32 pb-24 px-6 md:px-12">
            <ParallaxBackground />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-display font-bold mb-16 tracking-tighter"
                >
                    CERTIFICATIONS
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-primary">
                            <Award className="w-6 h-6" />
                            Certifications & Training
                        </h2>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors flex gap-4 items-start">
                                    <span className="text-primary/50 font-mono text-sm mt-1">0{index + 1}</span>
                                    <p className="text-white/90 leading-relaxed">{cert}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent">
                            <CheckCircle className="w-6 h-6" />
                            Achievements & Participation
                        </h2>
                        <div className="space-y-4">
                            {achievements.map((item, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors flex gap-4 items-start">
                                    <span className="text-accent/50 font-mono text-sm mt-1">0{index + 1}</span>
                                    <p className="text-white/90 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
