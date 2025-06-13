
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Zap, FileText, Brain, Loader2 } from 'lucide-react';
import type { Project } from '@/lib/data';
import { analyzeCode, type CodeAnalysisInput } from '@/ai/flows/code-analysis-deep-dive';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card'; // Added missing import for Card

interface FeaturedProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function FeaturedProjectModal({ project, isOpen, onClose }: FeaturedProjectModalProps) {
  const [codeAnalysis, setCodeAnalysis] = useState<string | null>(null);
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);

  useEffect(() => {
    if (isOpen && project && project.codePreview && !codeAnalysis) {
      const fetchAnalysis = async () => {
        setIsLoadingAnalysis(true);
        try {
          const input: CodeAnalysisInput = {
            code: project.codePreview!,
            description: project.shortDescription || project.title,
          };
          const result = await analyzeCode(input);
          setCodeAnalysis(result.analysis);
        } catch (error) {
          console.error("Failed to analyze code:", error);
          setCodeAnalysis("Could not load AI code analysis.");
        } finally {
          setIsLoadingAnalysis(false);
        }
      };
      fetchAnalysis();
    }
    // Reset analysis when modal closes or project changes
    if (!isOpen) {
      setCodeAnalysis(null);
    }
  }, [isOpen, project, codeAnalysis]); // Added codeAnalysis to dependency array as per its usage in condition

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-3xl font-headline font-bold text-primary dark:text-accent">{project.title}</DialogTitle>
          <DialogDescription className="text-md text-muted-foreground">{project.shortDescription}</DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-grow overflow-y-auto">
          <div className="px-6 pb-6 space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden relative shadow-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint="project main image"
              />
            </div>

            {project.problemStatement && (
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center"><Zap className="w-5 h-5 mr-2 text-primary dark:text-accent" /> Problem Statement</h3>
                <p className="text-foreground/80">{project.problemStatement}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center"><FileText className="w-5 h-5 mr-2 text-primary dark:text-accent" /> My Solution</h3>
                <p className="text-foreground/80">{project.solution}</p>
              </div>
            )}
            
            {project.techUsed && project.techUsed.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            )}

            {project.codePreview && (
              <div className="space-y-2">
                <h3 className="text-xl font-semibold flex items-center"><Brain className="w-5 h-5 mr-2 text-primary dark:text-accent" /> AI Code Analysis</h3>
                {isLoadingAnalysis ? (
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Analyzing code...</span>
                  </div>
                ) : (
                  <Card className="bg-muted/50 dark:bg-card p-4 max-h-60 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm font-code text-foreground/90">{codeAnalysis || "No analysis available."}</pre>
                  </Card>
                )}
              </div>
            )}
          </div>
        </ScrollArea>

        <DialogFooter className="p-6 pt-0 border-t mt-auto sticky bottom-0 bg-background">
          <div className="flex flex-wrap gap-2 w-full justify-end">
            {project.livePreviewUrl && (
              <Button asChild variant="outline">
                <Link href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View GitHub
                </Link>
              </Button>
            )}
            <Button onClick={onClose} variant="default">Close</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
