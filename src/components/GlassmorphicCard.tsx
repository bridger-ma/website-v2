import type React from "react";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

interface Props extends React.ComponentProps<"div"> {
	children: React.ReactNode;
	className?: string;
	glowColor?: "primary" | "secondary" | "accent";
	icon?: IconType;
	hoverEffect?: boolean;
}

export function GlassmorphicCard({
	children,
	className,
	glowColor = "primary",
	icon: Icon,
	hoverEffect = true,
	...props
}: Props) {
	const glowStyles = {
		primary: "hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
		secondary: "hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
		accent: "hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]",
	};

	return (
		<div
			{...props}
			className={cn(
				"relative p-6 rounded-lg",
				"bg-black backdrop-blur-lg",
				"border border-[rgba(255,255,255,0.05)]",
				"transition-all duration-300",
				hoverEffect && "hover:scale-105",
				glowStyles[glowColor],
				className
			)}
		>
			{Icon && (
				<div className="absolute top-4 right-4 text-2xl text-gray-400">
					<Icon />
				</div>
			)}
			{children}
		</div>
	);
}
