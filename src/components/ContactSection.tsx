import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Send, MessageCircle, Calendar, Globe } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "realdivyanshsingh@gmail.com",
      link: "mailto:realdivyanshsingh@gmail.com",
      gradient: "from-primary-500 to-primary-600",
      description: "Best way to reach me"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7380398812",
      link: "tel:+917380398812",
      gradient: "from-primary-600 to-primary-700",
      description: "Available 9 AM - 6 PM IST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Greater Noida, UP, India",
      link: "#",
      gradient: "from-primary-400 to-primary-500",
      description: "UTC +5:30"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Destroyerg0d",
      link: "https://github.com/Destroyerg0d",
      gradient: "from-gray-600 to-gray-700",
      description: "View my code"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Amazing Together?
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a technical co-founder, have a SaaS idea, or want to collaborate 
            on innovative projects, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Globe className="w-8 h-8" />
                Get In Touch
              </h3>
              <p className="text-white/90 leading-relaxed mb-8 text-lg">
                I'm always excited to discuss new SaaS opportunities, technical partnerships, 
                or innovative project ideas. With experience building platforms that serve millions, 
                let's explore how we can create something impactful together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => window.open(info.link, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-white/70 mb-1">{info.label}</p>
                        <p className="font-bold text-white group-hover:text-white/90 transition-colors duration-300 mb-1">
                          {info.value}
                        </p>
                        <p className="text-xs text-white/60">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Quick Actions
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="elegant" 
                  className="flex-1 bg-white text-primary-700 hover:bg-white/90 font-semibold"
                  onClick={() => window.open('mailto:realdivyanshsingh@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold"
                  onClick={() => window.open('https://github.com/Destroyerg0d', '_blank')}
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/30 transition-all duration-500 rounded-2xl overflow-hidden">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
                <Send className="w-8 h-8" />
                Send a Message
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Tell me about your project, idea, or how we can collaborate.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-8 pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 transition-colors duration-300 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 transition-colors duration-300 h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white font-medium">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 transition-colors duration-300 h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, idea, or collaboration opportunity..."
                  rows={6}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 transition-colors duration-300 resize-none"
                />
              </div>
              
              <Button variant="elegant" size="lg" className="w-full bg-white text-primary-700 hover:bg-white/90 font-semibold text-base py-3">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
              
              <p className="text-white/70 text-sm text-center">
                I typically respond within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-20 pt-12 border-t border-white/20">
          <p className="text-white/90 text-lg mb-4">
            © 2024 Divyansh Singh. Crafting digital experiences with passion.
          </p>
          <p className="text-white/70">
            Built with React, TypeScript, and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;