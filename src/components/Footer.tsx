const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-glass-bg to-background" />
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div 
              className="text-3xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-300 inline-block"
              onClick={scrollToTop}
            >
              Balam Venkata Sai Bharath
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about building intelligent, real-world solutions through AI-driven innovation and seamless web experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "🔗", href: "https://github.com/SaiBharath28", label: "GitHub" },
                { icon: "💼", href: "https://linkedin.com/in/sai-bharath-balam-4500b02b2", label: "LinkedIn" },
                { icon: "📧", href: "mailto:saibharath282002@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center text-xl hover:bg-primary/20 hover:scale-110 hover:text-primary transition-all duration-300"
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-lg">📧</span>
                <a 
                  href="mailto:saibharath282002@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  saibharath282002@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📱</span>
                <a 
                  href="tel:+91 7032943252"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +91 7032943252
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📍</span>
                <span className="text-muted-foreground">Hyderbad, Telangana</span>
              </div>
            </div>
            
            {/* Availability status */}
            <div className="p-4 bg-glass-bg/50 rounded-lg border border-accent/20 mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">Available for work</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Open to new opportunities and exciting projects
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sai Bharath. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-1 hover:text-primary transition-colors duration-200"
              >
                <span>Back to Top</span>
                <span className="text-lg">⬆️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
