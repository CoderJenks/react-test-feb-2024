import { createContext } from "react";
import { ProductResponse } from "../api/productsApi";

export interface BasketItemType extends ProductResponse {
    quantity: number;
}

export interface ShoppingBasketContextValue {
    basketItems?: BasketItemType[];
    addToBasket: (basketItem:ProductResponse) => void;
    removeFromBasket: (basketItem:ProductResponse) => void;
}

export const ShoppingBasketContext = createContext<ShoppingBasketContextValue>({
    basketItems: [],
    addToBasket() {
        // Unimplemented
    },
    removeFromBasket() {
        // Unimplemented
    },
});