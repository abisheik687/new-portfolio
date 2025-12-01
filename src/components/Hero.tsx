"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.48,
                ease: [0.2, 0.9, 0.3, 1] as any, // Editorial ease
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.4,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Block: Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col justify-center z-10"
                >
                    <motion.div variants={itemVariants} className="overflow-hidden mb-6">
                        <span className="inline-block text-sm font-mono text-accent tracking-widest uppercase">
                            Software Engineer & Creative Technologist
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">
                        ABISHEIK S
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
                        Information Technology Student & Developer based in Villupuram.
                        <br />
                        Specializing in Web Development, Chatbots, and AI Solutions.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
                        <a
                            href="#work"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-mono text-sm uppercase tracking-wider overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
                        >
                            <span className="relative z-10">View Projects</span>
                            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <button
                            onClick={() => document.dispatchEvent(new CustomEvent('open-chat'))}
                            className="group inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-mono text-sm uppercase tracking-wider transition-colors duration-300 hover:bg-secondary hover:border-transparent"
                        >
                            Chat with AI
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Block: Image/Collage */}
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative hidden lg:block h-[600px] w-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-30 rounded-lg" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden relative">
                            {/* Profile Image */}
                            <Image
                                src="/profile-image.jpg"
                                alt="Abisheik S"
                                fill
                                className="object-contain transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
