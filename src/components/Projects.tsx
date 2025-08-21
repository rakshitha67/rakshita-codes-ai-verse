import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Intrusion Detection System",
      description: "Designed a comprehensive security system to monitor network and system activities, detecting cyber threats in real-time with advanced pattern recognition.",
      tags: ["Python", "Machine Learning", "Security", "Network Analysis"],
      link: "#",
      github: "#"
    },
    {
      title: "Direct Market Access Platform",
      description: "Built a Flask-based platform connecting farmers with buyers, featuring price tracking, order management, and secure payment processing.",
      tags: ["Flask", "Python", "Web Development", "Database"],
      link: "#",
      github: "#"
    },
    {
      title: "Fruit Classification ML Model",
      description: "Developed an intelligent fruit classification system using OpenCV, NumPy, and Decision Tree algorithms for accurate image-based identification.",
      tags: ["OpenCV", "Machine Learning", "Python", "Computer Vision"],
      link: "#",
      github: "#"
    },
    {
      title: "Feedback Collection System",
      description: "Created a comprehensive feedback management application with role-based access control and advanced analytics dashboard.",
      tags: ["Flask", "Authentication", "Database", "Web Development"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;