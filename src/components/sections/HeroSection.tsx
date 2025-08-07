import { ArrowRight, PlayCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import heroImage from "@/assets/hero-image.jpg"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-gradient-primary rounded-full opacity-20 blur-xl" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-24 h-24 bg-gradient-secondary rounded-full opacity-20 blur-xl" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full opacity-20 blur-xl" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Marketing Suite</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-bold tracking-tight leading-tight">
                <span className="gradient-text">Transform Your</span>
                <br />
                <span className="text-foreground">Marketing with</span>
                <br />
                <span className="gradient-text-secondary">AI Intelligence</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                ADmyBRAND AI Suite revolutionizes digital marketing with cutting-edge artificial intelligence. 
                Automate campaigns, predict trends, and maximize ROI with unprecedented precision.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <PlayCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10X</div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-sm text-muted-foreground">Automation Rate</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <GlassCard variant="glow" className="p-4">
              <img
                src={heroImage}
                alt="ADmyBRAND AI Dashboard"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 animate-float">
                <GlassCard size="sm" className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Live Analytics</span>
                  </div>
                </GlassCard>
              </div>
              
              <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: "1s" }}>
                <GlassCard size="sm" className="p-3">
                  <div className="flex items-center space-x-2">
                    <div className="text-lg font-bold text-primary">+247%</div>
                    <span className="text-xs">Conversions</span>
                  </div>
                </GlassCard>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}