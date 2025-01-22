'use client';

import {useRouter} from 'next/navigation';
import React from 'react';

export const GoBack = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <button
            aria-label={'Back to product list'}
            data-cy="go-to-products"
            onClick={handleGoBack}
            className="px-4 mb-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors"
        >
            Back to products
        </button>
    );
};

