import {ProductsResponse} from "@/type/product";
import React from "react";
import {ProductCard} from "@/app/product-list/components/ProductCard";

interface ListProps {
    productsData: ProductsResponse
}

export const ListView: React.FC<ListProps> = ({productsData}) => {
    return <section aria-labelledby="product-list" className="container mx-auto mb-8">
        {productsData?.products?.length === 0 &&
            <h1 className={'w-full flex justify-center text-gray-400'}>No products</h1>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.products.map((product) => <ProductCard key={product.id} product={product}/>)}
        </div>
    </section>

}