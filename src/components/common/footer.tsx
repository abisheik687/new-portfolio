import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { Briefcase } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted dark:bg-background/50 text-muted-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center mb-6">
          <Link href="/" className="flex items-center space-x-2 text-xl font-headline font-bold text-primary dark:text-accent">
            <Briefcase className="w-7 h-7" />
            <span>Abisheik S.</span>
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.name}
              className="text-muted-foreground hover:text-primary dark:hover:text-accent transition-colors duration-300"
            >
              <link.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Abisheik S. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Next.js, Tailwind CSS, and AI.
        </p>
      </div>
    </footer>
  );
}
