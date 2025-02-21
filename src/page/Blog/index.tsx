"use client";

import { useState } from "react";
import { BLOG_POSTS } from "@/mocks";
import { FaTags } from "react-icons/fa";

import BlogPost from "@/components/BlogPost";
import BlogHero from "./components/BlogHero";
import BlogSearch from "./components/BlogSearch";
import BlogCategories from "./components/BlogCategories";
import FeaturedPost from "./components/FeaturedPost";
import BlogPagination from "./components/BlogPagination";
import BlogNewsletter from "./components/BlogNewsletter";

const ITEMS_PER_PAGE = 6;

export default function Blog() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const filteredPosts = BLOG_POSTS.filter((post) => {
		const matchesCategory =
			!selectedCategory || post.category === selectedCategory;
		const matchesSearch =
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
	const paginatedPosts = filteredPosts.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	const handleFiltersChange = () => {
		setCurrentPage(1);
	};

	return (
		<div className="min-h-screen bg-black">
			<div className="container mx-auto px-4 py-20">
				<BlogHero />
				<div className="bg-gray-900/50 p-6 rounded-lg mb-12">
					<div className="flex flex-col md:flex-row gap-6">
						<BlogSearch
							value={searchQuery}
							onChange={(value) => {
								setSearchQuery(value);
								handleFiltersChange();
							}}
						/>
					</div>
				</div>
				<div className="bg-gray-900/50 p-6 rounded-lg mb-12">
					<BlogCategories
						posts={BLOG_POSTS}
						selectedCategory={selectedCategory}
						onCategoryChange={(category) => {
							setSelectedCategory(category);
							handleFiltersChange();
						}}
					/>
				</div>
				{!selectedCategory && !searchQuery && (
					<FeaturedPost post={BLOG_POSTS[0]} />
				)}
				<div>
					<h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
						<FaTags className="mr-2 text-cyan-500" />
						{selectedCategory
							? `${selectedCategory} Articles`
							: "Latest Articles"}
						<span className="text-gray-500 text-sm ml-2">
							({filteredPosts.length})
						</span>
					</h2>

					{paginatedPosts.length > 0 ? (
						<>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
								{paginatedPosts.map((post) => (
									<BlogPost key={post.id} {...post} />
								))}
							</div>

							<BlogPagination
								currentPage={currentPage}
								totalPages={totalPages}
								onPageChange={setCurrentPage}
							/>
						</>
					) : (
						<div className="text-center py-12 text-gray-400">
							No articles found matching your criteria.
						</div>
					)}
				</div>

				<BlogNewsletter />
			</div>
		</div>
	);
}
