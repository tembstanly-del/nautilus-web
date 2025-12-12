import * as React from "react"
import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border border-nautilus-shell-light/30 bg-nautilus-cream-dark/50 px-4 py-3 text-base text-nautilus-slate transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-nautilus-slate placeholder:text-nautilus-slate/40 focus-visible:outline-none focus-visible:border-nautilus-shell-primary focus-visible:ring-2 focus-visible:ring-nautilus-shell-primary/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
