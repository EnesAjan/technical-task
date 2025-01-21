'use client'
import React from "react";
import {useRouter, useSearchParams} from "next/navigation";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
                                                          totalPages,
                                                          currentPage,
                                                      }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const onPageChange = (page: number) => {
        const searchQuery = searchParams.get("search");
        const categoryQuery = searchParams.get("category");

        const url = searchQuery || categoryQuery
            ? `/product-list?${searchQuery ? `search=${encodeURIComponent(searchQuery)}` : `category=${encodeURIComponent(categoryQuery as string)}`}&page=${page}`
            : `/product-list?page=${page}`;
        router.push(url)

    }
    const getPaginationRange = () => {
        const paginationRange: (number | string)[] = [];

        for (let i = 1; i <= Math.min(3, totalPages); i++) {
            paginationRange.push(i);
        }

        if (currentPage > 4) {
            paginationRange.push("...");
        }

        if (currentPage > 3 && currentPage <= totalPages - 2) {
            paginationRange.push(currentPage);
        }

        if (currentPage < totalPages - 3) {
            paginationRange.push("...");
        }

        for (let i = Math.max(totalPages - 1, 4); i <= totalPages; i++) {
            paginationRange.push(i);
        }

        return paginationRange;
    };

    const paginationRange = getPaginationRange();

    return (
        <nav aria-label="Product Pagination" className="flex w-full justify-center items-center space-x-2">
            <button
                aria-label={"Previous button"}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={`px-3 py-1 border rounded ${
                    currentPage === 1
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100"
                }`}
            >
                {"<"}
            </button>

            {paginationRange.map((page, index) =>
                    typeof page === "number" ? (
                        <button
                            aria-label={"Page button"}
                            key={index}
                            onClick={() => onPageChange(page as number)}
                            className={`px-3 py-1 border rounded ${
                                currentPage === page
                                    ? "bg-blue-500 text-white"
                                    : "bg-white hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className="px-3 py-1 text-gray-500">
            {page}
          </span>
                    )
            )}

            <button
                aria-label={'Next button'}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={`px-3 py-1 border rounded ${
                    currentPage === totalPages
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-white hover:bg-gray-100"
                }`}
            >
                {">"}
            </button>
        </nav>
    );
};
