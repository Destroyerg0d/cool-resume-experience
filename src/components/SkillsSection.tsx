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
  Blocks,
  Zap,
  Target
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "Python", level: 90, color: "primary-500" },
      { name: "JavaScript", level: 85, color: "primary-600" },
      { name: "C/C++", level: 80, color: "primary-700" }
    ],
    gradient: "from-primary-500 to-primary-600"
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Firebase", level: 85, color: "primary-600" },
      { name: "API Development", level: 80, color: "primary-500" },
      { name: "Database Design", level: 75, color: "primary-700" }
    ],
    gradient: "from-primary-600 to-primary-700"
  },
  {
    title: "Security & Automation",
    icon: <Shield className="w-6 h-6" />,
    skills: [
      { name: "SQL Injection (SQLi)", level: 85, color: "primary-500" },
      { name: "Cross-Site Scripting (XSS)", level: 80, color: "primary-600" },
      { name: "UI Path & Selenium", level: 90, color: "primary-700" }
    ],
    gradient: "from-red-500 to-red-600"
  },
  {
    title: "Web3 & Blockchain",
    icon: <Blocks className="w-6 h-6" />,
    skills: [
      { name: "Smart Contracts", level: 75, color: "primary-600" },
      { name: "Cryptocurrency", level: 80, color: "primary-500" },
      { name: "Blockchain Fundamentals", level: 85, color: "primary-700" }
    ],
    gradient: "from-orange-500 to-orange-600"
  },
  {
    title: "Digital Marketing",
    icon: <TrendingUp className="w-6 h-6" />,
    skills: [
      { name: "Facebook Ads", level: 90, color: "success" },
      { name: "Google Ads", level: 85, color: "primary-600" },
      { name: "E-commerce Strategy", level: 95, color: "primary-500" }
    ],
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Development Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Git & GitHub", level: 85, color: "primary-600" },
      { name: "VS Code", level: 90, color: "primary-500" },
      { name: "React/React Native", level: 80, color: "primary-700" }
    ],
    gradient: "from-blue-500 to-blue-600"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100/50 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-50/80 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-50/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning full-stack development, security, blockchain, and digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] rounded-2xl overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <CardHeader className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 p-6 pt-0">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                      <Badge variant="outline" className="text-primary-700 border-primary-200 bg-primary-50 font-medium">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-100"
                      />
                      <div 
                        className="absolute top-0 left-0 h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional tools section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center justify-center gap-3">
            <Zap className="w-6 h-6 text-primary-600" />
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              "Git", "GitHub", "Firebase", "React", "React Native", "VS Code", "Krita", "GIMP", 
              "Pycharm", "BurpSuit", "NameCheap", "Shopify", "Google Analytics", "Amazon Azure", 
              "Google Cloud", "RDP's", "PacketStream", "ComboCards", "LeadingCards", "Stripe", 
              "Paypal", "Razorpay"
            ].map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gray-100 hover:bg-primary-100 hover:text-primary-700 transition-all duration-300 hover:scale-105 cursor-default font-medium px-4 py-2"
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