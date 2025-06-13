"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { navItems, socialLinks } from "@/lib/data";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      let currentSection = 'hero';
      navItems.forEach(item => {
        const section = document.getElementById(item.href.substring(1));
        if (section && section.getBoundingClientRect().top <= 100 && section.getBoundingClientRect().bottom >= 100) {
          currentSection = item.href.substring(1);
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
        ${activeSection === href.substring(1)
          ? 'text-primary dark:text-accent'
          : 'text-foreground/70 hover:text-foreground dark:hover:text-white'}
        ${mobile ? 'block w-full text-left' : ''}
      `}
    >
      {label}
    </Link>
  );
  
  const Logo = () => (
    <Link href="/" className="flex items-center space-x-2 text-xl font-headline font-bold text-primary dark:text-accent">
      <Briefcase className="w-7 h-7" />
      <span>Abisheik S.</span>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
        ${isScrolled ? "bg-background/80 dark:bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    <Logo />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex-grow space-y-2">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                         <NavLink href={item.href} label={item.label} mobile />
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6 border-t">
                     <div className="flex justify-center space-x-4 mb-4">
                        {socialLinks.map((link) => (
                          <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" 
                                className="text-foreground/70 hover:text-primary dark:hover:text-accent transition-colors">
                            <link.icon className="w-6 h-6" />
                            <span className="sr-only">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
