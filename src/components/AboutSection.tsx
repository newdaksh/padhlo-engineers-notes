import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Instagram, Mail, MapPin, GraduationCap, Briefcase, Star } from "lucide-react"

export function AboutSection() {

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Passionate ECE student dedicated to sharing knowledge and helping fellow students excel in their academic journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center lg:text-left animate-scale-in">
            <div className="relative mb-8 lg:mb-0">
              <div className="relative w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 gradient-primary rounded-full blur-md opacity-50 animate-pulse"></div>
                <Avatar className="relative w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 border-4 border-primary/20 shadow-feature">
                  <AvatarImage 
                    src="/aboutme.png" 
                    alt="Profile Picture"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-3xl sm:text-4xl lg:text-6xl font-bold gradient-text">
                    DJ
                  </AvatarFallback>
                </Avatar>
              </div>
              
              {/* Name */}
              <div className="mt-6 mb-4 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">
                  DAKSH JAIN
                </h3>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center lg:justify-center">
                <Button 
                  variant="outline" 
                  className="rounded-full shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 px-6 py-2"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 px-6 py-2"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            {/* Professional Summary */}
            <Card className="gradient-card border-0 shadow-feature">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-primary p-2 rounded-lg flex-shrink-0">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">Professional Summary</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Dedicated Electronics & Communication Engineering student</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Creator of comprehensive study materials and notes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Educational Background */}
            <Card className="gradient-card border-0 shadow-feature">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-primary p-2 rounded-lg flex-shrink-0">
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">Educational Journey</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>B.Tech in Electronics & Communication Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Focus on advanced electronic systems and communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 text-sm sm:text-base">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-center sm:text-left">Available for collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}