"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaSearch, FaLightbulb, FaChartLine } from "react-icons/fa";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import SectionTitle from "@/components/SectionTitle";
import { CaseStudy } from "@/lib/types";

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

	const nextCase = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
	};

	const prevCase = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length
		);
	};

	return (
		<section
			id="case-studies"
			className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 animate-pulse"></div>
			<div className="container mx-auto px-4 relative z-10">
				<SectionTitle
					title="Case Studies"
					description="Explore how we've helped businesses achieve their digital transformation goals."
				/>

				<div className="relative">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.5 }}
						>
							<GlassmorphicCard className="p-8">
								<div className="mb-6">
									<h3 className="text-3xl font-semibold mb-2 text-white">
										{caseStudies[currentIndex].client}
									</h3>
									<p className="text-cyan-400">
										Industry: {caseStudies[currentIndex].industry}
									</p>
								</div>
								<div className="grid md:grid-cols-3 gap-6">
									<CaseStudySection
										title="Challenge"
										content={caseStudies[currentIndex].challenge}
										icon={<FaSearch />}
									/>
									<CaseStudySection
										title="Solution"
										content={caseStudies[currentIndex].solution}
										icon={<FaLightbulb />}
									/>
									<CaseStudySection
										title="Results"
										content={caseStudies[currentIndex].results}
										icon={<FaChartLine />}
									/>
								</div>
							</GlassmorphicCard>
						</motion.div>
					</AnimatePresence>

					<button
						onClick={prevCase}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaChevronLeft />
					</button>
					<button
						onClick={nextCase}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700 transition-colors"
					>
						<FaChevronRight />
					</button>
				</div>

				<div className="flex justify-center mt-8">
					{caseStudies.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-4 h-4 rounded-full mx-2 transition-colors ${
								index === currentIndex
									? `bg-gradient-to-r ${caseStudies[index].color}`
									: "bg-gray-600 hover:bg-gray-500"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function CaseStudySection({
	title,
	content,
	icon,
}: {
	title: string;
	content: string;
	icon: React.ReactNode;
}) {
	return (
		<div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
			<h4 className="font-semibold text-lg mb-2 flex items-center">
				<span className="mr-2">{icon}</span>
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
					{title}
				</span>
			</h4>
			<p className="text-gray-300">{content}</p>
		</div>
	);
}
