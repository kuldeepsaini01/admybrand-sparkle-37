import { 
  Brain, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  BarChart3,
  Rocket,
  Users
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FeatureCard } from "@/components/ui/feature-card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze your data to provide actionable insights and predict market trends with 95% accuracy.",
    iconColor: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics", 
    description: "Stay ahead of the curve with AI that predicts customer behavior, market shifts, and optimal campaign timing.",
    iconColor: "text-secondary"
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Precision audience targeting using AI to identify and reach your ideal customers across all digital channels.",
    iconColor: "text-accent"
  },
  {
    icon: Zap,
    title: "Campaign Automation",
    description: "Automate your entire marketing workflow from content creation to campaign optimization and reporting.",
    iconColor: "text-warning"
  },
  {
    icon: BarChart3,
    title: "Real-time Reporting",
    description: "Live dashboards with real-time performance metrics, ROI tracking, and comprehensive analytics.",
    iconColor: "text-info"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, GDPR compliance, and advanced data protection.",
    iconColor: "text-success"
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "AI continuously optimizes your campaigns for maximum performance and ROI across all marketing channels.",
    iconColor: "text-primary"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless team workflows with role-based permissions, shared dashboards, and collaborative campaign management.",
    iconColor: "text-secondary"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <SectionHeader
            badge="Powerful Features"
            title="Everything you need to dominate digital marketing"
            description="Our comprehensive AI suite provides all the tools and insights you need to transform your marketing strategy and achieve unprecedented growth."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
              />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="inline-block p-8 glass-card rounded-2xl">
            <h3 className="text-2xl font-space-grotesk font-bold gradient-text mb-4">
              Ready to experience the future of marketing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of businesses already using ADmyBRAND AI Suite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gradient">
                Start Your Free Trial
              </button>
              <button className="btn-glass">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}