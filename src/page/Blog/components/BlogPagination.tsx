import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function BlogPagination({
	currentPage,
	totalPages,
	onPageChange,
}: BlogPaginationProps) {
	return (
		<div className="flex justify-center mt-8">
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
							className={
								currentPage === 1 ? "pointer-events-none opacity-50" : ""
							}
						/>
					</PaginationItem>

					{[...Array(totalPages)].map((_, i) => {
						const page = i + 1;
						if (
							page === 1 ||
							page === totalPages ||
							(page >= currentPage - 1 && page <= currentPage + 1)
						) {
							return (
								<PaginationItem key={page}>
									<PaginationLink
										onClick={() => onPageChange(page)}
										isActive={currentPage === page}
									>
										{page}
									</PaginationLink>
								</PaginationItem>
							);
						}
						if (page === currentPage - 2 || page === currentPage + 2) {
							return (
								<PaginationItem key={`ellipsis-${page}`}>
									<PaginationEllipsis />
								</PaginationItem>
							);
						}
						return null;
					})}

					<PaginationItem>
						<PaginationNext
							onClick={() =>
								currentPage < totalPages && onPageChange(currentPage + 1)
							}
							className={
								currentPage === totalPages
									? "pointer-events-none opacity-50"
									: ""
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}

export default BlogPagination;
