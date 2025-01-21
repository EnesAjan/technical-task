"use client";

import React from "react";
import {getCategoriesAction} from "@/app/product-list/actions";
import {useFilter} from "@/lib/hooks";

export const CategoryFilter = () => {
    const {options: categories, selectedValue: selectedCategory, handleChange} = useFilter({
        queryParam: "category",
        fetchOptions: getCategoriesAction,
    });

    return (
        <select
            id="category-filter"
            aria-label="Filter by Category"
            value={selectedCategory}
            onChange={handleChange}
            className="px-4 h-14 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option className={'cursor-pointer'} value="">All Categories</option>
            {categories.map((category) => (
                <option className={'cursor-pointer'} key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};
