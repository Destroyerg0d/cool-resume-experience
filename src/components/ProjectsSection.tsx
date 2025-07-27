import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, Coins, Cpu } from "lucide-react";

const projects = [
  {
    title: "Client E-commerce Store",
    description: "Opened and ran an e-commerce store for a client through my YouTube channel, generating profit in the Indian market. Successfully transitioned the store to the USA e-commerce model, continuing to make profit.",
    icon: <ShoppingCart className="w-8 h-8" />,
    technologies: ["E-commerce", "Digital Marketing", "YouTube", "USA Market"],
    achievements: [
      "Generated profit in Indian market",
      "Successfully transitioned to USA model",
      "Leveraged YouTube for marketing",
      "Optimized Facebook & Google Ads"
    ],
    gradient: "from-neon-cyan to-blue-500",
    year: "2023 - Present"
  },
  {
    title: "Custom Cryptocurrency Token",
    description: "Created a custom cryptocurrency token for educational purposes, learning blockchain fundamentals and smart contract development during the exciting period of crypto growth.",
    icon: <Coins className="w-8 h-8" />,
    technologies: ["Blockchain", "Smart Contracts", "Cryptocurrency", "Solidity"],
    achievements: [
      "Developed custom token",
      "Learned blockchain fundamentals",
      "Smart contract development",
      "Crypto trading exploration"
    ],
    gradient: "from-neon-purple to-purple-500",
    year: "2021"
  },
  {
    title: "NTCC Projects",
    description: "Managed two cutting-edge NTCC projects focused on real-time communication (NVIDIA Broadcasting) and brain-machine interfaces (Neuralink), exploring advanced technologies.",
    icon: <Cpu className="w-8 h-8" />,
    technologies: ["NVIDIA Broadcasting", "Neuralink", "Real-time Communication", "Brain-Machine Interface"],
    achievements: [
      "NVIDIA Broadcasting implementation",
      "Neuralink interface development",
      "Real-time communication systems",
      "Advanced technology exploration"
    ],
    gradient: "from-neon-pink to-pink-500",
    year: "2022-2023"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning e-commerce, blockchain, and cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-glow-cyan hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl group-hover:text-neon-cyan transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="mt-2 border-neon-purple/50 text-neon-purple">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-neon-cyan">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-neon-purple rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-neon-purple">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-secondary/50 hover:bg-neon-cyan/20 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="cyber" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </Button>
                  <Button variant="neon" size="sm">
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