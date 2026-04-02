"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const fieldVariants = cva(
  "grid gap-1.5",
  {
    variants: {
      orientation: {
        vertical: "",
        horizontal: "grid-flow-col items-center justify-between",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldVariants> {}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
)
Field.displayName = "Field"

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm tracking-widest text-foreground/70 mb-2 block",
      className
    )}
    {...props}
  />
))
FieldLabel.displayName = "FieldLabel"

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-xs text-muted-foreground",
      className
    )}
    {...props}
  />
))
FieldDescription.displayName = "FieldDescription"

const FieldError = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    errors?: Array<{ message?: string } | null | undefined>
  }
>(({ className, errors, ...props }, ref) => {
  if (!errors?.length) return null
  const error = errors[0]
  if (!error?.message) return null

  return (
    <div
      ref={ref}
      className={cn(
        "text-red-500 text-sm mt-1",
        className
      )}
      {...props}
    >
      {error.message}
    </div>
  )
})
FieldError.displayName = "FieldError"

const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid gap-4", className)}
    {...props}
  />
))
FieldGroup.displayName = "FieldGroup"

export { Field, FieldDescription, FieldError, FieldGroup, FieldLabel }
