import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "realdivyanshsingh@gmail.com",
      link: "mailto:realdivyanshsingh@gmail.com",
      gradient: "from-professional-blue to-professional-blue-light"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7380398812",
      link: "tel:+917380398812",
      gradient: "from-professional-blue-dark to-professional-blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Greater Noida, UP, India",
      link: "#",
      gradient: "from-professional-blue-light to-professional-blue"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Destroyerg0d",
      link: "https://github.com/Destroyerg0d",
      gradient: "from-professional-gray to-professional-blue"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-professional-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-professional-blue-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to collaborate on innovative SaaS projects or discuss exciting opportunities? 
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-white/90 leading-relaxed mb-8">
                I'm always open to discussing new SaaS opportunities, innovative projects, 
                or partnerships. With experience building successful platforms, let's explore how we can work together!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border-white/20 hover:border-professional-blue/50 transition-all duration-500 hover:shadow-medium hover:scale-105 cursor-pointer"
                  onClick={() => window.open(info.link, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white/70">{info.label}</p>
                        <p className="font-semibold text-white group-hover:text-professional-blue-light transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="professional" 
                  className="flex-1 bg-white text-professional-blue hover:bg-white/90"
                  onClick={() => window.open('mailto:realdivyanshsingh@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open('https://github.com/Destroyerg0d', '_blank')}
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-professional-blue/50 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
              <CardDescription className="text-white/90">
                Drop me a line and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-professional-blue transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-professional-blue transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-professional-blue transition-colors duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-professional-blue transition-colors duration-300 resize-none"
                />
              </div>
              
              <Button variant="professional" size="lg" className="w-full bg-white text-professional-blue hover:bg-white/90">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-white/90">
            © 2024 Divyansh Singh. Built with passion using React, TypeScript, and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;