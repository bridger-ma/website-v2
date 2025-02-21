"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
	FaArrowRight,
	FaLightbulb,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogPost } from "@/lib/types";

interface BlogProps {
	blogPosts: BlogPost[];
}

export default function Blog({ blogPosts }: BlogProps) {
	const [hoveredId, setHoveredId] = useState<number | null>(null);
	const sliderRef = useRef<Slider>(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		prevArrow: <></>,
		nextArrow: <></>,
	};

	const goToPrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	const goToNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	return (
		<section
			id="blog"
			className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 animate-pulse"></div>
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-12 flex items-center justify-center"
				>
					<FaLightbulb className="text-4xl text-cyan-500 mr-4" />
					<SectionTitle
						title="Insights & Resources"
						description="Stay up-to-date with the latest trends and insights in digital transformation and technology."
					/>
				</motion.div>
				<div className="relative">
					<Slider ref={sliderRef} {...settings} className="mt-12">
						{blogPosts.map((post) => (
							<motion.div
								key={post.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								onMouseEnter={() => setHoveredId(post.id)}
								onMouseLeave={() => setHoveredId(null)}
								className="px-2"
							>
								<GlassmorphicCard className="h-full flex flex-col">
									<div className="relative overflow-hidden rounded-t-lg">
										<img
											src={post.image || "/placeholder.svg"}
											alt={post.title}
											className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
										/>
										<div className="absolute top-0 left-0 bg-cyan-500 text-black px-3 py-1 text-sm font-semibold">
											{post.category}
										</div>
									</div>
									<div className="p-6 flex-grow">
										<h3 className="text-xl font-semibold mb-2 text-white">
											{post.title}
										</h3>
										<p className="text-gray-400 mb-4">{post.excerpt}</p>
										<div className="flex justify-between items-center">
											<span className="text-sm text-gray-500">{post.date}</span>
											<Link
												href={`/blog/${post.id}`}
												className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
											>
												Read More
												<motion.span
													animate={{ x: hoveredId === post.id ? 5 : 0 }}
													transition={{ duration: 0.2 }}
												>
													<FaArrowRight className="ml-2" />
												</motion.span>
											</Link>
										</div>
									</div>
								</GlassmorphicCard>
							</motion.div>
						))}
					</Slider>
					<button
						onClick={goToPrev}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-600 transition-colors z-10"
					>
						<FaChevronLeft />
					</button>
					<button
						onClick={goToNext}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-600 transition-colors z-10"
					>
						<FaChevronRight />
					</button>
				</div>
			</div>
			<div className="text-center mt-12">
				<Link
					href="/blog"
					className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
				>
					View All Posts
				</Link>
			</div>
		</section>
	);
}
