import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent animate-pulse-glow">
            Divyansh Singh
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Greater Noida, Uttar Pradesh, India</span>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science student with expertise in <span className="text-neon-cyan">Digital Marketing</span>, 
            <span className="text-neon-purple"> Blockchain</span>, and <span className="text-neon-pink">Automation</span>. 
            Passionate about building innovative solutions and exploring cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="cyber" size="lg" className="animate-glow">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="neon" size="lg">
              <Github className="w-5 h-5" />
              View Projects
            </Button>
            <Button variant="glow" size="lg">
              <Phone className="w-5 h-5" />
              +91 7380398812
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-neon-cyan transition-all duration-300 hover:shadow-glow-cyan">
              <h3 className="text-2xl font-bold text-neon-cyan mb-2">5+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-neon-purple transition-all duration-300 hover:shadow-glow-purple">
              <h3 className="text-2xl font-bold text-neon-purple mb-2">2+</h3>
              <p className="text-muted-foreground">Hackathons Participated</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-neon-pink transition-all duration-300">
              <h3 className="text-2xl font-bold text-neon-pink mb-2">2026</h3>
              <p className="text-muted-foreground">Expected Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;