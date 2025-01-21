"use client";

import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";

interface UseFilterOptions {
    queryParam: string;
    fetchOptions: () => Promise<string[] | null>;
}

export const useFilter = ({queryParam, fetchOptions}: UseFilterOptions) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentValue = searchParams.get(queryParam) || "";
    const [selectedValue, setSelectedValue] = useState(currentValue);
    const [options, setOptions] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value);

        const params = new URLSearchParams(searchParams.toString());

        if (value === "") {
            params.delete(queryParam);
        } else {
            params.delete('search')
            params.delete('page')
            params.set(queryParam, value);
        }

        const otherFilter = queryParam === "brand" ? "category" : "brand";
        params.delete(otherFilter);

        router.push(`/product-list?${params.toString()}`);
    };

    useEffect(() => {
        const fetchFilterOptions = async () => {
            const fetchedOptions = await fetchOptions();
            setOptions(fetchedOptions as string[]);
        };
        fetchFilterOptions();
    }, [fetchOptions]);

    useEffect(() => {
        setSelectedValue(currentValue);
    }, [currentValue]);

    return {options, selectedValue, handleChange};
};

interface UseDebounceOptions {
    value: string,
    delay: number
}

export const useDebounce = ({value, delay}: UseDebounceOptions) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}


