"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Testimonial } from "@/lib/types";

interface TestimonialsProps {
	testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, 10000);

		return () => clearInterval(timer);
	}, []);

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	return (
		<section
			id="testimonials"
			className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
			<div className="container mx-auto px-4 relative z-10">
				<SectionTitle
					title="Client Testimonials"
					description="Hear from our satisfied clients about their experience working with Bridger."
				/>
				<div className="relative max-w-4xl mx-auto">
					<GlassmorphicCard className="p-8">
						<AnimatePresence mode="wait" initial={false} custom={direction}>
							<motion.div
								key={currentIndex}
								custom={direction}
								initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
								transition={{ duration: 0.3 }}
								className="flex flex-col md:flex-row items-center gap-8"
							>
								<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500 flex-shrink-0">
									<img
										src={testimonials[currentIndex].image || "/placeholder.svg"}
										alt={testimonials[currentIndex].name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-grow">
									<FaQuoteLeft className="text-4xl text-cyan-500 mb-4" />
									<p className="text-white text-lg mb-4">
										{testimonials[currentIndex].content}
									</p>
									<h3 className="text-xl font-semibold text-cyan-400">
										{testimonials[currentIndex].name}
									</h3>
									<p className="text-gray-400">
										{testimonials[currentIndex].position}
									</p>
								</div>
							</motion.div>
						</AnimatePresence>
					</GlassmorphicCard>
					<button
						onClick={handlePrev}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaChevronLeft />
					</button>
					<button
						onClick={handleNext}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaChevronRight />
					</button>
				</div>
				<div className="flex justify-center mt-8">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full mx-2 transition-colors ${
								index === currentIndex
									? "bg-cyan-500"
									: "bg-gray-600 hover:bg-gray-500"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
