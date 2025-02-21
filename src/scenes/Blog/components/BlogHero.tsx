import { LogoAnimation } from "@/components/LogoAnimation";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Link from "next/link";
export function BlogHero() {
	return (
		<div className="container mx-auto px-4 py-12 sm:py-20 flex flex-col items-center justify-between sm:justify-center text-center overflow-hidden">
			<Link
				href={"/"}
				className="text-5xl font-bold text-white mb-6 cursor-pointer"
			>
				<LogoAnimation />
			</Link>

			<p className="text-gray-400 text-lg max-w-2xl mx-auto">
				Discover the latest insights, trends, and innovations in technology and
				digital transformation.
			</p>
			<div className="mt-8 flex flex-row space-x-4">
				<SocialMediaIcons />
			</div>
		</div>
	);
}
export default BlogHero;
