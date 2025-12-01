"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects as staticProjects } from "@/lib/data";

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    href: string;
}

export function ProjectShowcase() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for smooth transition
        const loadProjects = () => {
            const mappedProjects: Project[] = staticProjects.map((p, index) => ({
                id: index, // Use index as numeric ID
                title: p.title,
                category: p.tags[0] || 'Development',
                year: '2025', // Default year
                description: p.shortDescription,
                href: p.githubUrl
            }));
            setProjects(mappedProjects);
            setLoading(false);
        };

        loadProjects();
    }, []);

    if (loading) {
        return (
            <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10 min-h-[50vh] flex items-center justify-center">
                <div className="text-muted-foreground font-mono animate-pulse">LOADING ARCHIVES...</div>
            </section>
        );
    }

    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 flex items-end justify-between border-b border-white/10 pb-8"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
                        SELECTED WORK
                    </h2>
                    <span className="hidden md:block text-sm font-mono text-muted-foreground">
                        (ARCHIVE)
                    </span>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {projects.length === 0 ? (
                        <div className="text-muted-foreground font-mono py-12">No projects found.</div>
                    ) : (
                        projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        )))}
                </div>
            </div>
        </section>
    );
}
