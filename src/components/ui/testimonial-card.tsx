import * as React from "react"
import { Star } from "lucide-react"
import { GlassCard } from "./glass-card"
import { cn } from "@/lib/utils"

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, name, role, company, content, rating, avatar, ...props }, ref) => {
    return (
      <GlassCard
        variant="elevated"
        className={cn("h-full", className)}
        ref={ref}
        {...props}
      >
        <div className="flex flex-col space-y-4 h-full">
          {/* Rating */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < rating ? "text-warning fill-warning" : "text-muted-foreground/30"
                )}
              />
            ))}
          </div>
          
          {/* Content */}
          <blockquote className="text-foreground leading-relaxed flex-grow">
            "{content}"
          </blockquote>
          
          {/* Author */}
          <div className="flex items-center space-x-3 pt-4 border-t border-glass-border">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
              {avatar ? (
                <img 
                  src={avatar} 
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <span className="text-white font-semibold text-lg">
                  {name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <div className="font-semibold text-foreground">{name}</div>
              <div className="text-sm text-muted-foreground">
                {role} at {company}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }