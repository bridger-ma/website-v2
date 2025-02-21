import type React from "react"
import { cn } from "@/lib/utils"

interface Props {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function HolographicContainer({ children, className, intensity = "medium" }: Props) {
  return (
    <div
      className={cn(
        "relative p-4 rounded-xl overflow-hidden",
        "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10",
        "backdrop-blur-sm border border-white/10",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]",
        className,
      )}
    >
      {children}
    </div>
  )
}

