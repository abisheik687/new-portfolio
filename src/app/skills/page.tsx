"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const skillCategories = [
    {
        title: "Core Programming Skills",
        skills: [
            { name: "Languages", details: "Java, Python, JavaScript, C++ (DSA & Competitive Coding)" },
            { name: "Problem Solving", details: "Data Structures & Algorithms, Competitive Programming (TCS CodeVita)" }
        ]
    },
    {
        title: "Web & Full-Stack Development",
        skills: [
            { name: "Frontend", details: "React, MERN Stack, Modern UI/UX, Animated/Interactive UIs" },
            { name: "Backend", details: "Node.js, Express, API Integrations, System Design" },
            { name: "Projects", details: "Advanced Portfolio Sites, Edutech Platforms (Codenest Academy)" }
        ]
    },
    {
        title: "AI, Cloud & DevOps",
        skills: [
            { name: "AI/ML", details: "Machine Learning Basics, Generative AI, RAG-based Chatbots" },
            { name: "Cloud", details: "AWS, GCP, Oracle Cloud (OCI), Associate-level Certifications" },
            { name: "DevOps", details: "CI/CD Concepts, Deployment (Vercel, Railway)" }
        ]
    },
    {
        title: "Tools & Professional",
        skills: [
            { name: "Tools", details: "VS Code, Git & GitHub" },
            { name: "Professional", details: "Resume Building, Oracle Certified Associate, Technical Writing" }
        ]
    }
];

const activeLearning = [
    {
        category: "AI & Machine Learning",
        items: [
            "Building AI-powered applications (ViralClip)",
            "Prompt Engineering & Master Prompt Design",
            "RAG Systems & AI Assistants",
            "Gemini + Genkit Workflows",
            "Generative AI for Video/Metadata",
            "Oracle Generative AI Certification",
            "Geospatial Analysis (ISRO Datasets)"
        ]
    },
    {
        category: "Full-Stack Development",
        items: [
            "Next.js (App Router, SSR/ISR)",
            "Tailwind CSS & Advanced Animations",
            "ShadCN & Custom UI Systems",
            "Supabase (Auth, DB, Edge Functions)",
            "API Design & Serverless Functions",
            "Real-time Features"
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            "Oracle Cloud Infrastructure (OCI)",
            "Modern Deployment Workflows",
            "AI & Cloud Integrations"
        ]
    },
    {
        category: "Software Engineering",
        items: [
            "Unity Fundamentals",
            "Data Structures & Algorithms",
            "Version Control & Project Management",
            "Automated Systems & Pipelines"
        ]
    },
    {
        category: "Design & UX",
        items: [
            "UI/UX Principles",
            "Advanced Animated Interfaces",
            "Visual Brand Systems (Typography, Color Theory)"
        ]
    }
];

const proficiencies = [
    {
        category: "Software Development",
        items: [
            "JavaScript & TypeScript",
            "React Fundamentals",
            "Next.js Patterns",
            "Tailwind CSS",
            "REST & AI API Integrations"
        ]
    },
    {
        category: "AI Product Building",
        items: [
            "End-to-End AI App Design",
            "Architectural Planning",
            "Workflow Automation"
        ]
    },
    {
        category: "Problem Solving",
        items: [
            "Top 12,000 in TCS CodeVita Round 1",
            "Strong Logical & Algorithmic Thinking"
        ]
    },
    {
        category: "Communication",
        items: [
            "Technical Specifications",
            "Feature Descriptions",
            "Prompt Engineering Documentation"
        ]
    },
    {
        category: "Internship Experience",
        items: [
            "Research & Analysis",
            "Team Collaboration",
            "Technical Implementation",
            "Real-world Problem Solving"
        ]
    }
];

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-hidden pt-32 pb-24 px-6 md:px-12">
            <ParallaxBackground />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.9, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-display font-bold mb-16 tracking-tighter"
                >
                    SKILLS
                </motion.h1>

                {/* Core Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="p-8 border border-white/10 bg-black/20 backdrop-blur-sm hover:border-primary/50 transition-colors duration-500 group"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors">
                                {category.title}
                            </h2>
                            <div className="space-y-4">
                                {category.skills.map((skill, i) => (
                                    <div key={i}>
                                        <h3 className="text-lg font-medium text-white/90">{skill.name}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {skill.details}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Active Learning Section */}
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-primary"></span>
                        ACTIVELY DEVELOPING
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeLearning.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="p-6 border-l-2 border-white/10 hover:border-primary bg-gradient-to-br from-white/5 to-transparent transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold mb-4 text-white/90">{area.category}</h3>
                                <ul className="space-y-2">
                                    {area.items.map((item, i) => (
                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 bg-primary/70 rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Proficiencies Section */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center gap-4"
                    >
                        <span className="w-12 h-1 bg-white"></span>
                        PROFICIENCIES
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {proficiencies.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                            >
                                <h3 className="text-lg font-bold mb-4 text-primary tracking-wide uppercase border-b border-white/10 pb-2 inline-block">
                                    {area.category}
                                </h3>
                                <ul className="space-y-2">
                                    {area.items.map((item, i) => (
                                        <li key={i} className="text-muted-foreground hover:text-white transition-colors duration-300">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
