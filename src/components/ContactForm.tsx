import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MessageCircle, Send, User } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      })
      return
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    })

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or want to contribute? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-feature border-0 gradient-card animate-scale-in">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 gradient-hero p-4 rounded-full w-fit">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
              <CardDescription className="text-base">
                Send us a message and we'll respond as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="transition-smooth focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry, suggestion, or how we can help..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="transition-smooth focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all" />
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}