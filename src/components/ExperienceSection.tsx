import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Zap, Calendar, Award, GraduationCap, Users, Code } from "lucide-react";

const experiences = [
  {
    title: "Amazon Hackathon",
    subtitle: "Machine Learning Model for Text Extraction from Images",
    year: "2024",
    type: "Hackathon Participant",
    description: "Participated in Amazon's competitive hackathon, developing an advanced ML model to extract text from images using cutting-edge image processing techniques.",
    achievements: [
      "Developed ML model for text extraction",
      "Applied advanced image processing techniques",
      "Participated in competitive coding environment",
      "Gained experience in hackathon dynamics"
    ],
    icon: <Trophy className="w-6 h-6" />,
    gradient: "from-orange-400 to-orange-600",
    technologies: ["Machine Learning", "Computer Vision", "Python", "Image Processing"]
  },
  {
    title: "IIT Guwahati Code Club Hackathon",
    subtitle: "Real-Time Social Media App with End-to-End Encryption",
    year: "2024", 
    type: "Hackathon Participant",
    description: "Participated in IIT Guwahati's hackathon, building a real-time social media app with end-to-end encryption for secure messaging and file sharing.",
    achievements: [
      "Built real-time messaging system",
      "Implemented end-to-end encryption",
      "Created secure file sharing functionality",
      "Collaborated in competitive environment"
    ],
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-blue-400 to-blue-600",
    technologies: ["Real-time Communication", "Encryption", "Social Media", "Security"]
  }
];

const education = {
  degree: "Bachelor of Computer Science and Engineering",
  institution: "Amity University Uttar Pradesh",
  location: "Greater Noida, Uttar Pradesh",
  year: "2026",
  description: "Pursuing comprehensive education in computer science fundamentals, software engineering, and emerging technologies with focus on practical application and innovation."
};

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Learning Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Active participation in competitive programming and hackathons, building innovative solutions under pressure
          </p>
        </div>

        {/* Hackathon Experiences */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center gap-3">
            <Code className="w-8 h-8 text-primary-600" />
            Hackathon Participation
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-primary-300 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] overflow-hidden rounded-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {exp.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-primary-200 text-primary-700 bg-primary-50 mb-2 font-medium">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
                        <Calendar className="w-4 h-4" />
                        {exp.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary-600 transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary-700">
                      {exp.subtitle}
                    </CardDescription>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 p-8 pt-0">
                  <div>
                    <h4 className="font-semibold mb-4 text-primary-700 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-primary-700 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300">
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
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary-600" />
            Education
          </h3>
          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-primary-300 transition-all duration-500 hover:shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="text-center p-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-3">
                {education.degree}
              </CardTitle>
              <CardDescription className="text-xl font-semibold text-primary-700 mb-3">
                {education.institution}
              </CardDescription>
              <div className="flex items-center justify-center gap-2 text-gray-600 font-medium">
                <span>{education.location}</span>
                <span>•</span>
                <span>Expected {education.year}</span>
              </div>
            </CardHeader>
            <CardContent className="text-center p-8 pt-0">
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg">
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