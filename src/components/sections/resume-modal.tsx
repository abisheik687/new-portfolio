"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, Award, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

interface ResumeModalProps {
  triggerButton: React.ReactNode;
}

const resumeHighlights = [
  { icon: Briefcase, text: "Internships at IIT Delhi, Shell-AICTE, SEYFERT Infotech focusing on Frontend, NLP, and Digital Marketing." },
  { icon: Award, text: "Key certifications including Palo Alto Cybersecurity, HTML5 App Dev, Full Stack Development." },
  { icon: GraduationCap, text: "B.Tech in Computer Science (Expected 2024) from Vellore Institute of Technology." },
  { icon: CheckCircle, text: "Proficient in Python, JavaScript, React, Next.js, GCP, AWS, NLP, and modern development tools." },
];

export function ResumeModal({ triggerButton }: ResumeModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline font-bold text-primary dark:text-accent">Resume Highlights</DialogTitle>
          <DialogDescription>
            A quick overview of my key qualifications and experiences. Download the full resume for more details.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <ul className="space-y-3">
            {resumeHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start space-x-3">
                <highlight.icon className="w-5 h-5 mt-1 text-primary dark:text-accent flex-shrink-0" />
                <span className="text-foreground/90">{highlight.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <DialogFooter>
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/resume.pdf" download="Abisheik_S_Resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" /> Download Full Resume (PDF)
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
