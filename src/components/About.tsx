import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "25+", label: "Happy Clients" },
    { number: "100%", label: "Commitment" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a <span className="text-primary font-semibold">full-stack developer</span> with 
                a passion for creating innovative digital experiences. My journey in tech began with 
                curiosity and has evolved into a deep expertise across multiple domains.
              </p>
              <p>
                I specialize in <span className="text-accent font-semibold">modern web technologies</span>, 
                building scalable applications that not only look beautiful but perform exceptionally. 
                From concept to deployment, I ensure every project meets the highest standards.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring aspiring developers. I believe in continuous learning and sharing 
                knowledge with the community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((tech) => (
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