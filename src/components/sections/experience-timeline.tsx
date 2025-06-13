import { SectionWrapper } from "@/components/common/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { timelineEvents, type TimelineEvent } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <SectionWrapper id="timeline" title="My Journey" subtitle="Educational milestones and professional internships that shaped my expertise.">
      <div className="relative">
        {/* Central line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

        <div className="space-y-12 md:space-y-0">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const isEven = index % 2 === 0;
  const Icon = event.icon;

  return (
    <div className={cn(
      "md:flex items-start",
      isEven ? "md:flex-row-reverse" : "md:flex-row"
    )}>
      <div className="md:w-1/2 md:px-8 mb-8 md:mb-0">
        <Card className={cn(
          "shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4",
          event.category === 'internship' ? 'border-primary dark:border-accent' : 'border-secondary dark:border-secondary-foreground/50',
          "animate-fade-in-up"
        )} style={{ animationDelay: `${index * 0.1}s` }}>
          <CardHeader className="flex flex-row items-start space-x-4 pb-3">
            <div className={cn(
              "p-3 rounded-full text-primary-foreground",
              event.category === 'internship' ? 'bg-primary dark:bg-accent' : 'bg-secondary text-secondary-foreground dark:bg-secondary-foreground/50 dark:text-background'
            )}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold text-foreground">{event.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{event.date}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 text-sm leading-relaxed">{event.description}</p>
          </CardContent>
        </Card>
      </div>
      {/* Timeline connector for larger screens */}
      <div className={cn(
        "hidden md:flex md:w-1/2 items-center relative",
        isEven ? "justify-start" : "justify-end"
      )}>
        <div className={cn(
            "absolute w-1/2 h-1 bg-border top-1/2 -translate-y-1/2",
            isEven ? "right-1/2" : "left-1/2"
        )} aria-hidden="true"></div>
        <div className={cn(
          "absolute p-2 rounded-full ring-4 ring-background bg-border top-1/2 -translate-y-1/2",
          isEven ? "right-[calc(50%-0.75rem)]" : "left-[calc(50%-0.75rem)]"
        )} aria-hidden="true">
          <div className={cn(
            "w-2 h-2 rounded-full",
             event.category === 'internship' ? 'bg-primary dark:bg-accent' : 'bg-secondary-foreground'
          )}></div>
        </div>
      </div>
    </div>
  );
}
