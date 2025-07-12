import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Software Developer",
    "Software Engineer",
    "Data Scientist",
    "Data Analyst",
    "Full Stack Developer"
    
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeText = () => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          const deleteText = () => {
            if (charIndex > 0) {
              setDisplayText(currentRole.slice(0, charIndex - 1));
              charIndex--;
              setTimeout(deleteText, 50);
            } else {
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          };
          deleteText();
        }, 2000);
      }
    };
    
    typeText();
  }, [currentIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl floating" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl floating" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-glow/10 rounded-full blur-lg floating" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-accent font-medium text-lg tracking-wide">
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text">
                Balam Venkata Sai Bharath
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                <span className="typing-cursor">{displayText}</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Looking for a challenging career which demands the best of my abilities in terms of analytical skills that help in applying and enhancing my skills and knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProjects}
                className="glow-button text-lg px-8 py-6"
              >
                View My Work
              </Button>
              
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110" />
              <img
                src={profileImage}
                alt="Alex Johnson"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/20 shadow-glow hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
