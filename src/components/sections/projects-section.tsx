"use client";

import { SectionWrapper } from "@/components/common/section-wrapper";
import { projects, type Project } from "@/lib/data";
import { ProjectCard } from "./project-card";
import React from "react";
import { FeaturedProjectModal } from "./featured-project-modal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const nonFeaturedProjects = projects.filter(p => !p.isFeatured);
  const featuredProject = projects.find(p => p.isFeatured);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <SectionWrapper 
      id="projects" 
      title="My Creations" 
      subtitle="A showcase of projects where I've applied my skills to build impactful solutions. AI-generated descriptions provide insights into each codebase."
      className="bg-muted dark:bg-background/70"
    >
      {/* Featured Project */}
      {featuredProject && (
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-headline font-semibold text-center mb-8 text-primary dark:text-accent">
            Featured Project
          </h3>
          <div className="max-w-3xl mx-auto">
             <ProjectCard project={featuredProject} onViewDetails={handleViewDetails} isFeatured />
          </div>
        </div>
      )}

      {/* Other Projects */}
      {nonFeaturedProjects.length > 0 && (
        <>
          <h3 className="text-2xl md:text-3xl font-headline font-semibold text-center mb-8 mt-16 text-foreground">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonFeaturedProjects.map((project, idx) => (
              <div key={project.id} className="animate-fade-in-up" style={{animationDelay: `${(featuredProject ? 1 : 0 + idx) * 0.1}s`}}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </>
      )}
      
      {selectedProject && (
        <FeaturedProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SectionWrapper>
  );
}
