"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const quickLinks = ["Services", "Portfolio", "About Us", "Contact"];

export default function Footer() {
	return (
		<footer className="bg-black py-20 overflow-hidden relative">
			<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
			<div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					<div className="bg-gradient-to-r from-blue-500/15 to-purple-500/15 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-center md:text-left"
						>
							<Link
								href="/"
								className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient"
							>
								Bridger
							</Link>
							<p className="text-gray-200 mt-4">
								Empowering businesses through innovative digital transformation
								solutions
							</p>
						</motion.div>
					</div>

					<div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 rounded-lg backdrop-blur-sm">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="space-y-4"
						>
							<h3 className="text-2xl font-semibold text-white">Quick Links</h3>
							<ul className="space-y-2">
								{quickLinks.map((item) => (
									<li key={item}>
										<Link
											href={`#${item.toLowerCase().replace(" ", "-")}`}
											className="text-gray-200 hover:text-cyan-400 transition-colors"
										>
											{item}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					</div>

					<div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg backdrop-blur-sm">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="space-y-6"
						>
							<h3 className="text-2xl font-semibold text-white">
								Connect With Us
							</h3>

							<div className="grid grid-cols-3 gap-4 max-w-xs mx-auto md:mx-0">
								<SocialMediaIcons />
							</div>
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="border-t border-white/10 pt-8 text-center"
				>
					<p className="text-gray-300">
						&copy; 2025 Bridger. All rights reserved.
					</p>
				</motion.div>
			</div>
		</footer>
	);
}
