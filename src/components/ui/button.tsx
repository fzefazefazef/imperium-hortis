import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Variantes Empire Romain
        imperial: "bg-gradient-to-r from-imperial-gold/20 to-roman-amber/15 border border-imperial-gold/40 text-imperial-gold hover:bg-gradient-to-r hover:from-imperial-gold/30 hover:to-roman-amber/25 hover:border-imperial-gold/60 hover:shadow-imperial backdrop-blur-sm transition-all duration-700",
        bronze: "bg-gradient-to-r from-bronze-deep/25 to-copper-warm/20 border border-bronze-deep/50 text-antique-brass hover:bg-gradient-to-r hover:from-bronze-deep/35 hover:to-copper-warm/30 hover:border-copper-warm/70 hover:shadow-bronze backdrop-blur-sm transition-all duration-700",
        luxury: "bg-transparent border border-ivory-marble/30 text-ivory-marble hover:bg-imperial-gold/10 hover:border-imperial-gold/50 backdrop-blur-sm transition-all duration-500",
        minimal: "bg-imperial-gold/20 text-ivory-marble border border-imperial-gold/40 hover:bg-imperial-gold/30 hover:shadow-glow transition-all duration-500 backdrop-blur-sm",
        "hero-imperial": "bg-transparent border border-imperial-gold/40 text-imperial-gold hover:bg-imperial-gold/15 hover:border-imperial-gold/70 hover:shadow-glow backdrop-blur-sm transition-imperial duration-700",
        "hero-bronze": "bg-bronze-deep/20 text-antique-brass border border-bronze-deep/50 hover:bg-bronze-deep/30 hover:shadow-bronze transition-imperial duration-700 backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-base",
        icon: "h-10 w-10",
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
