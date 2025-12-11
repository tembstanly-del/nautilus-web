import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nautilus-shell-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-nautilus-shell-primary text-white shadow-lg hover:bg-nautilus-shell-deep hover:shadow-xl",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600",
        outline:
          "border-2 border-nautilus-shell-primary bg-transparent text-nautilus-shell-primary hover:bg-nautilus-shell-primary hover:text-white",
        secondary:
          "bg-nautilus-shell-light text-nautilus-slate shadow-sm hover:bg-nautilus-shell-primary hover:text-white",
        ghost: "hover:bg-nautilus-shell-pale hover:text-nautilus-slate",
        link: "text-nautilus-shell-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 px-6",
        lg: "h-12 px-10",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
