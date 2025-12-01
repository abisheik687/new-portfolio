"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const skills = {
    "Programming": ["Python", "C", "Java"],
    "Web Development": ["HTML5", "CSS", "Bootstrap", "React.js", "Next.js", "Tailwind"],
    "Cloud & Tools": ["AWS", "Google Cloud", "Git/GitHub", "Docker", "WordPress"],
    "AI & Productivity": ["ChatGPT", "Gemini", "Perplexity", "Manus AI"]
};

const softSkills = [
    "Problem Solving & Analytical Thinking",
    "Collaboration & Teamwork",
    "Time Management & Prioritization",
    "Adaptability and Continuous Learning",
    "Effective Communication"
];

export default function AboutPage() {
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
                    ABOUT ME
                </motion.h1>

                <div className="grid md:grid-cols-[1.5fr_1fr] gap-16">
                    {/* Left Column: Bio & Skills */}
                    <div className="space-y-16">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-primary">Bio</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I am an Information Technology student and developer based in Villupuram, India.
                                With a passion for building intelligent web solutions, I specialize in combining
                                modern web technologies with AI integration. My journey involves hands-on experience
                                in full-stack development, chatbot creation, and cloud computing.
                            </p>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold mb-8 text-primary">Technical Skills</h2>
                            <div className="grid gap-8">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category}>
                                        <h3 className="text-sm font-mono uppercase tracking-widest text-white/60 mb-3">{category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right Column: Soft Skills & Connect */}
                    <div className="space-y-12">
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-secondary/30 p-8 rounded-2xl border border-white/5"
                        >
                            <h2 className="text-xl font-bold mb-6 text-accent">Soft Skills</h2>
                            <ul className="space-y-4">
                                {softSkills.map((skill, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>
                </div>
            </div>
        </main>
    );
}
