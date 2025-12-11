import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-md border border-nautilus-shell-light/30 bg-nautilus-cream-dark/50 px-4 py-3 text-base text-nautilus-slate transition-all placeholder:text-nautilus-slate/40 focus-visible:outline-none focus-visible:border-nautilus-shell-primary focus-visible:ring-2 focus-visible:ring-nautilus-shell-primary/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
