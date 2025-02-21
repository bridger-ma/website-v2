"use client";
import { motion } from "framer-motion";
import { LogoAnimation } from "@/components/LogoAnimation";
import { AnimatedHeading } from "./components/AnimatedHeading";
import { CTAButtons } from "./components/CTAButtons";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import { socialLinks } from "@/mocks";

export default function Hero() {
	return (
		<section
			id="hero"
			className="container mx-auto px-4 py-12 sm:py-20 min-h-screen flex flex-col items-center justify-between sm:justify-center text-center overflow-hidden"
		>
			<LogoAnimation />
			<AnimatedHeading />

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
			>
				Pioneering the future of business through AI-driven solutions and
				innovative digital strategies.
			</motion.p>

			<CTAButtons />

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="w-full z-20"
			>
				<div className="flex justify-center space-x-4">
					{socialLinks.map((social, index) => (
						<SocialMediaIcon key={social.name} {...social} index={index} />
					))}
				</div>
			</motion.div>
		</section>
	);
}
