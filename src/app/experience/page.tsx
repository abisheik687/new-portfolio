"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const experiences = [
    {
        company: "1M1B (One Million for One Billion) Foundation",
        role: "Green Intern (Sustainability & Tech Track)",
        location: "India",
        period: "Aug 2025 - Oct 2025",
        description: [
            "Contributed to sustainability-focused technology initiatives under the UN-backed 1M1B Future Leaders program.",
            "Participated in research and project activities related to environmental awareness, digital solutions, and community impact.",
            "Worked on problem statements involving SDGs (Sustainable Development Goals), analyzing real-world environmental challenges.",
            "Developed presentations, project proposals, and tech-enabled mitigation ideas to support green innovation."
        ]
    },
    {
        company: "Seyfert Infotech",
        role: "Web Development Intern",
        location: "Puducherry, India",
        period: "Jan 2025 - Feb 2025",
        description: [
            "Developed responsive and mobile-friendly websites using HTML5, CSS, Javascript and Bootstrap.",
            "Participated in regular code reviews and stand-up meetings, improving code quality and communication skills."
        ]
    },
    {
        company: "Shell (AICTE)",
        role: "Chatbot and NLP Developer Intern",
        location: "Remote, India",
        period: "Dec 2024 – Jan 2025",
        description: [
            "Collected and analyzed user intent data to enhance chatbot intelligence.",
            "Integrated Natural Language Processing (NLP) techniques to improve chatbot response accuracy."
        ]
    },
    {
        company: "VEI Technologies",
        role: "Full-Stack & IoT Development Intern",
        location: "India",
        period: "Sept 2024 - Nov 2024",
        description: [
            "Built full-stack applications integrating frontend, backend, databases, and APIs.",
            "Worked on IoT device integration, sensor communication, and real-time data handling.",
            "Created dashboards and data visualization components for IoT outputs.",
            "Gained practical experience in development workflows, version control, and deployment techniques.",
            "Collaborated in team-based mini-projects following structured engineering practices."
        ]
    },
    {
        company: "Indian Institute of Technology (IIT) Delhi",
        role: "Campus Ambassador (Digital Marketing) Intern",
        location: "Delhi(Hybrid), India",
        period: "Dec 2023 – Feb 2024",
        description: [
            "Promoted IIT Delhi’s tech events through targeted marketing campaigns.",
            "Managed and optimized multiple digital accounts across social media platforms."
        ]
    }
];

export default function ExperiencePage() {
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
                    INTERNSHIP
                </motion.h1>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group border-l-2 border-white/10 pl-8 md:pl-12 hover:border-primary transition-colors duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                    {exp.company}
                                </h2>
                                <span className="font-mono text-sm text-muted-foreground mt-1 md:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                                <h3 className="text-xl font-display text-white/80">
                                    {exp.role}
                                </h3>
                                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1 md:mt-0">
                                    {exp.location}
                                </span>
                            </div>

                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 bg-primary/50 rounded-full shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
