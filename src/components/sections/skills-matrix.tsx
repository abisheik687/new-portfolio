import { SectionWrapper } from "@/components/common/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills, type Skill } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SkillsMatrix() {
  const categorizedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <SectionWrapper id="skills" title="Core Competencies" subtitle="A visualization of my technical skills and expertise across various domains.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categorizedSkills).map(([category, skillList], idx) => (
          <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary dark:text-accent">{category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillList.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <skill.icon className="w-5 h-5 mr-2 text-foreground/70" />
                      <span className="text-md font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent dark:[&>div]:from-accent dark:[&>div]:to-primary" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-12 text-center text-muted-foreground italic">
        Note: This is a simplified skills matrix. For a more interactive experience, consider 3D visualizations or radial maps.
      </p>
    </SectionWrapper>
  );
}
