import { SectionHeader } from "@/components/ui/section-header"
import { PricingCard } from "@/components/ui/pricing-card"

const pricingPlans = [
  {
    title: "Starter",
    price: "$49",
    period: "month",
    description: "Perfect for small businesses getting started with AI marketing",
    features: [
      "Up to 5 AI-powered campaigns",
      "Basic analytics dashboard", 
      "Email marketing automation",
      "Social media scheduling",
      "Standard support",
      "5 team members"
    ],
    popular: false
  },
  {
    title: "Professional",
    price: "$149",
    period: "month", 
    description: "Advanced features for growing businesses and marketing teams",
    features: [
      "Unlimited AI campaigns",
      "Advanced predictive analytics",
      "Multi-channel automation",
      "A/B testing & optimization",
      "Priority support",
      "15 team members",
      "Custom integrations",
      "API access"
    ],
    popular: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "month",
    description: "Tailored solutions for large organizations with complex needs",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "Dedicated account manager",
      "White-label solutions",
      "24/7 phone support",
      "Unlimited team members",
      "Advanced security features",
      "Custom reporting"
    ],
    popular: false,
    ctaText: "Contact Sales"
  }
]

export function PricingSection() {
  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <SectionHeader
            badge="Simple Pricing"
            title="Choose the perfect plan for your business"
            description="Transparent pricing with no hidden fees. Start free and scale as you grow. All plans include our core AI features."
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.title}
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                ctaText={plan.ctaText}
                onSelect={() => {
                  // Handle plan selection
                  console.log(`Selected ${plan.title} plan`)
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Money Back Guarantee */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="inline-block p-6 glass-card rounded-xl">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-success/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">30-Day Money Back Guarantee</div>
                <div className="text-sm text-muted-foreground">Try risk-free with full refund if not satisfied</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}