"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    sources?: { source: string; excerpt: string }[];
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNudge, setShowNudge] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', content: "Hi! I'm Abisheik's AI assistant. Ask me about his projects, experience, or skills." }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Nudge Logic (One-time)
    useEffect(() => {
        const hasSeenNudge = localStorage.getItem("hasSeenChatNudge");
        if (!hasSeenNudge) {
            const timer = setTimeout(() => setShowNudge(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        document.addEventListener('open-chat', handleOpenChat);
        return () => document.removeEventListener('open-chat', handleOpenChat);
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
        setShowNudge(false);
        localStorage.setItem("hasSeenChatNudge", "true");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch('/api/chat/query', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: input }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Failed to get response');

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.answer,
                sources: data.sources?.map((s: any) => ({ source: s.id, excerpt: s.content.substring(0, 50) + "..." }))
            };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error('Chat Error:', error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: "Sorry, I encountered an error. Please try again later."
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            {/* FAB & Nudge */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
                <AnimatePresence>
                    {showNudge && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-card border border-border p-4 rounded-lg shadow-xl max-w-xs relative"
                        >
                            <button
                                onClick={() => { setShowNudge(false); localStorage.setItem("hasSeenChatNudge", "true"); }}
                                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                            >
                                <X className="w-3 h-3" />
                            </button>
                            <p className="text-sm font-mono">
                                <Sparkles className="w-4 h-4 inline mr-2 text-accent" />
                                Curious about my work? Ask my AI assistant!
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={handleOpen}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-colors"
                >
                    <MessageSquare className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Chat Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-full md:w-[400px] bg-background border-l border-border z-50 shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-border flex justify-between items-center bg-card/50 backdrop-blur">
                                <h3 className="font-display font-bold text-lg flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-accent" />
                                    Ask Abisheik AI
                                </h3>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-secondary rounded-full transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={cn("flex flex-col gap-1", msg.role === 'user' ? "items-end" : "items-start")}>
                                        <div className={cn(
                                            "p-3 rounded-lg max-w-[85%] text-sm leading-relaxed",
                                            msg.role === 'user' ? "bg-accent text-white" : "bg-secondary text-foreground"
                                        )}>
                                            {msg.content}
                                        </div>
                                        {msg.sources && (
                                            <div className="flex gap-2 mt-1">
                                                {msg.sources.map((src, i) => (
                                                    <span key={i} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded border border-white/5">
                                                        Src: {src.source}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {loading && (
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm p-2">
                                        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                                        <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-75" />
                                        <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-150" />
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card/50 backdrop-blur">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about projects, skills..."
                                        className="w-full bg-secondary border border-border rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || loading}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-accent hover:text-accent/80 disabled:opacity-50 transition-colors"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar pb-1">
                                    {["Experience", "Projects", "Tech Stack"].map((tag) => (
                                        <button
                                            key={tag}
                                            type="button"
                                            onClick={() => setInput(`Tell me about Abisheik's ${tag}`)}
                                            className="text-[10px] font-mono uppercase border border-border px-2 py-1 rounded-full hover:bg-secondary transition-colors whitespace-nowrap text-muted-foreground"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
