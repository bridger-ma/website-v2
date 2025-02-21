"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Project } from "@/lib/types";

interface PortfolioProps {
	projects: Project[];
}

export function Portfolio({ projects }: PortfolioProps) {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<section id="portfolio" className="py-20 bg-gray-900">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="Our Portfolio"
					description="Explore our successful projects and see how we've helped businesses transform their digital landscape."
				/>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-black p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2"
							onClick={() => setSelectedProject(project)}
						>
							<h3 className="text-2xl font-semibold mb-3 text-white">
								{project.title}
							</h3>
							<p className="text-gray-400 mb-4">{project.description}</p>
							<div className="flex justify-between items-center">
								<span className="text-cyan-500 text-sm">
									Click to learn more
								</span>
								<svg
									className="w-6 h-6 text-cyan-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
					))}
				</div>
			</div>
			{selectedProject && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
					onClick={() => setSelectedProject(null)}
				>
					<div
						className="bg-gray-900 p-8 rounded-lg max-w-md"
						onClick={(e) => e.stopPropagation()}
					>
						<h3 className="text-2xl font-semibold mb-4 text-white">
							{selectedProject.title}
						</h3>
						<p className="text-gray-400 mb-6">
							{selectedProject.fullDescription}
						</p>
						<button
							className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
							onClick={() => setSelectedProject(null)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</section>
	);
}

export default Portfolio;
