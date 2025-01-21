'use client'
import React from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useFavoriteProducts} from "@/lib/favorite-context";
import {Product} from "@type/product";

interface FavoriteStarProps {
    product: Product
}

export const FavoriteStar: React.FC<FavoriteStarProps> = ({product}) => {
    const {addFavorite, removeFavorite, isFavorite} = useFavoriteProducts();
    const toggleFavorite = () => {
        if (isFavorite(product.id)) {
            removeFavorite(product.id)
        } else {
            addFavorite(product)
        }
    };

    return <div
        onClick={toggleFavorite}
        className="absolute top-2 right-2 cursor-pointer text-3xl text-gray-400 hover:text-red-500 transition-colors"
    >
        {isFavorite(product.id) ? <AiFillHeart className={'text-red-500'}/> : <AiOutlineHeart/>}
    </div>
}