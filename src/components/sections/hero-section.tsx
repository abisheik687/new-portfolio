"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Eye, Send } from "lucide-react";
import Link from "next/link";
import { ResumeModal } from "./resume-modal";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center particle-bg relative text-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background dark:from-background/50 dark:via-background/90 dark:to-background z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in-up [animation-delay:0.2s]">
          <span className="block">Building the Future</span>
          <span className="block text-primary dark:text-accent">of Code Intelligence</span>
        </h1>
        <p className="font-body text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-10 animate-fade-in-up [animation-delay:0.4s]">
          AI-Powered Tools. Scalable Interfaces. Developer-First Solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up [animation-delay:0.6s]">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <Link href="#projects">
              <Eye className="mr-2 h-5 w-5" /> View Projects
            </Link>
          </Button>
          <ResumeModal 
            triggerButton={
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 dark:border-accent dark:text-accent dark:hover:bg-accent/10 shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                <ArrowDownToLine className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            }
          />
          <Button asChild variant="outline" size="lg" className="border-foreground/50 hover:bg-foreground/10 shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" /> Contact Me
            </Link>
          </Button>
        </div>
      </div>
      {/* This is a placeholder for the actual Three.js or Lottie animation.
          A full implementation would require installing and configuring libraries like 'three' or 'react-lottie'.
          For now, a CSS animation is provided in globals.css via .particle-bg.
      */}
    </section>
  );
}
