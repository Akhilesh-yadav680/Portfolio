import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "akhileshyadav5361@gmail.com",
      href: "mailto:akhileshyadav5361@gmail.com",
      color: "cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/muddam-akhilesh-yadav-0a71a932b/",
      color: "purple"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/Akhilesh-yadav680",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "text-neon-cyan border-neon-cyan hover:bg-neon-cyan hover:shadow-[0_0_20px_theme(colors.neon.cyan/0.3)]",
      purple: "text-neon-purple border-neon-purple hover:bg-neon-purple hover:shadow-[0_0_20px_theme(colors.neon.purple/0.3)]",
      green: "text-neon-green border-neon-green hover:bg-neon-green hover:shadow-[0_0_20px_theme(colors.neon.green/0.3)]",
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="contact" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Ready to collaborate on your next project? I'm always excited to discuss new opportunities, 
            innovative ideas, and how we can create something amazing together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              return (
                <Card key={contact.label} className="neon-card p-6 text-center group">
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={`inline-flex p-4 rounded-full border-2 mb-4 transition-all duration-300 group-hover:text-background ${getColorClasses(contact.color)}`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Quick Contact CTA */}
          <div className="neon-card p-8">
            <h3 className="text-2xl font-bold mb-4 neon-text-cyan">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you need AI/ML solutions, full-stack development, or data analysis, 
              I'm here to help bring your ideas to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-neon">
                <a href="mailto:akhileshyadav5361@gmail.com">
                  <Mail size={20} className="mr-2" />
                  Send Email
                </a>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://www.linkedin.com/in/muddam-akhilesh-yadav-0a71a932b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} className="mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background"
              >
                <a href="/resume/Akhilesh_Yadav_Resume.pdf" download="Akhilesh_Yadav_Resume.pdf">
                  <Download size={20} className="mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Professional Statement */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              "Innovation distinguishes between a leader and a follower." - Steve Jobs
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Let's innovate together and create technology that makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;