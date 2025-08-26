import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Instagram, Mail, MapPin, GraduationCap, Briefcase, Code, Star } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Electronics & Communication",
    "Circuit Design", 
    "Signal Processing",
    "Embedded Systems",
    "VLSI Design",
    "Programming"
  ]

  const achievements = [
    "B.Tech ECE Student",
    "Notes Creator & Curator",
    "Academic Excellence",
    "Technical Writing"
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate ECE student dedicated to sharing knowledge and helping fellow students excel in their academic journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left animate-scale-in">
            <div className="relative mb-8 lg:mb-0">
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 gradient-primary rounded-full blur-md opacity-50 animate-pulse"></div>
                <Avatar className="relative w-80 h-80 border-4 border-primary/20 shadow-feature">
                  <AvatarImage 
                    src="/placeholder.svg" 
                    alt="Profile Picture"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold gradient-text">
                    YN
                  </AvatarFallback>
                </Avatar>
              </div>
              
              {/* Floating Social Links */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 flex gap-3">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full shadow-elegant hover:shadow-glow hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full shadow-elegant hover:shadow-glow hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full shadow-elegant hover:shadow-glow hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('mailto:your-email@example.com', '_blank')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-8 animate-fade-in">
            {/* Professional Summary */}
            <Card className="gradient-card border-0 shadow-feature">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-primary p-2 rounded-lg">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Summary</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Dedicated Electronics & Communication Engineering student</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Creator of comprehensive study materials and notes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Passionate about helping fellow students succeed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Strong foundation in circuit design and signal processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Educational Background */}
            <Card className="gradient-card border-0 shadow-feature">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-primary p-2 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Educational Journey</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>B.Tech in Electronics & Communication Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Focus on advanced electronic systems and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Active in academic research and project development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Committed to continuous learning and knowledge sharing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Skills & Expertise */}
            <Card className="gradient-card border-0 shadow-feature">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-primary p-2 rounded-lg">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Skills & Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="gradient-card border-0 shadow-feature">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-primary p-2 rounded-lg">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Key Achievements</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {achievements.map((achievement, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="px-3 py-1 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>Available for collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}