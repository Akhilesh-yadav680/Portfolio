import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and Tagline */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text font-mono mb-2">
              Muddam Akhilesh Yadav
            </h3>
            <p className="text-muted-foreground">
              Transforming ideas into intelligent solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Akhilesh-yadav680"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.neon.cyan/0.3)]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muddam-akhilesh-yadav-0a71a932b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted hover:border-neon-purple hover:text-neon-purple transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.neon.purple/0.3)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:akhileshyadav5361@gmail.com"
              className="p-3 rounded-full border border-muted hover:border-neon-green hover:text-neon-green transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.neon.green/0.3)]"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>AI & Machine Learning</li>
                <li>Full-Stack Development</li>
                <li>Data Science</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>Python & Django</li>
                <li>React & JavaScript</li>
                <li>PyTorch & TensorFlow</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Services</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>Web Development</li>
                <li>ML Model Development</li>
                <li>Data Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Connect</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>Project Collaboration</li>
                <li>Technical Consulting</li>
                <li>Knowledge Sharing</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {currentYear} Muddam Akhilesh Yadav. Built with 
              <Heart size={16} className="text-neon-pink" />
              and cutting-edge technology.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Open to opportunities • Available for freelance projects
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;