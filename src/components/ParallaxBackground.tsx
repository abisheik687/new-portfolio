"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.1, 0]);

    return (
        <div ref={ref} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Geometric Band */}
            <motion.div
                style={{ y, opacity }}
                className="absolute top-[20%] -left-[10%] w-[120%] h-[400px] bg-gradient-to-r from-transparent via-primary/5 to-transparent -rotate-12 blur-3xl"
            />

            {/* Secondary Band */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]), opacity: useTransform(scrollYProgress, [0, 1], [0.2, 0]) }}
                className="absolute bottom-[10%] -right-[10%] w-[120%] h-[300px] bg-gradient-to-l from-transparent via-accent/5 to-transparent rotate-6 blur-3xl"
            />
        </div>
    );
}
