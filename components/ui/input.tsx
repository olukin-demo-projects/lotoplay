import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full px-4 py-2 bg-form-input-bg border border-form-input-border rounded-lg text-foreground placeholder:text-md placeholder:font-semibold placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:outline-none transition-all",
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
