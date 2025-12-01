"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !message) return;

        setIsSubmitting(true);
        const { error } = await supabase
            .from('messages')
            .insert([{ email, message }]);

        if (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        } else {
            toast({
                title: "Message Sent",
                description: "I'll get back to you soon.",
            });
            setEmail("");
            setMessage("");
            setIsExpanded(false);
        }
        setIsSubmitting(false);
    };

    return (
        <footer id="contact" className="relative bg-background py-24 md:py-32 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-24">
                    <div>
                        <h3 className="text-2xl font-display font-bold mb-6">NAVIGATION</h3>
                        <ul className="space-y-4 font-mono text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/#work" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="/experience" className="hover:text-primary transition-colors">Experience</Link></li>
                            <li><Link href="/education" className="hover:text-primary transition-colors">Education</Link></li>
                            <li><Link href="/certifications" className="hover:text-primary transition-colors">Certifications</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-display font-bold mb-6">SOCIALS</h3>
                        <ul className="space-y-4 font-mono text-muted-foreground">
                            <li><a href="https://www.linkedin.com/in/abisheiks/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href="https://github.com/abisheik687" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-t border-white/10 pt-24"
                >
                    <span className="block text-sm font-mono text-primary mb-4 uppercase tracking-widest">
                        Got an idea?
                    </span>

                    {!isExpanded ? (
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="block text-6xl md:text-9xl font-display font-bold tracking-tighter hover:text-primary transition-colors duration-500 leading-none text-left w-full"
                        >
                            LET'S TALK
                        </button>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="max-w-2xl"
                            onSubmit={handleSubmit}
                        >
                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-display focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Tell me about your project..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-display focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
                                    />
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-primary text-white px-8 py-3 font-mono text-sm uppercase tracking-widest hover:bg-primary/80 transition-colors disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsExpanded(false)}
                                        className="text-muted-foreground px-8 py-3 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </motion.form>
                    )}
                </motion.div>

                <div className="mt-24 flex flex-col md:flex-row justify-between items-end gap-6 text-sm text-muted-foreground font-mono">
                    <p>© {new Date().getFullYear()} Abisheik S. All rights reserved.</p>
                    <p>Designed & Built with Next.js + Tailwind</p>
                    <div className="flex flex-col gap-1 text-right">
                        <a href="mailto:abisheik172@gmail.com" className="hover:text-primary transition-colors">abisheik172@gmail.com</a>
                        <span>+91 6382370094</span>
                        <span>Villupuram, India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
