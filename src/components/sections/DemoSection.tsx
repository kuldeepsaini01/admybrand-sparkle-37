import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Maximize } from "lucide-react"
import { useState } from "react"

export function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const dashboardItems = [
    { label: "Active Campaigns", value: "24", trend: "+12%" },
    { label: "Conversion Rate", value: "4.2%", trend: "+0.8%" },
    { label: "Revenue Generated", value: "$127K", trend: "+23%" },
    { label: "AI Optimization", value: "94%", trend: "+5%" }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="scroll-reveal">
          <div className="text-center mb-16 scroll-reveal">
            <SectionHeader
              badge="See It In Action"
              title="Watch ADmyBRAND AI Transform Your Marketing"
              description="See real-time AI optimization, automated campaign management, and intelligent insights in action."
            />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative group scroll-reveal">
              {/* Video/Demo Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border-2 border-primary/20 shadow-glow">
                {/* Simulated Video Interface */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm">
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white ml-0" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </motion.button>
                  </div>

                  {/* Simulated Dashboard Content */}
                  <div className="absolute inset-6 opacity-30">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {dashboardItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          className="glass-card p-4 rounded-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 0.7, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                          <div className="text-2xl font-bold gradient-text">{item.value}</div>
                          <div className="text-xs text-success">{item.trend}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Simulated Chart */}
                    <div className="glass-card p-4 rounded-lg h-32 flex items-end space-x-2">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-gradient-primary rounded-t"
                          style={{ height: `${Math.random() * 80 + 20}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.random() * 80 + 20}%` }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Video Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border/50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.button
                          className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </motion.button>
                        <Volume2 className="w-5 h-5" />
                        <div className="text-sm text-muted-foreground">2:47 / 5:23</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="text-sm text-muted-foreground">AI Dashboard Demo</div>
                        <Maximize className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-2 h-1 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: isPlaying ? "52%" : "47%" }}
                        transition={{ duration: isPlaying ? 3 : 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 scroll-reveal">
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    87%
                  </motion.div>
                  <div className="text-muted-foreground">Average Performance Increase</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    3x
                  </motion.div>
                  <div className="text-muted-foreground">Faster Campaign Setup</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    24/7
                  </motion.div>
                  <div className="text-muted-foreground">AI-Powered Optimization</div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12 scroll-reveal">
                <Button variant="gradient" size="lg">
                  Start Your Free Trial
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  No credit card required • 14-day free trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}