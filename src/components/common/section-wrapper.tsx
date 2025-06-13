import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  hasPt?: boolean;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  hasPt = true, // For hero section, we might not want top padding
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8',
        hasPt && 'py-16 md:py-24',
        className
      )}
      {...props}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <h2
              id={`${id}-title`}
              className={cn(
                'text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl text-primary dark:text-accent',
                titleClassName
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={cn(
                'mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto',
                subtitleClassName
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={cn(contentClassName)}>
        {children}
      </div>
    </section>
  );
}
