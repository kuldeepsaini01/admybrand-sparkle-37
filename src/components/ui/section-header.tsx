import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string
  title: string
  description?: string
  centered?: boolean
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, badge, title, description, centered = true, ...props }, ref) => {
    return (
      <div
        className={cn(
          "space-y-4",
          centered && "text-center",
          className
        )}
        ref={ref}
        {...props}
      >
        {badge && (
          <div className={cn(
            "inline-block",
            centered && "mx-auto"
          )}>
            <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
              {badge}
            </span>
          </div>
        )}
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold tracking-tight">
          <span className="gradient-text">{title}</span>
        </h2>
        
        {description && (
          <p className={cn(
            "text-lg text-muted-foreground max-w-3xl leading-relaxed",
            centered && "mx-auto"
          )}>
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader }