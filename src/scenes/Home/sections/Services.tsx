"use client";

import { FaRobot, FaCogs, FaGlobe } from "react-icons/fa";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useState } from "react";
import { Service } from "@/lib/types";
import { Icon } from "@/components/Icon";

interface ServicesProps {
	services: Service[];
}

export default function Services({ services }: ServicesProps) {
	const [expandedService, setExpandedService] = useState<number | null>(null);

	return (
		<section
			id="services"
			className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
			<div className="container mx-auto px-4 relative z-10">
				<SectionTitle
					title="Our Services"
					description="Empowering your business with cutting-edge solutions tailored for the digital age."
				/>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{services.map((service, index) => (
						<div key={index}>
							<GlassmorphicCard
								className={`h-full transition-all duration-300 ${
									expandedService === index ? "scale-105 shadow-2xl" : ""
								}`}
								glowColor={
									index === 0 ? "primary" : index === 1 ? "secondary" : "accent"
								}
								onClick={() =>
									setExpandedService(expandedService === index ? null : index)
								}
							>
								<motion.div
									className="relative flex items-center justify-center w-24 h-24 mb-6 mx-auto"
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.3 }}
								>
									<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-50 blur-md"></div>
									<div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-black">
										<Icon name={service.icon} className="text-4xl text-white" />
									</div>
								</motion.div>
								<h3 className="text-2xl font-semibold mb-4 text-white text-center">
									{service.title}
								</h3>
								<p className="text-gray-300 text-center mb-4">
									{service.description}
								</p>
								{expandedService === index && (
									<motion.ul
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										transition={{ duration: 0.3 }}
										className="text-gray-300 text-sm"
									>
										{service.details.map((detail, idx) => (
											<li key={idx} className="mb-2 flex items-center">
												<span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
												{detail}
											</li>
										))}
									</motion.ul>
								)}
								<motion.button
									className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{expandedService === index ? "Less Details" : "More Details"}
								</motion.button>
							</GlassmorphicCard>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
