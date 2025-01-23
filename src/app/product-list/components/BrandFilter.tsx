"use client";

import React from "react";
import {getProductsBrandsAction} from "@/app/product-list/actions";
import {useFilter} from "@/lib/hooks";

export const BrandFilter = () => {
    const {options: brands, selectedValue: selectedBrand, handleChange} = useFilter({
        queryParam: "brand",
        fetchOptions: getProductsBrandsAction,
    });

    return (
        <select
            id="brand-filter"
            aria-label="Filter by Brand"
            value={selectedBrand}
            onChange={handleChange}
            className="px-4 h-14 w-full md:w-1/3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option className={'cursor-pointer'} value="">All Brands</option>
            {brands.map((brand) => (
                <option className={'cursor-pointer'} key={brand} value={brand}>
                    {brand}
                </option>
            ))}
        </select>
    );
};
