import React from "react";
import {Product} from "@/type/product";
import Image from "next/image";
import {AiOutlineDelete, AiOutlineShoppingCart} from "react-icons/ai";
import {RatingStars} from "@/app/product-list/components/RatingStars";

interface FavoriteProductCardProps {
    product: Product;
    removeFavorite: () => void;
}

export const FavoriteProductCard: React.FC<FavoriteProductCardProps> = ({product, removeFavorite}) => {
    return (
        <article
            aria-labelledby={`favorite-product-title-${product.id}`}
            className={'flex flex-col sm:flex-row justify-between border border-gray-200 rounded-lg shadow-md p-4 gap-4'}>
            <div className="flex">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={150}
                    height={150}
                    priority
                    className="w-full h-48 object-cover rounded-md"
                />

                <div className="flex flex-col justify-between w-full ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>

                    <div className="text-gray-600 text-md mb-1">
                        <p className="text-blue-500 font-bold">${product.price.toFixed(2)}</p>
                        {product.discountPercentage > 0 && (
                            <p className="text-red-500">-{product.discountPercentage}%</p>
                        )}
                    </div>

                    <RatingStars rating={product.rating}/>

                    <p className="text-gray-500 text-md mt-1">Category: {product.category}</p>

                    <p
                        className={`text-md font-medium ${
                            product.stock > 0 ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <button disabled
                        aria-label={`Add ${product.title} to cart`}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-white text-sm font-semibold rounded-md hover:bg-blue-600 transition-colors"
                >
                    <AiOutlineShoppingCart className="text-lg"/>
                    Add to Cart
                </button>
                <button
                    aria-label={`Remove ${product.title} from favorites`}
                    onClick={() => removeFavorite()}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600 transition-colors"
                >
                    <AiOutlineDelete className="text-lg"/>
                    Remove
                </button>
            </div>
        </article>
    );
};
