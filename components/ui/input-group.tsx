"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col relative",
      className
    )}
    {...props}
  />
))
InputGroup.displayName = "InputGroup"

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: "block-start" | "block-end" | "inline-start" | "inline-end"
  }
>(({ className, align = "inline-end", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center",
      {
        "justify-start": align === "inline-start" || align === "block-start",
        "justify-end": align === "inline-end" || align === "block-end",
      },
      className
    )}
    {...props}
  />
))
InputGroupAddon.displayName = "InputGroupAddon"

const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
))
InputGroupText.displayName = "InputGroupText"

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full px-4 py-2 bg-form-input-bg border border-form-input-border rounded-lg text-foreground placeholder:text-md placeholder:font-semibold placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:outline-none transition-all resize",
      className
    )}
    {...props}
  />
))
InputGroupTextarea.displayName = "InputGroupTextarea"

export { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea }
