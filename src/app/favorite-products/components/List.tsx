'use client'
import {useFavoriteProducts} from "@/lib/favorite-context";
import {FavoriteProductCard} from "@/app/favorite-products/components/FavoriteProductCard";


export const List = () => {
    const {favorites, removeFavorite} = useFavoriteProducts();

    return favorites.length > 0 ? (
        <section aria-labelledby="favorite-products-list" className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6">
            {favorites.map((product) => (
                <FavoriteProductCard key={product.id} product={product}
                                     removeFavorite={() => removeFavorite(product.id)}/>
            ))}
        </section>
    ) : (
        <h1 className={'w-full flex justify-center text-gray-400'}>No selected favorite products yet.</h1>)
}