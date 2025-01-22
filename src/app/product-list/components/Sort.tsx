'use client'
import React, {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

const sortOptions = [{id: 'title-asc', value: 'Title - Ascending'},
    {id: 'title-desc', value: 'Title - Descending'},
    {id: 'date-asc', value: 'Date - Ascending'},
    {id: 'date-desc', value: 'Date - Descending'},
    {id: 'price-asc', value: 'Price - Ascending'},
    {id: 'price-desc', value: 'Price - Descending'}]

export const SortOptions = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [sortOrder, setSortOrder] = useState<string>("");

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sortValue = event.target.value;
        setSortOrder(sortValue);
        const params = new URLSearchParams(searchParams.toString());

        if (sortValue) {
            params.set("sort", sortValue);
        } else {
            params.delete("sort");
        }

        router.push(`/product-list?${params.toString()}`);
    };

    return <select
        id="sort-order"
        aria-label="Sort by options"
        data-cy="sort-options"
        value={sortOrder}
        onChange={handleSortChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
        <option className={'cursor-pointer'} value="">Sort by</option>
        {sortOptions.map(option => <option key={option.id} className={'cursor-pointer'}
                                           value={option.id}>{option.value}</option>)}

    </select>
}