import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface BlogPostProps {
	id: number;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	image: string;
	category: string;
	featured?: boolean;
}

export default function BlogPost({
	id,
	title,
	excerpt,
	author,
	date,
	image,
	category,
	featured = false,
}: BlogPostProps) {
	return (
		<article
			className={cn(
				"group bg-gray-900 rounded-lg overflow-hidden border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300",
				featured && "relative h-full"
			)}
		>
			<div
				className={cn("relative h-48 overflow-hidden", featured && "h-full")}
			>
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-300"
				/>
				<div className="absolute top-4 left-4">
					<span className="px-3 py-1 bg-cyan-500 text-black text-sm font-medium rounded">
						{category}
					</span>
				</div>
			</div>

			{featured && (
				<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
			)}

			<div
				className={cn("p-6", featured && "absolute bottom-0 left-0 right-0")}
			>
				<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
					{title}
				</h3>
				<p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>

				<div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
					<div className="flex items-center">
						<FaUser className="mr-2 text-cyan-500" />
						{author}
					</div>
					<div className="flex items-center">
						<FaCalendar className="mr-2 text-cyan-500" />
						{date}
					</div>
				</div>

				<Link
					href={`/blog/${id}`}
					className={cn(
						"inline-flex items-center text-cyan-500 hover:text-cyan-400",
						"transition-colors duration-200"
					)}
				>
					Read More
					<FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
				</Link>
			</div>
		</article>
	);
}
