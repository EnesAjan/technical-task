import React from "react";
import {Product} from "@type/product";
import Image from "next/image";
import {RatingStars} from "@/app/product-list/components/RatingStars";
import {FavoriteStar} from "@/app/product-list/components/FavoriteStar";


interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {

    return <article
        key={product.id}
        aria-labelledby={`product-title-${product.id}`}
        className="relative flex flex-col border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
    >
        {product.stock > 0 && (
            <span
                className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow">
          In Stock
        </span>
        )}
        <FavoriteStar product={product}/>
        <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={150}
            priority
            className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>

        <p className="text-gray-600 text-sm mb-4">
            {product.description.slice(0, 60)}...
        </p>
        <div className={'flex justify-between mt-auto'}>
            <p className="text-blue-500 font-bold">${product.price.toFixed(2)}</p>
            <RatingStars rating={product.rating}/>
        </div>
    </article>
}