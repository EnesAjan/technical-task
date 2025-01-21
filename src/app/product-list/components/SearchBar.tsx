'use client'
import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {useDebounce} from "@lib/hooks";

interface SearchBarProps {
    search: string
}

export const SearchBar: React.FC<SearchBarProps> = ({search}) => {

    const [query, setQuery] = useState(search);
    const router = useRouter();
    const searchParams = useSearchParams()
    const debouncedValue = useDebounce({value: query, delay: 300});
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value)
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (debouncedValue === "") {
            params.delete("search");
        } else {
            params.delete('category')
            params.delete('brand')
            params.delete('page')
            params.set("search", debouncedValue);
        }

        router.push(`/product-list?${params.toString()}`);
    }, [debouncedValue, router]);

    useEffect(() => {
        if (searchParams.has('brand') || searchParams.has('category')) {
            setQuery('')
        }
    }, [searchParams]);


    return <div className={'sm:w-full lg:w-1/2'}>
        <input
            type="text"
            id="search"
            name="search"
            placeholder="Search products..."
            onChange={handleInputChange}
            value={query}
            className="w-full h-14 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
}