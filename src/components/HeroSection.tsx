import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-professional-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-professional-blue-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-professional bg-clip-text text-transparent">
            Divyansh Singh
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-4 text-professional-gray">
            <MapPin className="w-5 h-5" />
            <span>Greater Noida, Uttar Pradesh, India</span>
          </div>
          
          <p className="text-xl md:text-2xl text-professional-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science student & <span className="text-professional-blue font-semibold">SaaS Entrepreneur</span>. 
            Built successful platforms in <span className="text-professional-blue-dark font-semibold">Digital Marketing</span>, 
            <span className="text-professional-blue font-semibold"> Blockchain</span>, and <span className="text-professional-blue-light font-semibold">Automation</span>. 
            Passionate about building scalable solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="professional" size="lg">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-5 h-5" />
              View Projects
            </Button>
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5" />
              +91 7380398812
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-professional-blue transition-all duration-300 hover:shadow-medium">
              <h3 className="text-2xl font-bold text-professional-blue mb-2">7+</h3>
              <p className="text-professional-gray">Projects Completed</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-professional-blue-light transition-all duration-300 hover:shadow-medium">
              <h3 className="text-2xl font-bold text-professional-blue-light mb-2">2+</h3>
              <p className="text-professional-gray">Live SaaS Products</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-professional-blue-dark transition-all duration-300 hover:shadow-medium">
              <h3 className="text-2xl font-bold text-professional-blue-dark mb-2">2026</h3>
              <p className="text-professional-gray">Expected Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;