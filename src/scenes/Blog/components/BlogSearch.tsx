import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch, FaTimes, FaTags, FaFolder } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface BlogSearchProps {
	value: string;
	onChange: (value: string) => void;
	className?: string;
	tags?: string[];
	selectedTags?: string[];
	onTagsChange?: (tags: string[]) => void;
	categories?: string[];
	selectedCategories?: string[];
	onCategoriesChange?: (categories: string[]) => void;
}

export function BlogSearch({
	value,
	onChange,
	className,
	tags = [],
	selectedTags = [],
	onTagsChange,
	categories = [],
	selectedCategories = [],
	onCategoriesChange,
}: BlogSearchProps) {
	const [localValue, setLocalValue] = useState(value);
	const [isSearching, setIsSearching] = useState(false);
	const [tagsOpen, setTagsOpen] = useState(false);
	const [categoriesOpen, setCategoriesOpen] = useState(false);
	const debouncedValue = useDebounce(localValue, 300);

	useEffect(() => {
		if (debouncedValue !== value) {
			setIsSearching(true);
			onChange(debouncedValue);
			const timer = setTimeout(() => setIsSearching(false), 300);
			return () => clearTimeout(timer);
		}
	}, [debouncedValue, onChange, value]);

	const handleClearAll = () => {
		setLocalValue("");
		onChange("");
		onTagsChange?.([]);
		onCategoriesChange?.([]);
	};

	const hasFilters =
		localValue || selectedTags.length > 0 || selectedCategories.length > 0;

	return (
		<div
			className={cn(
				"w-full bg-gray-900/30 backdrop-blur-sm rounded-xl p-4",
				className
			)}
		>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="relative flex-1 group">
					<FaSearch
						className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 
            group-hover:text-cyan-400 transition-colors duration-200"
					/>
					<Input
						type="search"
						placeholder="Search articles..."
						className={cn(
							"w-full h-11 pl-11 pr-4",
							"bg-gray-950/50 border-gray-800/50",
							"text-white placeholder:text-gray-400",
							"focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20",
							"hover:border-gray-700",
							"transition-all duration-200"
						)}
						value={localValue}
						onChange={(e) => setLocalValue(e.target.value)}
					/>
				</div>

				<div className="flex gap-3">
					<Popover open={categoriesOpen} onOpenChange={setCategoriesOpen}>
						<PopoverTrigger asChild>
							<button
								className={cn(
									"flex items-center gap-2 px-4 h-11 rounded-lg min-w-[140px]",
									"bg-gray-950/50 border border-gray-800/50",
									"text-gray-300 hover:text-white",
									"hover:border-cyan-500/50 hover:bg-gray-900/50",
									"transition-all duration-200",
									selectedCategories.length > 0 &&
										"border-cyan-500/50 text-white"
								)}
							>
								<FaFolder className="h-4 w-4 text-cyan-500" />
								<span className="font-medium">
									{selectedCategories.length
										? `${selectedCategories.length} Categories`
										: "Categories"}
								</span>
							</button>
						</PopoverTrigger>
						<PopoverContent
							className="w-72 p-0 bg-gray-900 border border-gray-800"
							align="end"
						>
							<Command className="bg-transparent">
								<CommandInput
									placeholder="Search categories..."
									className="border-gray-800"
								/>
								<CommandEmpty>No categories found.</CommandEmpty>
								<CommandGroup className="p-1.5">
									{categories.map((category) => (
										<CommandItem
											key={category}
											onSelect={() => {
												const newCategories = selectedCategories.includes(
													category
												)
													? selectedCategories.filter((c) => c !== category)
													: [...selectedCategories, category];
												onCategoriesChange?.(newCategories);
											}}
											className="rounded-md aria-selected:bg-cyan-500/10"
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4 text-cyan-500",
													selectedCategories.includes(category)
														? "opacity-100"
														: "opacity-0"
												)}
											/>
											{category}
										</CommandItem>
									))}
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>

					{/* Tags Popover - Similar styling as Categories */}
					<Popover open={tagsOpen} onOpenChange={setTagsOpen}>
						<PopoverTrigger asChild>
							<button
								className={cn(
									"flex items-center gap-2 px-4 h-11 rounded-lg min-w-[140px]",
									"bg-gray-950/50 border border-gray-800/50",
									"text-gray-300 hover:text-white",
									"hover:border-cyan-500/50 hover:bg-gray-900/50",
									"transition-all duration-200",
									selectedTags.length > 0 && "border-cyan-500/50 text-white"
								)}
							>
								<FaTags className="h-4 w-4 text-cyan-500" />
								<span className="font-medium">
									{selectedTags.length ? `${selectedTags.length} Tags` : "Tags"}
								</span>
							</button>
						</PopoverTrigger>
						<PopoverContent
							className="w-72 p-0 bg-gray-900 border border-gray-800"
							align="end"
						>
							<Command className="bg-transparent">
								<CommandInput
									placeholder="Search tags..."
									className="border-gray-800"
								/>
								<CommandEmpty className="p-2 text-sm text-gray-400">
									No tags found.
								</CommandEmpty>
								<CommandGroup className="p-1.5">
									<div className="grid grid-cols-2 gap-1">
										{tags.map((tag) => (
											<CommandItem
												key={tag}
												onSelect={() => {
													const newTags = selectedTags.includes(tag)
														? selectedTags.filter((t) => t !== tag)
														: [...selectedTags, tag];
													onTagsChange?.(newTags);
												}}
												className={cn(
													"rounded-md cursor-pointer",
													"aria-selected:bg-cyan-500/10",
													selectedTags.includes(tag) && "bg-cyan-500/5"
												)}
											>
												<div className="flex items-center gap-2 w-full">
													<Check
														className={cn(
															"h-4 w-4 text-cyan-500 flex-shrink-0",
															selectedTags.includes(tag)
																? "opacity-100"
																: "opacity-0"
														)}
													/>
													<span className="truncate">{tag}</span>
												</div>
											</CommandItem>
										))}
									</div>
								</CommandGroup>
								{selectedTags.length > 0 && (
									<div className="p-2 border-t border-gray-800">
										<button
											onClick={() => onTagsChange?.([])}
											className="text-xs text-red-400 hover:text-red-300 transition-colors w-full text-left"
										>
											Clear selected tags
										</button>
									</div>
								)}
							</Command>
						</PopoverContent>
					</Popover>

					{hasFilters && (
						<button
							onClick={handleClearAll}
							className={cn(
								"flex items-center gap-2 px-4 h-11 rounded-lg",
								"bg-red-500/10 border border-red-500/20",
								"text-red-400 hover:text-red-300",
								"hover:bg-red-500/20 hover:border-red-500/30",
								"transition-all duration-200"
							)}
						>
							<FaTimes className="h-4 w-4" />
							<span className="font-medium">Clear</span>
						</button>
					)}
				</div>
			</div>

			{isSearching && (
				<p className="mt-3 text-xs text-cyan-400 animate-pulse flex items-center gap-2">
					<FaSearch className="h-3 w-3" />
					Searching...
				</p>
			)}
		</div>
	);
}

export default BlogSearch;
