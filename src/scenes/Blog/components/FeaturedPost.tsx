import { BlogPost as BlogPostType } from "@/lib/types";
import BlogPost from "@/components/BlogPost";
import { FaNewspaper } from "react-icons/fa";

interface FeaturedPostProps {
	post: BlogPostType;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
	return (
		<div className="mb-16">
			<h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
				<FaNewspaper className="mr-2 text-cyan-500" />
				Featured Post
			</h2>
			<div className="aspect-[21/9] relative">
				<BlogPost {...post} featured />
			</div>
		</div>
	);
}

export default FeaturedPost;
