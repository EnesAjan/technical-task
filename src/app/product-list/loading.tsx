import {ProductSkeleton} from "@/app/product-list/components/ProductSkeleton";
import React from "react";
import {FiltersSkeleton} from "@/app/product-list/components/FilterSkeleton";

export default function Loading() {
    return (
        <section aria-labelledby={'products-skeleton'} aria-busy="true"
                 aria-live="polite" className="!w-[100%]">
            <h1 className="text-2xl font-bold mb-6">Product List</h1>
            <FiltersSkeleton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({length: 6}, (_, index) => (
                    <ProductSkeleton key={index}/>
                ))}
            </div>
        </section>
    );
}