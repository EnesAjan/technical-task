"use client";

import React, {createContext, useContext, useState, ReactNode, useEffect} from "react";
import {Product} from "@/type/product";

interface FavoriteProductsContextType {
    favorites: Product[];
    addFavorite: (product: Product) => void;
    removeFavorite: (productId: number) => void;
    isFavorite: (productId: number) => boolean;
}

const FavoriteProductsContext = createContext<FavoriteProductsContextType | undefined>(undefined);

export const FavoriteProductsProvider = ({children}: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Product[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (product: Product) => {
        if (!favorites.some((fav) => fav.id === product.id)) {
            setFavorites((prev) => [...prev, product]);
        }
    };

    const removeFavorite = (productId: number) => {
        setFavorites((prev) => prev.filter((product) => product.id !== productId));
    };

    const isFavorite = (productId: number) => {
        return favorites.some((fav) => fav.id === productId);
    };


    return (
        <FavoriteProductsContext.Provider value={{favorites, addFavorite, removeFavorite, isFavorite}}>
            {children}
        </FavoriteProductsContext.Provider>
    );
};

export const useFavoriteProducts = () => {
    const context = useContext(FavoriteProductsContext);
    if (!context) {
        throw new Error("useFavoriteProducts must be used within a FavoriteProductsProvider");
    }
    return context;
};
