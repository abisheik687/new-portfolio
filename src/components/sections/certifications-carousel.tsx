import { SectionWrapper } from "@/components/common/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { certifications, type Certification } from "@/lib/data";
import Image from "next/image";

export function CertificationsCarousel() {
  return (
    <SectionWrapper id="certifications" title="Credentials & Achievements" subtitle="Recognitions and certifications validating my skills and knowledge.">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex space-x-6 p-4">
          {certifications.map((cert, idx) => (
            <Card key={cert.id} className="min-w-[300px] max-w-[320px] flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
              <CardHeader className="relative p-0 h-40 overflow-hidden">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="certificate badge"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                   <cert.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold text-foreground mb-1 truncate" title={cert.title}>{cert.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Issued by: {cert.issuer}
                </CardDescription>
                <CardDescription className="text-xs text-muted-foreground mt-1">
                  Date: {cert.date}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </SectionWrapper>
  );
}
