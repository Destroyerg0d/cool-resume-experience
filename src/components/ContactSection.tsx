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
      gradient: "from-neon-cyan to-blue-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7380398812",
      link: "tel:+917380398812",
      gradient: "from-neon-purple to-purple-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Greater Noida, UP, India",
      link: "#",
      gradient: "from-neon-pink to-pink-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Destroyerg0d",
      link: "https://github.com/Destroyerg0d",
      gradient: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities? 
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm border-border hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-glow-cyan hover:scale-105 cursor-pointer"
                  onClick={() => window.open(info.link, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold group-hover:text-neon-cyan transition-colors duration-300">
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
              <h4 className="text-lg font-semibold text-neon-purple">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="cyber" 
                  className="flex-1"
                  onClick={() => window.open('mailto:realdivyanshsingh@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                <Button 
                  variant="neon"
                  onClick={() => window.open('https://github.com/Destroyerg0d', '_blank')}
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-purple/50 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-purple">Send a Message</CardTitle>
              <CardDescription>
                Drop me a line and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="bg-background/50 border-border focus:border-neon-cyan transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border focus:border-neon-cyan transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="bg-background/50 border-border focus:border-neon-cyan transition-colors duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="bg-background/50 border-border focus:border-neon-cyan transition-colors duration-300 resize-none"
                />
              </div>
              
              <Button variant="cyber" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Divyansh Singh. Built with passion using React, TypeScript, and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;