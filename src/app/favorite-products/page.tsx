import {List} from "@/app/favorite-products/components/List";
import {Metadata} from "next";
import {GoBack} from "@/app/favorite-products/components/GoBack";

export const metadata: Metadata = {
    title: "Favorite products list",
    description: "Product list which user choose as favorite",
};
export default function FavoriteProducts() {

    return <main>
        <GoBack/>
        <h1 id="favorite-products-title" className="text-2xl font-bold mb-4">Favorite Products</h1>
        <List/>
    </main>
}