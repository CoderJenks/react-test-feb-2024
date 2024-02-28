import { useEffect, useState } from "react";
import { getAllProducts, ProductResponse, ProductsResponse  } from "../../api/productsApi";
import "./MainPage.scss";


const MainPage = () => {
    const [availableProducts, setAvailableProducts] = useState<ProductResponse[]>()


    async function updateAvailableProducts() {
        try {
            setAvailableProducts(await getAllProducts());
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        updateAvailableProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    function ProductCard({ id, colour, name, price, img }:ProductResponse) {
        return (
            <div className="ProductCard" data-testid={`ProductCard-${id}`}>
                <img className="ProductCard__Image" src={img} alt={name} />
                <h3 className="ProductCard__Name">{name}</h3>
                <h4 className="ProductCard__Colour">Colour: {colour}</h4>
                <div className="ProductCard__Price">Price: {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
            price)}</div>
            </div>
        )
    }

    function ProductCardList(
        {products}
    :ProductsResponse) {
        return (
            <>
            {products.map((availableProduct) => (
                    <ProductCard key={availableProduct.id} id={availableProduct.id} colour={availableProduct.colour}  name={availableProduct.name}  price={availableProduct.price
                      }  img={availableProduct.img}  />
                )
            )}
            </>
        )   
    }


    return (
        <>
            <div className="MainPage__Content">
                <h2 className="MainPage__Header">
                    Main Page
                </h2>
                <div className="MainPage__AvailableProducts">
                    { availableProducts !== undefined && (<ProductCardList products={availableProducts}/>) }
                </div>
            </div>
        </>
    )

}

export default MainPage;