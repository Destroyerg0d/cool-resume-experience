import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BookOpen, GraduationCap, ShoppingCart, Coins, Cpu, Users } from "lucide-react";

const projects = [
  {
    title: "ReviewProMax",
    subtitle: "Book Review SaaS Platform",
    description: "A comprehensive SaaS platform connecting authors with verified ARC readers to generate authentic book reviews. Built through Facebook and Google advertising with a million+ reader community.",
    url: "reviewpromax.com",
    icon: <BookOpen className="w-8 h-8" />,
    technologies: ["SaaS", "Digital Marketing", "Community Building", "Review Management"],
    achievements: [
      "1M+ Active ARC Readers",
      "10K+ Books Reviewed",
      "Verified reader community",
      "4.9 Average Rating"
    ],
    gradient: "from-purple-500 to-blue-500",
    year: "2024 - Active",
    status: "Live SaaS",
    metrics: "1M+ Users"
  },
  {
    title: "TheStudyHub",
    subtitle: "Premium Study Environment Platform",
    description: "A SaaS platform providing premium library facilities with 24/7 access, comfortable seating, and peaceful study environments designed for serious students.",
    url: "theStudyhublib.site",
    icon: <GraduationCap className="w-8 h-8" />,
    technologies: ["SaaS", "Booking System", "Facility Management", "Student Services"],
    achievements: [
      "Premium library facilities",
      "24/7 access system",
      "Comfortable study environment",
      "Student-focused design"
    ],
    gradient: "from-blue-500 to-cyan-500",
    year: "2024 - Active",
    status: "Live SaaS",
    metrics: "Growing Community"
  },
  {
    title: "Client E-commerce Store",
    description: "Opened and ran an e-commerce store for a client through my YouTube channel, generating profit in the Indian market. Successfully transitioned the store to the USA e-commerce model.",
    icon: <ShoppingCart className="w-8 h-8" />,
    technologies: ["E-commerce", "Digital Marketing", "YouTube", "USA Market"],
    achievements: [
      "Generated profit in Indian market",
      "Successfully transitioned to USA model",
      "Leveraged YouTube for marketing",
      "Optimized Facebook & Google Ads"
    ],
    gradient: "from-green-500 to-emerald-500",
    year: "2023 - Present",
    status: "Ongoing",
    metrics: "Profitable"
  },
  {
    title: "Custom Cryptocurrency Token",
    description: "Created a custom cryptocurrency token for educational purposes, learning blockchain fundamentals and smart contract development during the crypto growth period.",
    icon: <Coins className="w-8 h-8" />,
    technologies: ["Blockchain", "Smart Contracts", "Cryptocurrency", "Solidity"],
    achievements: [
      "Developed custom token",
      "Learned blockchain fundamentals",
      "Smart contract development",
      "Crypto trading exploration"
    ],
    gradient: "from-yellow-500 to-orange-500",
    year: "2021",
    status: "Educational",
    metrics: "Learning Project"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-professional bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-professional-gray max-w-3xl mx-auto">
            Successful SaaS platforms and innovative solutions spanning multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border hover:border-professional-blue/50 transition-all duration-500 hover:shadow-medium hover:scale-[1.02] overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="relative">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="border-professional-blue/50 text-professional-blue mb-2">
                      {project.status}
                    </Badge>
                    <div className="text-sm text-professional-gray">
                      {project.year}
                    </div>
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-xl group-hover:text-professional-blue transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  {project.subtitle && (
                    <CardDescription className="text-base font-medium text-professional-blue-dark mb-2">
                      {project.subtitle}
                    </CardDescription>
                  )}
                  {project.url && (
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-professional-blue/10 text-professional-blue">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {project.url}
                      </Badge>
                      <Badge variant="secondary" className="bg-professional-success/10 text-professional-success">
                        {project.metrics}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-professional-blue">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-professional-gray">
                        <div className="w-1.5 h-1.5 bg-professional-blue rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-professional-blue-dark">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-secondary/50 hover:bg-professional-blue/20 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="professional" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;