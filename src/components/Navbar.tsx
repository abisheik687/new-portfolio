"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Internship", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Skills", href: "/skills" },
    { name: "Certifications", href: "/certifications" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/#work" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300 mix-blend-difference text-white",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <Link href="/" className="text-xl font-display font-bold tracking-tighter hover:opacity-70 transition-opacity">
                ABISHEIK S
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="relative group overflow-hidden font-medium text-sm tracking-wide uppercase"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                            {item.name}
                        </span>
                        <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-primary">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>

            <button className="md:hidden text-white uppercase text-sm font-medium tracking-wide">
                Menu
            </button>
        </motion.nav>
    );
}
