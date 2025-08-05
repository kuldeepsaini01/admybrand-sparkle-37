import * as React from "react"
import { Check } from "lucide-react"
import { Button } from "./button"
import { GlassCard } from "./glass-card"
import { cn } from "@/lib/utils"

interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
  onSelect?: () => void
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ 
    className, 
    title, 
    price, 
    period, 
    description, 
    features, 
    popular = false, 
    ctaText = "Get Started",
    onSelect,
    ...props 
  }, ref) => {
    return (
      <GlassCard
        variant={popular ? "glow" : "elevated"}
        className={cn(
          "relative overflow-hidden",
          popular && "border-primary/50 scale-105",
          className
        )}
        ref={ref}
        {...props}
      >
        {popular && (
          <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium">
            Most Popular
          </div>
        )}
        
        <div className={cn("space-y-6", popular && "pt-8")}>
          <div className="space-y-2">
            <h3 className="text-2xl font-space-grotesk font-bold text-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground">
              {description}
            </p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-baseline space-x-1">
              <span className="text-4xl font-bold gradient-text">{price}</span>
              <span className="text-muted-foreground">/{period}</span>
            </div>
          </div>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button
            variant={popular ? "hero" : "gradient"}
            size="lg"
            className="w-full"
            onClick={onSelect}
          >
            {ctaText}
          </Button>
        </div>
      </GlassCard>
    )
  }
)
PricingCard.displayName = "PricingCard"

export { PricingCard }