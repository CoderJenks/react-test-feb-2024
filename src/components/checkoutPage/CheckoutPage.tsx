import { useContext } from "react"
import { BasketItemType, ShoppingBasketContext } from "../../context/ShoppingBasketContext"
import "./CheckoutPage.scss";

const CheckoutPage = () => {
    const { basketItems } = useContext(ShoppingBasketContext);

    function BasketProductCard({ id, colour, name, price, img, quantity }:BasketItemType) {
        return (
            <div className="BasketProductCard__Container" _data-testid={`ProductCard-${id}`}>
                <img className="BasketProductCard__Image" src={img} alt={name} />
                <div className="BasketProductCard__ProductDetails" >
                    <h3 className="BasketProductCard__Name">{name}</h3>
                    <h4 className="BasketProductCard__Colour">Colour: {colour}</h4>
                    <div className="BasketProductCard__Price">Price: {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(price)}</div>
                    <div className="BasketProductCard__Quantity">Quantity in basket: {quantity}</div>
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