import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Zap, Calendar, Award } from "lucide-react";

const experiences = [
  {
    title: "Amazon Hackathon",
    subtitle: "Machine Learning Model for Text Extraction from Images",
    year: "2024",
    type: "Hackathon Winner",
    description: "Developed an advanced ML model to extract text from images, applying cutting-edge image processing techniques to solve real-world problems.",
    achievements: [
      "Built ML model for text extraction",
      "Applied advanced image processing",
      "Solved real-world text recognition challenges",
      "Demonstrated technical innovation"
    ],
    icon: <Trophy className="w-6 h-6" />,
    gradient: "from-yellow-400 to-orange-500",
    technologies: ["Machine Learning", "Computer Vision", "Python", "Image Processing"]
  },
  {
    title: "IIT Guwahati Code Club Hackathon",
    subtitle: "Real-Time Social Media App with End-to-End Encryption",
    year: "2024", 
    type: "Hackathon Winner",
    description: "Built a real-time social media app with end-to-end encryption for secure messaging and file sharing, incorporating a North Indian theme.",
    achievements: [
      "Developed real-time messaging system",
      "Implemented end-to-end encryption",
      "Created secure file sharing",
      "Designed cultural theme integration"
    ],
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-neon-cyan to-blue-500",
    technologies: ["Real-time Communication", "Encryption", "Social Media", "Security"]
  }
];

const education = {
  degree: "Bachelor of Computer Science and Engineering",
  institution: "Amity University Uttar Pradesh",
  location: "Greater Noida, Uttar Pradesh",
  year: "2026",
  description: "Pursuing comprehensive education in computer science fundamentals, software engineering, and emerging technologies."
};

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven track record in competitive programming and innovative problem-solving
          </p>
        </div>

        {/* Hackathon Experiences */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-neon-cyan">Hackathon Achievements</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="group bg-gradient-card border-border hover:border-neon-purple/50 transition-all duration-500 hover:shadow-glow-purple hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${exp.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-neon-purple/50 text-neon-purple mb-2">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.year}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-neon-purple transition-colors duration-300 mb-2">
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-neon-cyan mb-3">
                    {exp.subtitle}
                  </CardDescription>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-neon-purple">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 text-neon-cyan" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-neon-cyan">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-secondary/50 hover:bg-neon-cyan/20 transition-colors duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-neon-purple">Education</h3>
          <Card className="max-w-4xl mx-auto bg-gradient-card border-border hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-glow-cyan">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-neon-cyan mb-2">
                {education.degree}
              </CardTitle>
              <CardDescription className="text-lg font-medium text-foreground">
                {education.institution}
              </CardDescription>
              <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground">
                <span>{education.location}</span>
                <span>•</span>
                <span>Expected {education.year}</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {education.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;