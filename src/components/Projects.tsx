import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
  id: 1,
  title: "TaskTracker – Simple Productivity App",
  description:
    "A minimal and intuitive task management application that helps users track daily activities. Features include task creation with optional due dates, tags, filtering by status (all, pending, completed, due soon), and a real-time progress dashboard. Clean UI with dark mode toggle and user sign-in support.",
  technologies: ["React", "TypeScript", "TailwindCSS", "ShadCN/UI", "Supabase Auth", "Supabase PostgreSQL", "RLS (Row Level Security)", "Vite", "React Toastify", "@dnd-kit/core"],
  github: "https://github.com/SaiBharath28/TaskTracker-Simple-Productivity-App",
  live: "https://loving-task-board.lovable.app",
  featured: false
},

    {
      id: 2,
      title: "Medicare System",
      description:
        "A full-featured hospital operations system with role-based access, appointment scheduling, billing, and medical record management.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/SaiBharath28/medicare-system",
      live: "https://prescripto-frontend-uu5b.onrender.com",
      featured: false
    },
    {
      id: 3,
      title: "User Feedback System",
      description:
        "Feedback management platform with sentiment analysis, categorization, and dashboard visualization to monitor user satisfaction.",
      technologies: ["Python", "NLP", "Flask", "HTML", "CSS"],
      github: "https://github.com/SaiBharath28/User-Feedback-System",
      live: "https://user-feedback-system-phi.vercel.app/",
      featured: false
    },
    {
      id: 4,
      title: "Typing Speed Test",
      description:
        "A responsive app to measure typing speed and accuracy with real-time feedback, WPM tracking, and personalized tips.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/SaiBharath28/typing-speed-test",
      live: "https://typing-speed-test-gules.vercel.app/",
      featured: false
    },
    {
      id: 5,
      title: "AI Code Review Application",
      description:
        "An intelligent code review tool using Google Gemini Pro to analyze Python, Java, C, and C++ code, highlight bugs, and suggest improvements.",
      technologies: ["Python", "Flask", "Google Gemini", "HTML", "CSS"],
      github: "https://github.com/SaiBharath28/AI-Code-Review",
      live: "https://ai-code-review-1-0t4o.onrender.com/",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Personal Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.live && (
                    <Button
                      size="sm"
                      className="glow-button text-xs"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      Live
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            className="glow-button text-lg px-8 py-6"
            onClick={() =>
              window.open("https://github.com/SaiBharath28?tab=repositories", "_blank")
            }
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
