
import { ProductResponse, getProduct } from "../../api/productsApi"
import { useContext, useEffect, useState } from "react";
import useProductId from "../../hooks/useProductId";
import { ShoppingBasketContext } from "../../context/ShoppingBasketContext";

const SingleProductPage = () => {    
    const [ product, setProduct ] = useState<ProductResponse>();
    const productId  = useProductId();
    const { addToBasket } = useContext(ShoppingBasketContext);

    useEffect(() => {
        getProduct(productId)
        .then((productObject) => {
        setProduct(productObject)
        });
    }, [productId])

    function onAddToBasketClicked() {
        if(product) {
            addToBasket(product);
        }
    }
    
    return (
        <div className="SingleProductPage__Content">
            <h2 className="MainPage__Header">
                Single Product Page
            </h2>
            {(product) ? (
                <>
                    <h3 className="ProductCard__Name">{product.name}</h3>
                    <img className="ProductCard__Image" src={product.img} alt={product.name} />
                    <h4 className="ProductCard__Colour">Colour: {product.colour}</h4>
                    <div className="ProductCard__Price">Price: {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(product.price)}</div>
                    <div className="ProductCard__ID">Product ID: {product.id}</div>
                    <button onClick={onAddToBasketClicked}>Add to basket</button>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
        
        )
}

export default SingleProductPage;
