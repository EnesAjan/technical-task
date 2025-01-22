import React from "react";
import {getProducts, getProductsByCategory} from "@/services/services";
import {ListView} from "@/app/product-list/components/List";
import {ProductsResponse} from "@/type/product";
import {Pagination} from "@/app/product-list/components/Pagination";
import {SearchBar} from "@/app/product-list/components/SearchBar";
import {CategoryFilter} from "@/app/product-list/components/CategoryFilter";
import {BrandFilter} from "@/app/product-list/components/BrandFilter";
import {SortOptions} from "@/app/product-list/components/Sort";
import {GoToFavorites} from "@/app/product-list/components/GoToFavorites";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Product list",
    description: "Product list view with product details articles",
};

interface Params {
    page: string,
    search: string,
    category: string,
    brand: string,
    sort: string
}

const limit = 18;

export default async function ProductList({searchParams}: { searchParams: Promise<Params> }) {
    const params = await searchParams;
    const search = params.search || '';
    const category = params.category || ''
    const brand = params.brand || ''
    const sort = params.sort || ''
    const currentPage = parseInt(params.page || "1", 10);
    const skip = (currentPage - 1) * limit;


    const productsData = await (category ? getProductsByCategory(skip, category, sort) : getProducts(skip, search, brand, sort));

    return (
        <main className={'w-full max-w-[1540px]'}>
            <h1 id="product-list-title" className="text-2xl font-bold mb-4">Product List</h1>
            <section
                aria-labelledby="filters"
                className={'flex flex-col lg:flex-row lg:justify-between mb-10 gap-5 sticky top-0 bg-white z-10 p-4 shadow-md before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gray-200'}>
                <SearchBar search={search}/>
                <div className={'flex flex-wrap lg:flex-nowrap h-full gap-4'}>
                    <CategoryFilter/>
                    <BrandFilter/>
                    <SortOptions/>
                </div>
            </section>
            <ListView productsData={productsData as ProductsResponse}/>
            {(productsData?.products && productsData?.total >= 18 && !brand) &&
                <Pagination totalPages={Math.ceil(productsData?.total / limit)}
                            currentPage={currentPage}
                />}
            <GoToFavorites/>
        </main>
    );
}