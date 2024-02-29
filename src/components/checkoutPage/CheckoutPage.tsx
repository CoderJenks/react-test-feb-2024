import { useContext } from "react"
import { BasketItemType, ShoppingBasketContext } from "../../context/ShoppingBasketContext"
import "./CheckoutPage.scss";
import { ProductResponse } from "../../api/productsApi";

const CheckoutPage = () => {
    const { basketItems, addToBasket, removeFromBasket } = useContext(ShoppingBasketContext);

    async function onAddToBasketClicked (item:BasketItemType) {
        const itemToBeAdded:ProductResponse = {
            id: item.id,
            colour: item.colour,
            name: item.name,
            price: item.price,
            img: item.img
        }
            addToBasket(itemToBeAdded);
        
    }

    async function onRemovefromBasketClicked (item:BasketItemType) {
        const itemToBeRemoved:ProductResponse = {
            id: item.id,
            colour: item.colour,
            name: item.name,
            price: item.price,
            img: item.img
        }
            removeFromBasket(itemToBeRemoved);
        
    }

    function BasketProductCard(item:BasketItemType) {
        return (
            <div className="BasketProductCard__Container" _data-testid={`ProductCard-${item.id}`}>
                <img className="BasketProductCard__Image" src={item.img} alt={item.name} />
                <div className="BasketProductCard__ProductDetails" >
                    <h3 className="BasketProductCard__Name">{item.name}</h3>
                    <h4 className="BasketProductCard__Colour">Colour: {item.colour}</h4>
                    <div className="BasketProductCard__Price">Price: {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(item.price)}</div>
                    <div>
                        Quantity in basket:
                        <div className="BasketProductCard__Quantity">
                            <button className="BasketProductCard__RemoveItemButton" onClick={() => {onRemovefromBasketClicked(item)}}>-</button>
                            {item.quantity}
                            <button className="BasketProductCard__AddItemButton" onClick={() => onAddToBasketClicked(item)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    interface BasketListProps {
        items: BasketItemType[]
    };

    function BasketList(
        {items}
    :BasketListProps) {
        return (
            <>
            {items.map((item) => (
                    <BasketProductCard
                        key={item.id}
                        id={item.id}
                        colour={item.colour}
                        name={item.name}
                        price={item.price}
                        img={item.img}
                        quantity={item.quantity} />
                )
            )}
            </>
        )   
    }

    return (
        <>
            <div className="CheckoutPage__Content">
                <h2 className="CheckoutPage__Header">
                    Checkout
                </h2>
                {basketItems.length > 0 ? (
                    <BasketList items={basketItems}/>
                ) : (
                    <p>Your basket is empty</p>
                )}
            </div>
        </>
    )

}

export default CheckoutPage