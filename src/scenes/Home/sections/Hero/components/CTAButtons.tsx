import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaRocket, FaInfoCircle } from "react-icons/fa";

export function CTAButtons() {
	return (
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
				<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
				<span className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-150 group-hover:translate-x-[-50%] duration-700 z-20 bg-white opacity-10" />
				<FaRocket className="text-2xl mr-2 relative z-30" />
				<span className="relative z-30">Get a Free Consultation</span>
			</Button>
			<Button
				size="lg"
				variant="outline"
				className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-10 py-7 text-xl font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center space-x-3 relative overflow-hidden group"
			>
				<span className="absolute inset-0 w-full h-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<span className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-150 group-hover:translate-x-[-50%] duration-700 z-20 bg-white opacity-10" />
				<FaInfoCircle className="text-2xl mr-2 relative z-30" />
				<span className="relative z-30">Learn More</span>
			</Button>
		</motion.div>
	);
}
export default CTAButtons;
