import * as React from "react"
import { cva } from "class-variance-authority"
import Image from "next/image"
import { cn } from "@/lib/utils"

const videoContainerVariants = cva(
  "relative mb-6 transition-all duration-500 ease-in-out",
  {
    variants: {
      expanded: {
        true: "w-full",
        false: "ml-8 float-right w-[calc(41.666667%+40px)] md:w-[calc(41.666667%+40px)] lg:w-[calc(33.333333%+40px)]",
      },
    },
    defaultVariants: {
      expanded: false,
    },
  }
)

const videoWrapperVariants = cva(
  "relative border border-border/10 overflow-hidden shadow-2xl transition-all duration-500 ease-in-out cursor-pointer",
  {
    variants: {
      expanded: {
        true: "w-full scale-100",
        false: "hover:scale-[1.02]",
      },
    },
    defaultVariants: {
      expanded: false,
    },
  }
)

const videoImageVariants = cva(
  "object-cover transition-opacity duration-500 ease-in-out",
  {
    variants: {
      expanded: {
        true: "opacity-0",
        false: "opacity-100",
      },
    },
    defaultVariants: {
      expanded: false,
    },
  }
)

const videoElementVariants = cva(
  "absolute inset-0 object-cover transition-opacity duration-500 ease-in-out aspect-10/5 w-full",
  {
    variants: {
      expanded: {
        true: "opacity-100",
        false: "opacity-0",
      },
    },
    defaultVariants: {
      expanded: false,
    },
  }
)

const videoBackdropVariants = cva(
  "absolute -bottom-6 -left-6 -z-10 w-full h-full bg-primary/10 rounded-2xl border border-primary/20",
  {
    variants: {
      expanded: {
        true: "hidden",
        false: "",
      },
    },
    defaultVariants: {
      expanded: false,
    },
  }
)

export interface VideoContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  expanded: boolean
  children: React.ReactNode
}

export interface VideoWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  expanded: boolean
  children: React.ReactNode
}

export interface VideoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  expanded: boolean
  src: string
  alt: string
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
}

export interface VideoElementProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  expanded: boolean
}

export interface VideoBackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  expanded: boolean
}

export function VideoContainer({ expanded, className, children, ...props }: VideoContainerProps) {
  const [shouldFloat, setShouldFloat] = React.useState(!expanded)
  
  React.useEffect(() => {
    if (expanded) {
      // Remove float after transition completes (500ms)
      const timer = setTimeout(() => {
        setShouldFloat(false)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      // Add float back immediately when collapsing
      setShouldFloat(true)
    }
  }, [expanded])

  return (
    <div 
      className={cn(
        videoContainerVariants({ expanded }),
        shouldFloat && "float-right",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export function VideoWrapper({ expanded, className, children, ...props }: VideoWrapperProps) {
  return (
    <div className={cn(videoWrapperVariants({ expanded }), className)} {...props}>
      {children}
    </div>
  )
}

export function VideoImage({ expanded, className, src, alt, width, height, sizes, priority, ...props }: VideoImageProps) {
  return (
    <Image
      className={cn(videoImageVariants({ expanded }), className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      {...props}
    />
  )
}

export const VideoElement = React.forwardRef<HTMLVideoElement, VideoElementProps>(
  ({ expanded, className, ...props }, ref) => {
    return (
      <video
        ref={ref}
        className={cn(videoElementVariants({ expanded }), className)}
        {...props}
      />
    )
  }
)
VideoElement.displayName = "VideoElement"

export function VideoBackdrop({ expanded, className, ...props }: VideoBackdropProps) {
  return (
    <div className={cn(videoBackdropVariants({ expanded }), className)} {...props} />
  )
}
