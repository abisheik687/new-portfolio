import { MessageSquareText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-muted dark:bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden shadow-2xl group">
             <Image
                src="https://placehold.co/600x600.png"
                alt="Abisheik S."
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-ai-hint="developer portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-primary dark:text-accent mb-6">
              Meet Abisheik
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              A passionate Full Stack & AI Developer on a mission to craft intelligent, user-centric digital experiences. With a knack for creative problem-solving and a drive for continuous learning, I thrive on transforming complex challenges into elegant, scalable solutions.
            </p>
            <Card className="bg-background dark:bg-card shadow-xl border-primary/20 dark:border-accent/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl font-semibold text-primary dark:text-accent">
                  <MessageSquareText className="w-6 h-6 mr-2" />
                  Developer's Note
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground italic text-md">
                  “I’m a diamond in the rough—ambitious, adaptable, and future-ready. Always eager to explore new technologies and contribute to impactful projects.”
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
