import { SectionWrapper } from "@/components/common/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { techStack, type TechTool } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  const categorizedTools = techStack.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<TechTool['category'], TechTool[]>);

  return (
    <SectionWrapper id="tech-stack" title="Tools & Technologies" subtitle="My daily drivers for development, AI, cloud, and more." className="bg-muted dark:bg-background/70">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categorizedTools).map(([category, toolList], idx) => (
          <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary dark:text-accent">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {toolList.map((tool) => (
                  <li key={tool.id} className="flex items-center space-x-3 group">
                    <div className="p-2 bg-primary/10 dark:bg-accent/10 rounded-full group-hover:bg-primary/20 dark:group-hover:bg-accent/20 transition-colors">
                      <tool.icon className="w-5 h-5 text-primary dark:text-accent" />
                    </div>
                    <span className="text-md text-foreground">{tool.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
