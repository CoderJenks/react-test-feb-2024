import { ProductResponse, getProduct } from "../../api/productsApi";
import { useContext, useEffect, useState } from "react";
import useProductId from "../../hooks/useProductId";
import { ShoppingBasketContext } from "../../context/ShoppingBasketContext";
import "./SingleProductPage.scss";

const SingleProductPage = () => {
  const [product, setProduct] = useState<ProductResponse>();
  const productId = useProductId();
  const { addToBasket } = useContext(ShoppingBasketContext);

  useEffect(() => {
    getProduct(productId).then((productObject) => {
      setProduct(productObject);
    });
  }, [productId]);

  function onAddToBasketClicked() {
    if (product) {
      addToBasket(product);
    }
  }

  return (
    <div className="SingleProductPage__Content">
      <h2 className="SingleProductPage__Header">Single Product Page</h2>
      {product ? (
        <div className="SingleProduct__Container">
          <img
            className="SingleProduct__Image"
            src={product.img}
            alt={product.name}
          />
          <div className="SingleProduct__ProductDetails">
            <h3 className="SingleProduct__Name">{product.name}</h3>
            <h4 className="SingleProduct__Colour">Colour: {product.colour}</h4>
            <div className="SingleProduct__Price">
              Price:{" "}
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(product.price)}
            </div>
            <div className="SingleProduct__ID">Product ID: {product.id}</div>
            <button onClick={onAddToBasketClicked}>Add to basket</button>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default SingleProductPage;
