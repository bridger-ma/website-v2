import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function AnimatedHeading() {
	return (
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
	);
}

export default AnimatedHeading;
