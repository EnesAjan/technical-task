'use client'

import {useRouter} from "next/navigation";
import {AiOutlineHeart} from "react-icons/ai";
import {useFavoriteProducts} from "@/lib/favorite-context";

export const GoToFavorites = () => {
    const router = useRouter();
    const {favorites} = useFavoriteProducts()

    return <button
        id={'go-to-favorites'}
        data-cy="go-to-favorites"
        aria-label={`Go to favorites path`}
        className="fixed bottom-5 right-5 bg-blue-500 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        onClick={() => router.push('/favorite-products')}><AiOutlineHeart className="text-lg"/> Favorites
        ({favorites.length})
    </button>
}