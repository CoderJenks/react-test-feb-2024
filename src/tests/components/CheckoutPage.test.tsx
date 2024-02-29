import { render, screen } from "@testing-library/react"

import CheckoutPage from "../../components/checkoutPage/CheckoutPage";
import { ShoppingBasketContext} from "../../context/ShoppingBasketContext";

describe("Checkout Page", () => {
    test("Renders page header", () => {
        render(<CheckoutPage/>);
        expect(screen.getByText("Checkout")).toBeInTheDocument();
    });

    test("Shows empty basket when no products have been added to basket", () => {
        render(<CheckoutPage/>);
        expect(screen.getByText("Your basket is empty")).toBeInTheDocument();
    });

    test("Shows name image and price of basket item when one is present in the basket", () => {
        render(
            <ShoppingBasketContext.Provider value={{
                basketItems: [{
                    id: 1,
                    colour: "blue",
                    name: "Test dress 1",
                    price: 5.99,
                    img: "https://test.com/image1",
                    quantity: 1
                }],
                addToBasket: jest.fn(),
                removeFromBasket: jest.fn()
                }}>
                <CheckoutPage />
            </ShoppingBasketContext.Provider >
        );
        expect(screen.queryByText("Your basket is empty")).not.toBeInTheDocument();
        expect(screen.getByText("Test dress 1")).toBeInTheDocument();
        expect(screen.getByText("Price: £5.99")).toBeInTheDocument();
        expect(screen.getByText("Colour: blue")).toBeInTheDocument();
        expect(screen.getByAltText("Test dress 1")).toBeInTheDocument();
    });
})