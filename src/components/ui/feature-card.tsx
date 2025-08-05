import * as React from "react"
import { LucideIcon } from "lucide-react"
import { GlassCard } from "./glass-card"
import { cn } from "@/lib/utils"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon: Icon, title, description, iconColor = "text-primary", ...props }, ref) => {
    return (
      <GlassCard
        variant="interactive"
        className={cn("group", className)}
        ref={ref}
        {...props}
      >
        <div className="flex flex-col items-start space-y-4">
          <div className={cn(
            "p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300",
            iconColor
          )}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-space-grotesk font-semibold text-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </GlassCard>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }