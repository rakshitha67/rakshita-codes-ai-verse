import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      type: "experience",
      icon: Briefcase,
      title: "Python Programming Internship",
      organization: "Tech Company",
      period: "2023",
      description: "Gained hands-on exposure to Python development, applied problem-solving, and project implementation in real-world scenarios.",
      skills: ["Python", "Problem Solving", "Project Management"]
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Engineering (AI & ML)",
      organization: "Ballari Institute of Technology and Management",
      period: "2020 - 2024",
      description: "Comprehensive study in Artificial Intelligence and Machine Learning with focus on practical applications and research.",
      skills: ["AI/ML", "Research", "Technical Skills"]
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "High School Education",
      organization: "V M High School, Hunagund",
      period: "2018 - 2020",
      description: "Strong foundation in mathematics and sciences, laying the groundwork for technical education.",
      skills: ["Mathematics", "Sciences", "Foundation"]
    }
  ];

  const achievements = [
    "Built multiple Flask web apps and ML models addressing real-world problems",
    "Showcased strong problem-solving abilities through academic & personal projects",
    "Balanced expertise across software development and machine learning",
    "AWS Certified Cloud Practitioner with cloud computing knowledge"
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in technology and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative flex items-start mb-12 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-grow">
                  <div className="bg-card p-6 rounded-xl border shadow-lg hover-float">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={item.type === 'experience' ? 'default' : 'secondary'}>
                        {item.period}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <h4 className="text-primary font-semibold mb-3">{item.organization}</h4>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text flex items-center justify-center">
              <Award className="h-8 w-8 mr-3" />
              Key Achievements
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover-float animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;