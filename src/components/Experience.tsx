import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading a team of 6 developers in building scalable web applications. Implemented microservices architecture that improved system performance by 40%.",
      achievements: [
        "Architected and deployed cloud infrastructure serving 1M+ users",
        "Mentored junior developers and conducted technical interviews",
        "Reduced deployment time by 60% through CI/CD optimization"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
      type: "full-time"
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2021 - 2022",
      location: "Remote",
      description: "Developed user interfaces for a fintech platform, focusing on performance optimization and user experience improvements.",
      achievements: [
        "Improved page load times by 50% through code splitting",
        "Built responsive design system used across 10+ products",
        "Collaborated with UX team to increase user engagement by 35%"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      type: "full-time"
    },
    {
      company: "Digital Agency Pro",
      position: "Web Developer",
      period: "2020 - 2021",
      location: "New York, NY",
      description: "Created custom websites and web applications for various clients, specializing in e-commerce and content management systems.",
      achievements: [
        "Delivered 25+ client projects with 100% satisfaction rate",
        "Increased client conversion rates by average of 25%",
        "Established development workflows and best practices"
      ],
      technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
      type: "full-time"
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      period: "2019 - 2020",
      location: "Remote",
      description: "Worked with various clients to build custom web solutions, from small business websites to complex web applications.",
      achievements: [
        "Built 15+ websites and web applications",
        "Managed complete project lifecycle from concept to deployment",
        "Maintained long-term client relationships with 90% retention rate"
      ],
      technologies: ["JavaScript", "Python", "React", "Django"],
      type: "freelance"
    }
  ];

  const education = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      highlights: [
        "Graduated Summa Cum Laude",
        "President of Computer Science Society",
        "Dean's List for 6 consecutive semesters"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-20" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-16 last:mb-0 animate-fade-in-up ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10" />
                
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="glass-card hover:shadow-glow transition-all duration-500 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300">
                            {exp.position}
                          </h4>
                          <p className="text-accent font-semibold">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                            {exp.period}
                          </span>
                          <div className="mt-2">
                            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                              exp.type === 'full-time' 
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'bg-accent/10 text-accent border border-accent/20'
                            }`}>
                              {exp.type === 'full-time' ? 'Full-time' : 'Freelance'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{achievement}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Education
          </h3>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="glass-card hover:shadow-accent-glow transition-all duration-500 animate-fade-in-up"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-accent mb-2">{edu.degree}</h4>
                      <p className="text-lg font-semibold text-foreground">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.period}</p>
                    </div>
                    <div className="text-right mt-4 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold text-lg rounded-full border border-accent/20">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;