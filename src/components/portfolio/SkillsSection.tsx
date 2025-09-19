import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "languages" | "frameworks" | "tools";
  color: "cyan" | "purple" | "green" | "pink";
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "languages", color: "cyan" },
  { name: "JavaScript", level: 90, category: "languages", color: "purple" },
  { name: "Java", level: 85, category: "languages", color: "green" },
  { name: "C", level: 80, category: "languages", color: "pink" },
  { name: "HTML/CSS", level: 95, category: "languages", color: "cyan" },
  
  // Frameworks & Libraries
  { name: "Django", level: 90, category: "frameworks", color: "purple" },
  { name: "React", level: 85, category: "frameworks", color: "green" },
  { name: "PyTorch", level: 88, category: "frameworks", color: "pink" },
  { name: "TensorFlow", level: 85, category: "frameworks", color: "cyan" },
  { name: "Scikit-Learn", level: 92, category: "frameworks", color: "purple" },
  { name: "NumPy", level: 95, category: "frameworks", color: "green" },
  { name: "Pandas", level: 93, category: "frameworks", color: "pink" },
  
  // Tools & Technologies
  { name: "MySQL", level: 87, category: "tools", color: "cyan" },
  { name: "OpenCV", level: 85, category: "tools", color: "purple" },
  { name: "Tableau", level: 82, category: "tools", color: "green" },
  { name: "Matplotlib", level: 90, category: "tools", color: "pink" },
  { name: "Seaborn", level: 88, category: "tools", color: "cyan" },
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  const getColorClass = (color: string) => {
    const colorMap = {
      cyan: "border-neon-cyan text-neon-cyan",
      purple: "border-neon-purple text-neon-purple",
      green: "border-neon-green text-neon-green",
      pink: "border-neon-pink text-neon-pink",
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className={`font-medium ${getColorClass(skill.color)}`}>
          {skill.name}
        </span>
        <span className="text-sm text-muted-foreground font-mono">
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar h-3">
        <div
          className="skill-progress h-full"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categorizeSkills = (category: string) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="neon-card p-6">
              <h3 className="text-2xl font-bold mb-6 neon-text-cyan">
                Programming Languages
              </h3>
              {categorizeSkills("languages").map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>

            {/* Frameworks & Libraries */}
            <div className="neon-card p-6">
              <h3 className="text-2xl font-bold mb-6 neon-text-purple">
                Frameworks & Libraries
              </h3>
              {categorizeSkills("frameworks").map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>

            {/* Tools & Technologies */}
            <div className="neon-card p-6">
              <h3 className="text-2xl font-bold mb-6 neon-text-green">
                Tools & Technologies
              </h3>
              {categorizeSkills("tools").map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 text-center">
            <div className="neon-card p-8 inline-block">
              <p className="text-lg text-muted-foreground mb-4">
                <span className="neon-text-cyan font-semibold">Specialized in:</span> Machine Learning, 
                Deep Learning, Web Development, Data Analysis, and Building Scalable Applications
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["AI/ML", "Full-Stack", "Data Science", "Computer Vision", "Web3", "Real-time Systems"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 rounded-full border border-neon-cyan/30 text-neon-cyan text-sm font-medium bg-neon-cyan/5 hover:bg-neon-cyan/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;