export const themeColors = {
  primary: {
    DEFAULT: "#3B82F6", // Blue
    hover: "#2563EB",
  },
  secondary: {
    DEFAULT: "#8B5CF6", // Purple
    hover: "#7C3AED",
  },
  accent: {
    DEFAULT: "#06B6D4", // Cyan
    hover: "#0891B2",
  },
  background: {
    dark: "#000000",
    card: "rgba(17, 25, 40, 0.75)", // Dark blue with transparency for glassmorphism
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#94A3B8",
  },
  glow: {
    primary: "0 0 20px rgba(59, 130, 246, 0.5)",
    secondary: "0 0 20px rgba(139, 92, 246, 0.5)",
    accent: "0 0 20px rgba(6, 182, 212, 0.5)",
  },
} as const

export const gradients = {
  primary: "linear-gradient(to right, #3B82F6, #8B5CF6, #06B6D4)",
  glow: "linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5))",
  text: "linear-gradient(to right, #60A5FA, #A78BFA, #67E8F9)",
} as const

export const animations = {
  hover: "transition-all duration-300 ease-in-out",
  gradient: "animate-gradient bg-clip-text text-transparent bg-[length:200%_auto]",
  glow: "transition-shadow duration-300",
} as const

