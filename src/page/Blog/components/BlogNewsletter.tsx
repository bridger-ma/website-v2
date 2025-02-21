import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToBlog } from "@/app/actions/blog";

export function BlogNewsletter() {
	return (
		<div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-800/50">
			<h2 className="text-2xl font-semibold text-white mb-4">
				Subscribe to Our Newsletter
			</h2>
			<p className="text-gray-400 mb-6">
				Stay updated with our latest insights and news.
			</p>
			<form action={subscribeToBlog} className="flex gap-4">
				<Input
					type="email"
					name="email"
					placeholder="Enter your email"
					required
					className="flex-1 bg-gray-950/50 border-gray-700/50 text-white"
				/>
				<Button type="submit" className="bg-cyan-500 hover:bg-cyan-600">
					Subscribe
				</Button>
			</form>
		</div>
	);
}
export default BlogNewsletter;
