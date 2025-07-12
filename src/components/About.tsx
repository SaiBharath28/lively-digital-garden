import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "160+", label: "LeetCode Problems Completed" },
    { number: "5+", label: "Certifications Earned" }


  
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by a passion for building AI-powered digital solutions that solve real-world problems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a passionate <span className="text-primary font-semibold">AI enthusiast</span> and <span className="text-primary font-semibold">full-stack developer</span> driven by the desire to build intelligent and impactful digital solutions. My journey began with a curiosity for how software works and has grown into hands-on expertise across web development, machine learning, and backend engineering.

              </p>
            
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or building side projects. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {["Python", "Data Structures", "OOPs", "SQL", "AI", "ML", "AWS"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
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

export default About;
