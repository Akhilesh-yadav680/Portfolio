const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="neon-card p-8 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Data Science, Machine Learning, AI, and Full-Stack Developer with a keen eye for creating 
              innovative solutions that bridge the gap between complex data insights and user-friendly applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey in technology is driven by curiosity and the desire to solve real-world problems through code. 
              I specialize in building end-to-end applications that not only look great but also deliver powerful functionality 
              behind the scenes.
            </p>
            
            <div className="bg-muted/20 rounded-lg p-6 border border-neon-cyan/20">
              <p className="text-base text-muted-foreground font-medium">
                <span className="neon-text-cyan">💡 Key Highlight:</span> Beyond the projects showcased here, I have extensive 
                experience working on numerous real-time projects that demonstrate my practical expertise and hands-on approach 
                to solving complex technical challenges in production environments.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neon-card p-6 text-center">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2 neon-text-purple">AI & ML Expert</h3>
              <p className="text-muted-foreground">Building intelligent systems with PyTorch, TensorFlow, and Scikit-Learn</p>
            </div>
            
            <div className="neon-card p-6 text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 neon-text-green">Full-Stack Developer</h3>
              <p className="text-muted-foreground">Creating seamless web experiences with Django, React, and modern tools</p>
            </div>
            
            <div className="neon-card p-6 text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 neon-text-cyan">Data Scientist</h3>
              <p className="text-muted-foreground">Transforming raw data into actionable insights with advanced analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;