import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java (Basics)", "SQL", "HTML", "CSS (Basics)"]
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["MySQL", "Relational Databases", "Data Modeling"]
    },
    {
      icon: Settings,
      title: "Tools & Platforms",
      skills: ["VS Code", "Jupyter Notebook", "GitHub", "MySQL Workbench"]
    },
    {
      icon: Brain,
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Machine Learning", "Web Development"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="skill-item animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "AWS Certified Cloud Practitioner",
              "Python for Beginners",
              "HTML & CSS Fundamentals"
            ].map((cert, index) => (
              <div 
                key={cert}
                className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm text-center hover-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Badge className="mb-3 bg-primary/10 text-primary">
                  Certified
                </Badge>
                <h4 className="font-semibold">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;