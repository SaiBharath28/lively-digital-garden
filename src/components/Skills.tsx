import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Concepts",
      icon: "🎨",
      skills: ["Python", "MySQL", "Data Structures", "OOP", "HTML", "CSS", "JavaScript"],
      color: "primary"
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Scikit-learn", "Hugging Face", "NumPy", "Pandas", "Matplotlib"],
      color: "accent"
    },
    {
      title: "Backend & Databases",
      icon: "⚙️",
      skills: ["Flask", "Node.js", "SQL", "MongoDB", "API Development", "Backend Logic"],
      color: "primary"
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      skills: ["Git", "GitHub", "Git Bash", "Render", "CI/CD", "Agile", "SDLC"],
      color: "accent"
    },
    {
      title: "Data & Visualization",
      icon: "📊",
      skills: ["Power BI", "Looker"],
      color: "primary"
    },
    {
      title: "Platforms & IDEs",
      icon: "💻",
      skills: ["VS Code", "PyCharm", "Google Colab", "Jupyter Notebook"],
      color: "accent"
    },
    {
      title: "Soft Skills",
      icon: "🧑‍💼",
      skills: ["Problem Solving", "Teamwork", "Presentation", "Time Management", "Self-learning"],
      color: "primary"
    }
  ];

  const tools = [
  { name: "VS Code", level: 95, icon: "💻" },
  { name: "Git & GitHub", level: 90, icon: "🔧" },
  { name: "Google Colab / Jupyter", level: 85, icon: "📘" },
  { name: "Power BI", level: 85, icon: "📊" },
  { name: "PyCharm", level: 80, icon: "🧰" },
  { name: "Hugging Face", level: 80, icon: "🤗" },
  { name: "Render", level: 75, icon: "🌐" },
  { name: "Slack / Teams", level: 75, icon: "💬" }
];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-glow transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  category.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tools Proficiency */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Proficiency with Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover:shadow-accent-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="font-semibold text-foreground">{tool.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{tool.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
