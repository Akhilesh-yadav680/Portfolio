import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  color: "cyan" | "purple" | "green" | "pink";
}

const projects: Project[] = [
  {
    title: "Cryptoproctor",
    description: "Blockchain-Based Online Proctoring System with secure exam monitoring using Django, Blockchain, Web3, and IPFS with immutable logs for academic integrity.",
    tech: ["Django", "Blockchain", "Web3", "IPFS", "Python"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "cyan"
  },
  {
    title: "Resume Screening System",
    description: "AI-powered resume screening system that uses NLP and machine learning to automatically evaluate and rank resumes based on job requirements.",
    tech: ["Python", "NLP", "Scikit-Learn", "Flask", "TF-IDF"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "purple"
  },
  {
    title: "Bitcoin Price Tracker",
    description: "Cryptocurrency price tracking application with real-time updates, price alerts, and historical data analysis with interactive charts.",
    tech: ["Python", "Crypto APIs", "Flask", "JavaScript", "WebSocket"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "green"
  },
  {
    title: "GitHub Analyzer",
    description: "Comprehensive GitHub profile analyzer that provides insights into coding patterns, repository statistics, and developer productivity metrics.",
    tech: ["Python", "GitHub API", "Data Analysis", "Matplotlib", "Pandas"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "pink"
  },
  {
    title: "House Price Prediction",
    description: "Machine learning model for predicting house prices using regression algorithms, feature engineering, and data preprocessing techniques.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Regression"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "cyan"
  },
  {
    title: "PostPilot",
    description: "AI-powered email automation agent that schedules and sends personalized emails for consistent communication. Features smart scheduling and content optimization.",
    tech: ["Python", "AI", "Email APIs", "Automation", "NLP"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "purple"
  },
  {
    title: "SmartChef Pro",
    description: "Intelligent Telegram bot that suggests personalized recipes using available ingredients and AI. Features dietary preferences and nutritional analysis.",
    tech: ["Python", "Telegram API", "AI", "Recipe APIs", "NLP"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "green"
  },
  {
    title: "FinanceFriend",
    description: "Automated expense tracking Telegram bot for personal or business finances. Features smart categorization and financial insights with AI.",
    tech: ["Python", "Telegram API", "AI", "Finance APIs", "Data Analysis"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "pink"
  },
  {
    title: "InspireMailer",
    description: "AI-driven motivational email agent that delivers personalized inspirational content at preset times for daily motivation and productivity.",
    tech: ["Python", "AI", "Email APIs", "NLP", "Scheduling"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "cyan"
  },
  {
    title: "SkyCastBot",
    description: "Real-time weather forecast Telegram bot with AI-powered insights, weather alerts, and personalized recommendations based on conditions.",
    tech: ["Python", "Telegram API", "Weather APIs", "AI", "Location Services"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "purple"
  },
  {
    title: "Expenses Tracker",
    description: "Personal finance tracker built with Django, Pandas, and SQLite. Features expense categorization, budget tracking, and financial insights with data visualization.",
    tech: ["Django", "Pandas", "SQLite", "JavaScript", "Chart.js"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "green"
  },
  {
    title: "Job Insight Analyzer",
    description: "Data-driven job market analysis tool that scrapes job postings and provides insights on salary trends, skill requirements, and market demands.",
    tech: ["Python", "Web Scraping", "Data Analysis", "Pandas", "Seaborn"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "pink"
  },
  {
    title: "Weather App",
    description: "Real-time weather application with interactive maps, forecasts, and weather alerts. Features responsive design and location-based services.",
    tech: ["JavaScript", "Weather API", "HTML/CSS", "Chart.js", "Geolocation"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "cyan"
  },
  {
    title: "Fake News Detection",
    description: "NLP-based fake news detection system using machine learning algorithms to classify news articles and identify misinformation.",
    tech: ["Python", "NLP", "TensorFlow", "NLTK", "Classification"],
    github: "https://github.com/Akhilesh-yadav680",
    color: "purple"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "border-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_30px_theme(colors.neon.cyan/0.3)]",
      purple: "border-neon-purple hover:border-neon-purple hover:shadow-[0_0_30px_theme(colors.neon.purple/0.3)]",
      green: "border-neon-green hover:border-neon-green hover:shadow-[0_0_30px_theme(colors.neon.green/0.3)]",
      pink: "border-neon-pink hover:border-neon-pink hover:shadow-[0_0_30px_theme(colors.neon.pink/0.3)]",
    };
    return colorMap[color];
  };

  const getTextColor = (color: string) => {
    const textMap = {
      cyan: "text-neon-cyan",
      purple: "text-neon-purple",
      green: "text-neon-green",
      pink: "text-neon-pink",
    };
    return textMap[color];
  };

  return (
    <div className={`neon-card p-6 h-full flex flex-col group ${getColorClasses(project.color)}`}>
      <h3 className={`text-xl font-bold mb-3 ${getTextColor(project.color)}`}>
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-muted/20 text-muted-foreground border border-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3 mt-auto">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} className="mr-2" />
            Code
          </a>
        </Button>
        {project.demo && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            A showcase of some key projects that demonstrate my expertise in AI, machine learning, 
            full-stack development, and data science. Each project represents a solution to real-world challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* Additional Projects Note */}
          <div className="text-center">
            <div className="neon-card p-8 inline-block max-w-2xl">
              <h3 className="text-xl font-semibold mb-4 neon-text-cyan">
                Beyond the Showcase
              </h3>
              <p className="text-muted-foreground mb-6">
                These featured projects represent just a portion of my work. I have extensive experience 
                with numerous other real-time projects, ranging from enterprise applications to research 
                prototypes, showcasing my ability to deliver solutions across various domains and technologies.
              </p>
              <Button asChild className="btn-neon">
                <a href="https://github.com/Akhilesh-yadav680" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" />
                  Explore All Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;