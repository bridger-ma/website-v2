import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/types";

interface BlogCategoriesProps {
	posts: BlogPost[];
	selectedCategory: string | null;
	onCategoryChange: (category: string | null) => void;
}

export default function BlogCategories({
	posts,
	selectedCategory,
	onCategoryChange,
}: BlogCategoriesProps) {
	const categories = Array.from(new Set(posts.map((post) => post.category)));

	return (
		<div className="flex flex-wrap gap-2">
			<Badge
				variant={!selectedCategory ? "secondary" : "outline"}
				className="cursor-pointer"
				onClick={() => onCategoryChange(null)}
			>
				All
			</Badge>
			{categories.map((category) => (
				<Badge
					key={category}
					variant={selectedCategory === category ? "secondary" : "outline"}
					className="cursor-pointer"
					onClick={() => onCategoryChange(category)}
				>
					{category}
				</Badge>
			))}
		</div>
	);
}
