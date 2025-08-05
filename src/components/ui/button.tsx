import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-glass-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Modern variants for ADmyBRAND
        gradient: "bg-gradient-primary text-white font-semibold shadow-glow hover:shadow-lg transform hover:-translate-y-1",
        glass: "glass-card text-foreground font-medium backdrop-blur-md hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transform hover:-translate-y-1",
        hero: "bg-gradient-hero text-white font-bold shadow-glow hover:shadow-xl transform hover:-translate-y-2 hover:scale-105",
        "outline-glow": "border-2 border-primary/50 bg-transparent text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-glow transform hover:-translate-y-1",
        neon: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black shadow-lg hover:shadow-glow transform hover:-translate-y-1",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-xl text-sm",
        sm: "h-9 px-4 py-2 rounded-lg text-xs",
        lg: "h-14 px-10 py-3 rounded-xl text-base",
        xl: "h-16 px-12 py-4 rounded-2xl text-lg",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
