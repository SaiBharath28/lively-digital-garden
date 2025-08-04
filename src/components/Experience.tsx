import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
    company: "NxtWave",
    position: "Software Development Faculty Trainee",
    period: "June 2025 – Present",
    location: "India (Hyderbad)",
    description: "Undergoing intensive training in backend development while contributing to content creation and mentoring preparation. Building scalable server-side applications with real-world projects and hands-on backend logic.",
    achievements: [
      "Training in Python, Node.js, SQL, MongoDB, scalable server-side apps, API development, backend logic, and database integration.",
      "Preparing to deliver backend content in university.",
      "Responsible for backend projects, assessments, and content creation."
    ],
    technologies: ["Python", "Node.js", "SQL", "MongoDB", "Git", "CI/CD"],
    type: "full-time"
  },
  {
    company: "Edu Station",
    position: "Cybersecurity Internship",
    period: "May 2023 – July 2023",
    location: "India (Remote)",
    description: "Gained practical experience in cybersecurity through real-world simulations involving threat detection, anomaly analysis, and system hardening techniques.",
    achievements: [
      "Applied KNN Classifier and Decision Trees for anomaly detection and threat analysis",
      "Conducted vulnerability assessments and strengthened system security protocols",
      "Explored encryption techniques and network security frameworks"
    ],
    technologies: ["Python", "KNN", "Decision Trees", "Encryption", "Cybersecurity Tools"],
    type: "internship"
  }

  ];

  const education = [
    {
  institution: "Vellore Institute of Technology, Vellore",
  degree: "M.Tech Integrated in Software Engineering",
  period: "2020 – 2025",
  gpa: "CGPA: 7.73",
  highlights: [
    "Specialized in AI, Machine Learning, and Full-Stack Development",
    "Completed major projects in Deep Learning and NLP-based Healthcare",
    "Active participant in IEEE Summer School on AI & IoT"
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
                              {exp.type === 'full-time' ? 'Full-time' : 'Intership'}
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
