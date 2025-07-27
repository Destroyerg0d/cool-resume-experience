import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone, ArrowRight, Star, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Divyansh Singh
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Greater Noida, Uttar Pradesh, India</span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Computer Science student & <span className="font-semibold bg-gradient-primary bg-clip-text text-transparent">SaaS Entrepreneur</span>. 
            Built successful platforms serving <span className="font-semibold text-primary-600">10K+ users</span> in 
            <span className="font-semibold text-primary-700"> Digital Marketing</span>, 
            <span className="font-semibold text-primary-600"> Blockchain</span>, and 
            <span className="font-semibold text-primary-500"> Automation</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button 
              variant="modern" 
              size="lg" 
              className="text-base px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="elegant" 
              size="lg" 
              className="text-base px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Github className="w-5 h-5" />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-3"
              onClick={() => window.open('tel:+917380398812', '_blank')}
            >
              <Phone className="w-5 h-5" />
              +91 7380398812
            </Button>
          </div>
          
          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">7+</h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            
            <div className="group bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2+</h3>
              <p className="text-gray-600 font-medium">Live SaaS Products</p>
            </div>
            
            <div className="group bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:scale-[1.02]">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-gray-600 font-medium">Users Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;