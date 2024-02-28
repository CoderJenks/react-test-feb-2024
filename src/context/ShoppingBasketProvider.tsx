import { PropsWithChildren, useRef, useState } from "react";
import { BasketItemType, ShoppingBasketContext } from "./ShoppingBasketContext";
import { ProductResponse } from "../api/productsApi";

export function ShoppingBasketProvider({ children }: PropsWithChildren<unknown>) {
    const [basketItems, setBasketItems] = useState<BasketItemType[]>([]);
    const basketItemsRef = useRef(basketItems);
    basketItemsRef.current = basketItems;

    /**
     * Adds an item to the basketItems state within the ShoppingBasketContext
     * @param basketItem the item to be added to the basket
     */
    function addToBasket(basketItem: ProductResponse) {
        const filteredBasket = basketItems?.filter(item => item.id !== basketItem.id)

        const itemExists = basketItems?.find(item => item.id === basketItem.id);

        const newQuantity = itemExists ? itemExists.quantity + 1 : 1
        setBasketItems([...filteredBasket,
            {
                id: basketItem.id,
                colour: basketItem.colour,
                name: basketItem.name,
                price: basketItem.price,
                img: basketItem.img,
                quantity: newQuantity
            }
        ]);

    }

    /**
     * Reduces the quantity of an item by one in the basketItems state within the ShoppingBasketContext
     * @param basketItem the item to be removed from the basket
     */
    function removeFromBasket(basketItem: ProductResponse) {
        const filteredBasket = basketItems?.filter(item => item.id !== basketItem.id)

        const itemExists = basketItems?.find(item => item.id === basketItem.id);

        const newQuantity = itemExists ? itemExists.quantity - 1 : 0

        if(newQuantity > 0) {
            setBasketItems([...filteredBasket,
                {
                    id: basketItem.id,
                    colour: basketItem.colour,
                    name: basketItem.name,
                    price: basketItem.price,
                    img: basketItem.img,
                    quantity: newQuantity
                }
            ]);
        } else {
            setBasketItems(filteredBasket);
        }
    }

    return (
        <ShoppingBasketContext.Provider value={{basketItems, addToBasket, removeFromBasket}}>
            {children}
        </ShoppingBasketContext.Provider>
    )
}