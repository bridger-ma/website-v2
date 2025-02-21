"use server";

import {
	FaSearch,
	FaArrowRight,
	FaShareAlt,
	FaTags,
	FaCalendar,
	FaUser,
	FaClock,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/api";

interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	category: string;
	date: string;
	image: string;
	author: string;
	readTime: string;
	tags: string[];
}

interface BlogContentProps {
	initialPosts: BlogPost[];
	categories: string[];
	allTags: string[];
	searchTerm: string;
	selectedCategory: string;
	currentPage: number;
}

export default async function BlogContent({
	initialPosts,
	categories,
	allTags,
	searchTerm,
	selectedCategory,
	currentPage,
}: BlogContentProps) {
	const postsPerPage = 5;
	const filteredPosts = await getBlogPosts(
		searchTerm,
		selectedCategory,
		currentPage
	);
	const totalPosts = await getBlogPosts(searchTerm, selectedCategory);
	const totalPages = Math.ceil(totalPosts.length / postsPerPage);

	async function handleSearch(formData: FormData) {
		"use server";
		const search = formData.get("search") as string;
		return { search };
	}

	async function handleCategoryChange(formData: FormData) {
		"use server";
		const category = formData.get("category") as string;
		return { category };
	}

	return (
		<div className="container mx-auto px-6 py-12 bg-gray-900 text-gray-100">
			<section className="mb-16">
				<div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
					<h1 className="text-3xl font-semibold mb-6 text-cyan-400">
						Featured Post
					</h1>
					<article className="grid md:grid-cols-2 gap-8">
						<div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
							<Image
								src={initialPosts[0].image || "/placeholder.svg"}
								alt={initialPosts[0].title}
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 hover:scale-105"
								priority
							/>
						</div>
						<div className="flex flex-col justify-between">
							<div>
								<h2 className="text-2xl font-semibold mb-4 text-white hover:text-cyan-400 transition-colors duration-300">
									{initialPosts[0].title}
								</h2>
								<p className="text-gray-400 mb-4">{initialPosts[0].excerpt}</p>
							</div>
							<div className="flex justify-between items-center">
								<time
									dateTime={initialPosts[0].date}
									className="text-sm text-gray-500"
								>
									{initialPosts[0].date}
								</time>
								<Link
									href={`/blog/${initialPosts[0].id}`}
									className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group"
								>
									Read More
									<FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
								</Link>
							</div>
						</div>
					</article>
				</div>
			</section>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
				<main className="md:col-span-2">
					<div className="mb-8">
						<form
							action={async (formData: FormData) => {
								await handleSearch(formData);
							}}
						>
							<div className="relative">
								<input
									type="text"
									name="search"
									placeholder="Search articles..."
									aria-label="Search articles"
									className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
									defaultValue={searchTerm}
								/>
								<button
									type="submit"
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
								>
									<FaSearch aria-hidden="true" />
								</button>
							</div>
						</form>
					</div>

					<nav
						className="mb-12 flex flex-wrap gap-4"
						aria-label="Blog categories"
					>
						<form
							action={async (formData: FormData) => {
								await handleCategoryChange(formData);
							}}
						>
							{categories.map((category) => (
								<button
									key={category}
									type="submit"
									name="category"
									value={category}
									className={`px-4 py-2 rounded-full text-sm ${
										selectedCategory === category
											? "bg-cyan-500 text-white"
											: "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
									} transition-colors duration-200`}
								>
									{category}
								</button>
							))}
						</form>
					</nav>

					<div className="space-y-12">
						{filteredPosts.map((post) => (
							<article
								key={post.id}
								className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1"
							>
								<div className="flex flex-col md:flex-row gap-8">
									<div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
										<Image
											src={post.image || "/placeholder.svg"}
											alt={post.title}
											layout="fill"
											objectFit="cover"
											className="transition-transform duration-300 hover:scale-105"
										/>
										<div className="absolute top-0 left-0 bg-cyan-500 text-black px-3 py-1 text-sm font-semibold">
											{post.category}
										</div>
									</div>
									<div className="w-full md:w-2/3 flex flex-col justify-between">
										<div>
											<h2 className="text-xl font-semibold mb-2 text-white hover:text-cyan-400 transition-colors duration-300">
												{post.title}
											</h2>
											<p className="text-gray-400 mb-4">{post.excerpt}</p>
										</div>
										<div className="flex flex-wrap justify-between items-center">
											<div className="flex items-center space-x-4 text-sm text-gray-500">
												<span className="flex items-center">
													<FaUser className="mr-1" aria-hidden="true" />{" "}
													{post.author}
												</span>
												<span className="flex items-center">
													<FaClock className="mr-1" aria-hidden="true" />{" "}
													{post.readTime}
												</span>
												<time
													dateTime={post.date}
													className="flex items-center"
												>
													<FaCalendar className="mr-1" aria-hidden="true" />{" "}
													{post.date}
												</time>
											</div>
											<div className="flex items-center space-x-4 mt-4 md:mt-0">
												<button
													className="text-cyan-400 hover:text-cyan-300 transition-colors"
													aria-label="Share"
												>
													<FaShareAlt />
												</button>
												<Link
													href={`/blog/${post.id}`}
													className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group"
												>
													Read More
													<FaArrowRight
														className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
														aria-hidden="true"
													/>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>

					<nav className="mt-12 flex justify-center" aria-label="Pagination">
						{Array.from({ length: totalPages }, (_, i) => (
							<Link
								key={i}
								href={`/blog?page=${
									i + 1
								}&search=${searchTerm}&category=${selectedCategory}`}
								className={`mx-1 px-4 py-2 rounded ${
									currentPage === i + 1
										? "bg-cyan-500 text-white"
										: "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
								} transition-colors duration-200`}
							>
								{i + 1}
							</Link>
						))}
					</nav>
				</main>

				<aside className="space-y-12">
					<div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
						<h2 className="text-2xl font-semibold mb-4 text-cyan-400 flex items-center">
							<FaTags className="mr-2" aria-hidden="true" /> Popular Tags
						</h2>
						<div className="flex flex-wrap gap-2">
							{allTags.map((tag) => (
								<span
									key={tag}
									className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					<div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
						<h2 className="text-2xl font-semibold mb-4 text-cyan-400">
							Subscribe to Our Newsletter
						</h2>
						<p className="text-gray-400 mb-4">
							Stay up-to-date with our latest articles and insights.
						</p>
						<form>
							<label htmlFor="email" className="sr-only">
								Email address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email"
								className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
							/>
							<button
								type="submit"
								className="w-full mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200"
							>
								Subscribe
							</button>
						</form>
					</div>
				</aside>
			</div>
		</div>
	);
}
