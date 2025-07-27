import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BookOpen, GraduationCap, ShoppingCart, Coins, Cpu, Users, Star, TrendingUp, Award } from "lucide-react";
import reviewProMaxImg from "@/assets/reviewpromax-screenshot.png";
import studyHubImg from "@/assets/studyhub-screenshot.png";

const projects = [
  {
    title: "ReviewProMax",
    subtitle: "Book Review SaaS Platform",
    description: "A comprehensive SaaS platform connecting authors with verified ARC readers to generate authentic book reviews. Built through Facebook and Google advertising with a million+ reader community delivering honest, authentic reviews.",
    url: "reviewpromax.com",
    image: reviewProMaxImg,
    icon: <BookOpen className="w-8 h-8" />,
    technologies: ["SaaS", "Digital Marketing", "Community Building", "Review Management", "Facebook Ads", "Google Ads"],
    achievements: [
      "1M+ Active ARC Readers",
      "10K+ Books Reviewed",
      "Verified reader community",
      "4.9 Average Rating",
      "24h Response Time"
    ],
    gradient: "from-purple-500 to-blue-500",
    year: "2024 - Active",
    status: "Live SaaS",
    metrics: "1M+ Users",
    featured: true
  },
  {
    title: "TheStudyHub",
    subtitle: "Premium Study Environment Platform",
    description: "A SaaS platform providing premium library facilities with 24/7 access, comfortable seating, and peaceful study environments designed for serious students seeking the perfect study atmosphere.",
    url: "theStudyhublib.site",
    image: studyHubImg,
    icon: <GraduationCap className="w-8 h-8" />,
    technologies: ["SaaS", "Booking System", "Facility Management", "Student Services", "Premium Experience"],
    achievements: [
      "Premium library facilities",
      "24/7 access system",
      "Comfortable study environment",
      "Student-focused design",
      "Growing community"
    ],
    gradient: "from-blue-500 to-cyan-500",
    year: "2024 - Active",
    status: "Live SaaS",
    metrics: "Growing Community",
    featured: true
  },
  {
    title: "Client E-commerce Store",
    description: "Opened and ran an e-commerce store for a client through my YouTube channel, generating profit in the Indian market. Successfully transitioned the store to the USA e-commerce model, continuing profitability.",
    icon: <ShoppingCart className="w-8 h-8" />,
    technologies: ["E-commerce", "Digital Marketing", "YouTube Marketing", "International Expansion"],
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
    description: "Created a custom cryptocurrency token for educational purposes, learning blockchain fundamentals and smart contract development during the exciting period of crypto innovation.",
    icon: <Coins className="w-8 h-8" />,
    technologies: ["Blockchain", "Smart Contracts", "Cryptocurrency", "Solidity", "DeFi"],
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
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Successful SaaS platforms and innovative solutions serving thousands of users worldwide
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-primary-300 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Website Screenshot */}
              {project.image && (
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} website screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              
              <CardHeader className="relative p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="border-primary-200 text-primary-700 bg-primary-50 mb-2 font-medium">
                      {project.status}
                    </Badge>
                    <div className="text-sm text-gray-500 font-medium">
                      {project.year}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  {project.subtitle && (
                    <CardDescription className="text-lg font-semibold text-primary-700">
                      {project.subtitle}
                    </CardDescription>
                  )}
                  {project.url && (
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-primary-100 text-primary-700 border-primary-200">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {project.url}
                      </Badge>
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {project.metrics}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardDescription className="text-base leading-relaxed text-gray-600 mt-4">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 p-8 pt-0">
                <div>
                  <h4 className="font-semibold mb-4 text-primary-700 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-primary-700 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="modern" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                  <Button variant="elegant" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] overflow-hidden rounded-xl"
              >
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="border-gray-300 text-gray-600 bg-gray-50 text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-3 h-3" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
