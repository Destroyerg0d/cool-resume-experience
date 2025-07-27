import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Shield, 
  Globe, 
  Wrench, 
  TrendingUp,
  Bot,
  Blocks
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "Python", level: 90, color: "professional-blue" },
      { name: "JavaScript", level: 85, color: "professional-blue-light" },
      { name: "C/C++", level: 80, color: "professional-blue-dark" }
    ],
    gradient: "from-professional-blue to-professional-blue-light"
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Firebase", level: 85, color: "professional-blue-light" },
      { name: "API Development", level: 80, color: "professional-blue" },
      { name: "Database Design", level: 75, color: "professional-blue-dark" }
    ],
    gradient: "from-professional-blue-light to-professional-blue"
  },
  {
    title: "Security & Automation",
    icon: <Shield className="w-6 h-6" />,
    skills: [
      { name: "SQL Injection (SQLi)", level: 85, color: "professional-blue" },
      { name: "Cross-Site Scripting (XSS)", level: 80, color: "professional-blue-light" },
      { name: "UI Path & Selenium", level: 90, color: "professional-blue-dark" }
    ],
    gradient: "from-professional-blue-dark to-red-500"
  },
  {
    title: "Web3 & Blockchain",
    icon: <Blocks className="w-6 h-6" />,
    skills: [
      { name: "Smart Contracts", level: 75, color: "professional-blue-light" },
      { name: "Cryptocurrency", level: 80, color: "professional-blue" },
      { name: "Blockchain Fundamentals", level: 85, color: "professional-blue-dark" }
    ],
    gradient: "from-professional-blue to-professional-blue-light"
  },
  {
    title: "Digital Marketing",
    icon: <TrendingUp className="w-6 h-6" />,
    skills: [
      { name: "Facebook Ads", level: 90, color: "professional-blue" },
      { name: "Google Ads", level: 85, color: "professional-blue-light" },
      { name: "E-commerce Strategy", level: 95, color: "professional-success" }
    ],
    gradient: "from-professional-blue to-green-500"
  },
  {
    title: "Development Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Git & GitHub", level: 85, color: "professional-blue-light" },
      { name: "VS Code", level: 90, color: "professional-blue" },
      { name: "React/React Native", level: 80, color: "professional-blue-dark" }
    ],
    gradient: "from-professional-blue-dark to-orange-500"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-professional-gray-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-professional-blue/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-professional-blue-light/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-professional bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-professional-gray max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, security, blockchain, and digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="group bg-card/80 backdrop-blur-sm border-border hover:border-professional-blue/50 transition-all duration-500 hover:shadow-medium hover:scale-105"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg group-hover:text-professional-blue transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge variant="outline" className={`text-${skill.color} border-${skill.color}/30`}>
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className={`h-2 bg-secondary/50`}
                      style={{
                        '--progress-background': `hsl(var(--${skill.color}))`,
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional tools section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-professional-blue">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Git", "GitHub", "Firebase", "React", "React Native", "VS Code", "Krita", "GIMP", 
              "Pycharm", "BurpSuit", "NameCheap", "Shopify", "Google Analytics", "Amazon Azure", 
              "Google Cloud", "RDP's", "PacketStream", "ComboCards", "LeadingCards", "Stripe", 
              "Paypal", "Razorpay"
            ].map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-secondary/30 hover:bg-professional-blue/20 transition-all duration-300 hover:scale-105 hover:text-professional-blue cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;