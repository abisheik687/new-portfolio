"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Download, Eye } from "lucide-react";
import type { Project } from "@/lib/data";
import { generateProjectDescription, type GenerateProjectDescriptionInput } from '@/ai/flows/generate-project-descriptions';
import React from "react";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
  isFeatured?: boolean;
}

export function ProjectCard({ project, onViewDetails, isFeatured = false }: ProjectCardProps) {
  const [description, setDescription] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  // For demo, we'll load description on mount if not provided.
  // In a real app, this might be pre-generated or fetched.
  React.useEffect(() => {
    async function fetchDescription() {
      if (!project.shortDescription && project.codePreview) {
        setIsLoading(true);
        try {
          const input: GenerateProjectDescriptionInput = {
            projectName: project.title,
            codePreview: project.codePreview,
          };
          const result = await generateProjectDescription(input);
          setDescription(result.description);
        } catch (error) {
          console.error("Failed to generate project description:", error);
          setDescription("Could not load AI-generated description.");
        } finally {
          setIsLoading(false);
        }
      } else {
        setDescription(project.shortDescription);
      }
    }
    fetchDescription();
  }, [project.shortDescription, project.codePreview, project.title]);


  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border-transparent hover:border-primary dark:hover:border-accent">
      <CardHeader className="p-0 relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            data-ai-hint="project screenshot"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl font-bold text-white font-headline">{project.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 md:p-6">
        {isLoading ? (
          <p className="text-sm text-muted-foreground italic">Generating description...</p>
        ) : (
          <CardDescription className="text-sm text-foreground/80 mb-4 h-20 overflow-y-auto">
            {description || 'No description available.'}
          </CardDescription>
        )}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-start">
        {project.livePreviewUrl && (
          <Button asChild variant="outline" size="sm" className="flex-grow sm:flex-grow-0">
            <Link href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Preview
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm" className="flex-grow sm:flex-grow-0">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View GitHub
            </Link>
          </Button>
        )}
        {project.downloadUrl && (
          <Button asChild variant="outline" size="sm" className="flex-grow sm:flex-grow-0">
            <Link href={project.downloadUrl} download>
              <Download className="mr-2 h-4 w-4" /> Download Code
            </Link>
          </Button>
        )}
        {isFeatured && onViewDetails && (
          <Button onClick={() => onViewDetails(project)} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-grow sm:flex-grow-0 col-span-2 sm:col-auto">
            <Eye className="mr-2 h-4 w-4" /> Deep Dive
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
