"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        year: string;
        description: string;
        href: string;
    };
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative w-full perspective-1000"
        >
            <Link href={project.href} className="block">
                <div className="relative border-b border-white/10 py-12 md:py-16 transition-colors hover:bg-white/5 px-6 md:px-12 rounded-lg overflow-hidden">
                    {/* Hover Bloom */}
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-12 relative z-10 translate-z-10">
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                                {project.title}
                            </h3>
                        </div>

                        <div className="flex-1 md:text-right">
                            <span className="text-sm md:text-base font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                                {project.category}
                            </span>
                        </div>

                        <div className="w-24 text-right hidden md:block">
                            <span className="text-sm font-mono text-muted-foreground">
                                {project.year}
                            </span>
                        </div>

                        <div className="md:w-12 flex justify-end">
                            <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        whileHover={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden relative z-10"
                    >
                        <p className="pt-4 text-muted-foreground max-w-xl text-lg transform translate-z-20">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    );
}
