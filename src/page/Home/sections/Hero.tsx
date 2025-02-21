"use client";
import { Button } from "@/components/ui/button";
import { FaRocket, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import SecialMediaIcons from "@/components/SocialMediaIcons";

export default function Hero() {
	return (
		<section
			id="hero"
			className="container mx-auto px-4 py-12 sm:py-20 min-h-screen flex flex-col items-center justify-between sm:justify-center text-center overflow-hidden"
		>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 0.5,
					type: "spring",
					stiffness: 260,
					damping: 20,
				}}
				className="w-48 h-48 mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center relative overflow-hidden shadow-lg"
			>
				<div className="absolute sm:static inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 animate-spin-slow"></div>
				<div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
					<div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
					<div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-purple-500/30 to-transparent"></div>
					<div className="absolute sm:relative inset-0 flex items-center justify-center">
						<div className="w-3/4 h-3/4 rounded-full border-2 border-cyan-500/30 flex items-center justify-center animate-pulse">
							<div className="w-1/2 h-1/2 rounded-full border-2 border-purple-500/30 flex items-center justify-center animate-pulse">
								<div className="w-1/4 h-1/4 rounded-full bg-blue-500/30 animate-pulse"></div>
							</div>
						</div>
					</div>
					<span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 relative z-10 drop-shadow-lg">
						BRIDGER
					</span>
				</div>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient"
			>
				<div className="h-[7.5rem] sm:h-[9rem] md:h-[12rem] flex flex-col justify-center">
					<TypeAnimation
						sequence={[
							"Digital Transformation",
							1000,
							"AI-Driven Solutions",
							1000,
							"Innovative Strategies",
							1000,
						]}
						wrapper="span"
						speed={50}
						repeat={Number.POSITIVE_INFINITY}
					/>
					<span>Reimagined</span>
				</div>
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
			>
				Pioneering the future of business through AI-driven solutions and
				innovative digital strategies.
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className="w-full flex flex-col sm:flex-row gap-8 items-center justify-center mb-12"
			>
				<Button
					size="lg"
					className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-10 py-7 text-xl font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:opacity-90 flex items-center space-x-3 border-2 border-transparent hover:border-white relative overflow-hidden group"
				>
					<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
					<span className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-150 group-hover:translate-x-[-50%] duration-700 z-20 bg-white opacity-10"></span>
					<FaRocket className="text-2xl mr-2 relative z-30" />
					<span className="relative z-30">Get a Free Consultation</span>
				</Button>
				<Button
					size="lg"
					variant="outline"
					className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-10 py-7 text-xl font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center space-x-3 relative overflow-hidden group"
				>
					<span className="absolute inset-0 w-full h-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
					<span className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-150 group-hover:translate-x-[-50%] duration-700 z-20 bg-white opacity-10"></span>
					<FaInfoCircle className="text-2xl mr-2 relative z-30" />
					<span className="relative z-30">Learn More</span>
				</Button>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="w-full z-20"
			>
				<div className="flex justify-center space-x-4">
					<SecialMediaIcons />
				</div>
			</motion.div>
		</section>
	);
}
