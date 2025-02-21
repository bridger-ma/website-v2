"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { FAQItem } from "@/lib/types";

interface FAQProps {
	faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section
			id="faq"
			className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
			<div className="container mx-auto px-4 relative z-10">
				<SectionTitle
					title="Frequently Asked Questions"
					description="Find answers to common questions about digital transformation and our services."
				/>
				<div className="mt-12 max-w-3xl mx-auto">
					{faqs.map((faq, index) => (
						<GlassmorphicCard key={index} className="mb-4">
							<button
								className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
								onClick={() => toggleQuestion(index)}
							>
								<span className="text-lg font-semibold text-white">
									{faq.question}
								</span>
								<motion.span
									animate={{ rotate: openIndex === index ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<FaChevronDown className="text-cyan-500" />
								</motion.span>
							</button>
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
									>
										<p className="px-4 pb-4 text-gray-300">{faq.answer}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</GlassmorphicCard>
					))}
				</div>
			</div>
		</section>
	);
}
