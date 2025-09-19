import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="neon-text">Muddam</span>{" "}
            <span className="gradient-text">Akhilesh Yadav</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Turning data into insights and ideas into impact—I'm Akhilesh Yadav, a curious{" "}
              <span className="neon-text-purple font-semibold">AI & Full-Stack developer</span>{" "}
              crafting smart solutions, interactive web experiences, and{" "}
              <span className="neon-text-green font-semibold">futuristic projects</span>{" "}
              that stand out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="btn-neon px-8 py-3 text-lg font-semibold">
              View My Work
            </Button>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Akhilesh-yadav680" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.neon.cyan)]"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/muddam-akhilesh-yadav-0a71a932b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.neon.purple)]"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:akhileshyadav5361@gmail.com"
                className="p-3 rounded-full border border-neon-green text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.neon.green)]"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="animate-float">
            <ArrowDown className="mx-auto text-neon-cyan animate-bounce" size={32} />
          </div>
        </div>
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-neon-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-neon-pink rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;