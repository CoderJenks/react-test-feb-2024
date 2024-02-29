import { render, screen } from "@testing-library/react";
import SingleProductPage from "../../components/singleProductPage/SingleProductPage";
import { ProductResponse, getProduct } from "../../api/productsApi";
import useProductId from "../../hooks/useProductId";
import {
  ShoppingBasketContext,
  ShoppingBasketContextValue
} from "../../context/ShoppingBasketContext";
import userEvent from "@testing-library/user-event";

jest.mock("../../hooks/useProductId.ts");
jest.mock("../../api/productsApi");

const mockUseProductId = jest.mocked(useProductId);

const dummyBasketContext: ShoppingBasketContextValue = {
  basketItems: [
    {
      id: 1,
      colour: "blue",
      name: "Test dress 1",
      price: 5.99,
      img: "https://test.com/image1",
      quantity: 1
    }
  ],
  addToBasket: jest.fn(),
  removeFromBasket: jest.fn()
};

describe("Single Product Page", () => {
  test("Renders page header", () => {
    jest.mocked(mockUseProductId).mockReturnValue("9");
    jest.mocked(getProduct).mockResolvedValue(
      Promise.resolve<ProductResponse>({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      })
    );

    render(<SingleProductPage />);

    expect(screen.getByText("Single Product Page")).toBeInTheDocument();
  });

  test("Calls getProduct upon initial mount", () => {
    jest.mocked(mockUseProductId).mockReturnValue("9");

    jest.mocked(getProduct).mockResolvedValue(
      Promise.resolve<ProductResponse>({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      })
    );

    render(<SingleProductPage />);

    expect(getProduct).toHaveBeenCalledTimes(1);
  });

  test("Renders product name, price, colour, image and id", async () => {
    jest.mocked(mockUseProductId).mockReturnValue("9");
    jest.mocked(getProduct).mockResolvedValue(
      Promise.resolve<ProductResponse>({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      })
    );

    render(<SingleProductPage />);

    expect(mockUseProductId).toHaveBeenCalledTimes(1);
    expect(getProduct).toHaveBeenCalledTimes(1);

    await screen.findByText("Test dress 2");
    expect(screen.getByAltText("Test dress 2")).toBeInTheDocument();
    expect(screen.getByText("Colour: green")).toBeInTheDocument();
    expect(screen.getByText("Price: £17.00")).toBeInTheDocument();
    expect(screen.getByText("Product ID: 9")).toBeInTheDocument();
  });

  test("Add to Basket button calls addtoBasket function when clicked", async () => {
    jest.mocked(mockUseProductId).mockReturnValue("9");
    jest.mocked(getProduct).mockResolvedValue(
      Promise.resolve<ProductResponse>({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      })
    );

    render(
      <ShoppingBasketContext.Provider value={dummyBasketContext}>
        <SingleProductPage />
      </ShoppingBasketContext.Provider>
    );

    await screen.findByText("Add to basket");

    userEvent.click(screen.getByText("Add to basket"));

    expect(dummyBasketContext.addToBasket).toHaveBeenCalledTimes(1);
    expect(dummyBasketContext.addToBasket).toHaveBeenCalledWith({
      id: 9,
      colour: "green",
      name: "Test dress 2",
      price: 17,
      img: "https://test.com/image2"
    });
  });
});
