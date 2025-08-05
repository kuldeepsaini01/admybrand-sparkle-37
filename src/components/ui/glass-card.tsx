import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "glass-card backdrop-blur-md border border-glass-border/20 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-white/10 to-white/5",
        elevated: "bg-gradient-to-br from-white/15 to-white/8 shadow-hover",
        interactive: "bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 hover:-translate-y-1 cursor-pointer",
        glow: "bg-gradient-to-br from-white/10 to-white/5 shadow-glow",
      },
      size: {
        default: "p-6 rounded-xl",
        sm: "p-4 rounded-lg",
        lg: "p-8 rounded-2xl",
        xl: "p-12 rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(glassCardVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard, glassCardVariants }