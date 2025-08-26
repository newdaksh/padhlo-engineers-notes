import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { BookOpen, ExternalLink, FileText, Star } from "lucide-react"

export function NotesSection() {
  const { toast } = useToast()

  const handleNotesAccess = (notesType: string, link: string) => {
    toast({
      title: "📚 Access Required!",
      description: "You have to request access to 'DAKSH JAIN' for accessing these MATERIALS! ⚡",
      duration: 3000,
    })
    
    // Redirect after showing the message
    setTimeout(() => {
      window.open(link, '_blank')
    }, 1500)
  }

  return (
    <section id="notes" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Quality <span className="text-primary">Study Materials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated notes and resources to help you succeed in your B.Tech journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Notes Link Box */}
          <Card className="group shadow-feature hover:shadow-glow transition-all duration-500 animate-scale-in border-0 gradient-card">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 gradient-primary p-4 rounded-full w-fit animate-float">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold mb-2">
                Core Engineering Subjects
              </CardTitle>
              <CardDescription className="text-base">
                Complete notes for Mathematics, Physics, Chemistry, and fundamental engineering courses
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <span>100+ Pages</span>
                </div>
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full group"
                onClick={() => handleNotesAccess('Core Notes', 'https://drive.google.com/your-core-notes-link')}
              >
                Access Core Notes
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Button>
              
              <p className="text-xs text-muted-foreground">
                Updated regularly • PDF Format • Mobile Friendly
              </p>
            </CardContent>
          </Card>

          {/* Second Notes Link Box */}
          <Card className="group shadow-feature hover:shadow-glow transition-all duration-500 animate-scale-in border-0 gradient-card" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 bg-secondary p-4 rounded-full w-fit animate-float" style={{ animationDelay: '1s' }}>
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold mb-2">
                Branch Specific Notes
              </CardTitle>
              <CardDescription className="text-base">
                Specialized notes for CSE, ECE, Mechanical, Civil, and other engineering branches
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Expert Curated</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>All Branches</span>
                </div>
              </div>
              
              <Button 
                variant="accent" 
                size="lg" 
                className="w-full group"
                onClick={() => handleNotesAccess('Branch Notes', 'https://drive.google.com/your-branch-notes-link')}
              >
                Browse Branch Notes
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Button>
              
              <p className="text-xs text-muted-foreground">
                Latest Syllabus • Practical Examples • Industry Relevant
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full text-secondary font-medium">
            <Star className="h-5 w-5" />
            <span>100% Free • No Registration Required • Instant Download</span>
          </div>
        </div>
      </div>
    </section>
  )
}