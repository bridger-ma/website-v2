"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import "katex/dist/katex.min.css";
import BlogLayout from "@/components/layouts/BlogLayout";
import { FaCalendar, FaUser, FaClock, FaTag } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "@/components/CommentSection";
import SocialMediaIcon from "@/components/SocialMediaIcon";

interface BlogPostProps {
	params: {
		slug: string;
	};
}

interface TableOfContentsItem {
	id: string;
	title: string;
	level: number;
}

export default function BlogPost({ params }: BlogPostProps) {
	const [postContent, setPostContent] = useState("");
	const [postMetadata, setPostMetadata] = useState({
		title: "",
		date: "",
		author: "",
		readTime: "",
		category: "",
		featuredImage: "",
	});
	const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>(
		[]
	);

	useEffect(() => {
		const fetchPost = async () => {
			// Simulating an API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setPostMetadata({
				title: "The Future of AI in Business Transformation",
				date: "May 15, 2023",
				author: "John Doe",
				readTime: "5 min read",
				category: "Artificial Intelligence",
				featuredImage: "/placeholder.svg?height=400&width=800",
			});

			const content = `
# The Future of AI in Business Transformation

Artificial Intelligence (AI) is revolutionizing the way businesses operate and compete in the digital age. This post explores the transformative power of AI and its impact on various aspects of business.

## The Rise of AI in Business

AI has come a long way from being a concept in science fiction to a reality that's reshaping industries. Here are some key areas where AI is making a significant impact:

1. **Customer Service**: AI-powered chatbots and virtual assistants are providing 24/7 customer support, handling queries efficiently, and improving customer satisfaction.

2. **Data Analysis**: AI algorithms can process vast amounts of data quickly, uncovering insights that would be impossible for humans to discover manually.

3. **Predictive Analytics**: AI can forecast trends, customer behavior, and market changes, allowing businesses to make data-driven decisions.

4. **Automation**: Repetitive tasks are being automated, freeing up human resources for more creative and strategic work.

## The Math Behind AI

At the core of AI are complex mathematical models. For example, the concept of neural networks can be represented by the following equation:

$$
y = f(\sum_{i=1}^n w_i x_i + b)
$$

Where:
- $y$ is the output
- $f$ is the activation function
- $w_i$ are the weights
- $x_i$ are the inputs
- $b$ is the bias

## Implementing AI in Your Business

To successfully implement AI in your business, consider the following steps:

1. Identify areas where AI can add value
2. Collect and prepare high-quality data
3. Choose the right AI tools and platforms
4. Develop a skilled team or partner with AI experts
5. Start with small projects and scale up

<div class="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg p-4 my-4 rounded-lg">
<h3 class="text-xl font-semibold text-blue-400 mb-2">Pro Tip</h3>
<p>Always ensure that your AI implementations align with ethical guidelines and prioritize data privacy and security.</p>
</div>

## Conclusion

AI is not just a futuristic concept; it's a present reality that's transforming businesses across industries. By embracing AI technologies, companies can gain a competitive edge, improve efficiency, and drive innovation. The future of business is AI-driven, and the time to start is now.
      `;

			setPostContent(content);

			// Generate table of contents
			const headings = content.match(/^#{1,3} .+$/gm) || [];
			const toc = headings.map((heading) => {
				const level = heading.match(/^#+/)?.[0]?.length ?? 1;
				const title = heading.replace(/^#+\s/, "");
				const id = title.toLowerCase().replace(/[^\w]+/g, "-");
				return { id, title, level };
			});
			setTableOfContents(toc);
		};

		fetchPost();
	}, []);

	const renderTableOfContents = () => {
		return (
			<nav className="mb-6 p-4 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg transition-shadow hover:shadow-xl border border-gray-800 rounded-lg sticky top-20">
				<h2 className="text-lg font-bold mb-2 text-blue-400 border-b border-gray-800 pb-2">
					Table of Contents
				</h2>
				<ul className="space-y-1">
					{tableOfContents.map((item) => (
						<li key={item.id} className={`ml-${(item.level - 1) * 2}`}>
							<a
								href={`#${item.id}`}
								className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center text-sm"
							>
								<span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
		);
	};

	const renderSocialSharing = () => {
		const shareUrl = typeof window !== "undefined" ? window.location.href : "";
		const shareText = `Check out this article: ${postMetadata.title}`;

		const socialLinks = [
			{
				name: "Twitter",
				icon: "twitter",
				url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
					shareText
				)}&url=${shareUrl}`,
			},
			{
				name: "Facebook",
				icon: "facebook",
				url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
			},
			{
				name: "LinkedIn",
				icon: "linkedin",
				url: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(
					postMetadata.title
				)}`,
			},
			{
				name: "Email",
				icon: "email",
				url: `mailto:?subject=${encodeURIComponent(
					postMetadata.title
				)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`,
			},
		];

		return (
			<div className="flex justify-center space-x-4 mb-6">
				{socialLinks.map((social, index) => (
					<SocialMediaIcon
						key={social.name}
						name={social.name}
						icon={social.icon.toString()}
						url={social.url}
						index={index}
					/>
				))}
			</div>
		);
	};

	const renderAuthorBio = () => {
		return (
			<div className="flex items-center space-x-4 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg transition-shadow hover:shadow-xl border border-gray-800 p-6 rounded-lg mt-8">
				<Image
					src="/placeholder.svg?height=100&width=100"
					alt={postMetadata.author}
					width={80}
					height={80}
					className="rounded-full border-2 border-blue-400"
				/>
				<div>
					<h3 className="text-xl font-semibold text-white">
						{postMetadata.author}
					</h3>
					<p className="text-gray-400">
						John Doe is an AI expert with over 10 years of experience in
						implementing AI solutions for businesses across various industries.
					</p>
				</div>
			</div>
		);
	};

	const renderRelatedPosts = () => {
		const relatedPosts = [
			{
				id: 1,
				title: "How AI is Transforming Customer Service",
				slug: "ai-transforming-customer-service",
			},
			{
				id: 2,
				title: "The Role of Machine Learning in Predictive Analytics",
				slug: "machine-learning-predictive-analytics",
			},
			{
				id: 3,
				title: "Ethical Considerations in AI Implementation",
				slug: "ethical-considerations-ai-implementation",
			},
		];

		return (
			<div className="mt-12">
				<h2 className="text-2xl font-semibold mb-4 text-blue-400">
					Related Posts
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{relatedPosts.map((post) => (
						<Link key={post.id} href={`/blog/${post.slug}`} className="block">
							<div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-800 rounded-lg p-4 hover:bg-opacity-80">
								<h3 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors duration-200">
									{post.title}
								</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		);
	};

	return (
		<BlogLayout>
			<div className="container mx-auto px-4 py-8 bg-black min-h-screen">
				<article className="bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg overflow-hidden">
					<div className="relative h-64 md:h-96">
						<Image
							src={postMetadata.featuredImage || "/placeholder.svg"}
							alt={postMetadata.title}
							layout="fill"
							objectFit="cover"
							priority
						/>
					</div>
					<div className="p-6 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-black backdrop-filter backdrop-blur-lg shadow-lg border border-gray-800/50 rounded-b-lg">
						<h1 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient">
							{postMetadata.title}
						</h1>
						<div className="flex flex-wrap justify-center gap-4 mb-4 text-gray-400">
							<div className="flex items-center">
								<FaCalendar className="mr-2 text-blue-400" />
								{postMetadata.date}
							</div>
							<div className="flex items-center">
								<FaUser className="mr-2 text-blue-400" />
								{postMetadata.author}
							</div>
							<div className="flex items-center">
								<FaClock className="mr-2 text-blue-400" />
								{postMetadata.readTime}
							</div>
							<div className="flex items-center">
								<FaTag className="mr-2 text-blue-400" />
								{postMetadata.category}
							</div>
						</div>
						{renderSocialSharing()}
					</div>
					<div className="mt-8 p-6 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg border border-gray-800/50 rounded-lg">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							<div className="md:col-span-1">{renderTableOfContents()}</div>
							<div className="md:col-span-3">
								<div className="prose prose-invert prose-lg max-w-none prose-headings:text-blue-400 prose-a:text-blue-400 prose-strong:text-white prose-code:text-cyan-200 prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700">
									<ReactMarkdown
										remarkPlugins={[remarkMath]}
										rehypePlugins={[rehypeKatex, rehypeRaw, rehypeSlug]}
										components={{
											h1: ({ node, ...props }) => (
												<h1 className="text-3xl font-bold mb-4" {...props} />
											),
											h2: ({ node, ...props }) => (
												<h2
													className="text-2xl font-semibold mt-8 mb-4"
													{...props}
												/>
											),
											h3: ({ node, ...props }) => (
												<h3
													className="text-xl font-semibold mt-6 mb-3"
													{...props}
												/>
											),
											p: ({ node, ...props }) => (
												<p className="mb-4 text-gray-300" {...props} />
											),
											ul: ({ node, ...props }) => (
												<ul className="list-disc pl-6 mb-4" {...props} />
											),
											ol: ({ node, ...props }) => (
												<ol className="list-decimal pl-6 mb-4" {...props} />
											),
											li: ({ node, ...props }) => (
												<li className="mb-2" {...props} />
											),
											blockquote: ({ node, ...props }) => (
												<blockquote
													className="border-l-4 border-blue-400 pl-4 py-2 mb-4 italic"
													{...props}
												/>
											),
											code: ({ className, children, ...props }) =>
												className?.includes("inline") ? (
													<code
														className="bg-gray-800 px-1 py-0.5 rounded"
														{...props}
													/>
												) : (
													<code
														className="block bg-gray-800 p-4 rounded-lg mb-4"
														{...props}
													/>
												),
										}}
									>
										{postContent}
									</ReactMarkdown>
								</div>
							</div>
						</div>
					</div>
					{renderAuthorBio()}
					{renderRelatedPosts()}
				</article>
				<CommentSection postId={params.slug} />
			</div>
		</BlogLayout>
	);
}
