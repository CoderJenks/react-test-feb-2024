import { act, render } from "@testing-library/react";
import {
  ShoppingBasketContext,
  ShoppingBasketContextValue
} from "../../context/ShoppingBasketContext";
import { ShoppingBasketProvider } from "../../context/ShoppingBasketProvider";

describe("ShoppingBasketContextProvider", () => {
  test("Initialises with an empty array for basketItems", () => {
    let actualContextState: ShoppingBasketContextValue | undefined;

    render(
      <ShoppingBasketProvider>
        <ShoppingBasketContext.Consumer>
          {(value) => {
            actualContextState = value;
            return null;
          }}
        </ShoppingBasketContext.Consumer>
      </ShoppingBasketProvider>
    );

    expect(actualContextState?.basketItems).toEqual([]);
  });

  test("Increase quantity of basketItem when addToBasket is called", () => {
    let actualContextState: ShoppingBasketContextValue | undefined;

    render(
      <ShoppingBasketProvider>
        <ShoppingBasketContext.Consumer>
          {(value) => {
            actualContextState = value;
            return null;
          }}
        </ShoppingBasketContext.Consumer>
      </ShoppingBasketProvider>
    );

    expect(actualContextState?.basketItems).toEqual([]);

    act(() => {
      actualContextState?.addToBasket({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      });
    });

    expect(actualContextState?.basketItems).toEqual([
      {
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2",
        quantity: 1
      }
    ]);

    act(() => {
      actualContextState?.addToBasket({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      });
    });

    expect(actualContextState?.basketItems).toEqual([
      {
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2",
        quantity: 2
      }
    ]);

    act(() => {
      actualContextState?.addToBasket({
        id: 1,
        colour: "blue",
        name: "Test dress 1",
        price: 5.99,
        img: "https://test.com/image1"
      });
    });

    expect(actualContextState?.basketItems).toEqual([
      {
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2",
        quantity: 2
      },
      {
        id: 1,
        colour: "blue",
        name: "Test dress 1",
        price: 5.99,
        img: "https://test.com/image1",
        quantity: 1
      }
    ]);
  });

  test("Decrease quantity of basketItem when addToBasket is called", () => {
    let actualContextState: ShoppingBasketContextValue | undefined;

    render(
      <ShoppingBasketProvider>
        <ShoppingBasketContext.Consumer>
          {(value) => {
            actualContextState = value;
            return null;
          }}
        </ShoppingBasketContext.Consumer>
      </ShoppingBasketProvider>
    );

    expect(actualContextState?.basketItems).toEqual([]);

    act(() => {
      actualContextState?.addToBasket({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      });
    });

    act(() => {
      actualContextState?.addToBasket({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      });
    });

    act(() => {
      actualContextState?.addToBasket({
        id: 1,
        colour: "blue",
        name: "Test dress 1",
        price: 5.99,
        img: "https://test.com/image1"
      });
    });

    expect(actualContextState?.basketItems).toEqual([
      {
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2",
        quantity: 2
      },
      {
        id: 1,
        colour: "blue",
        name: "Test dress 1",
        price: 5.99,
        img: "https://test.com/image1",
        quantity: 1
      }
    ]);

    act(() => {
      actualContextState?.removeFromBasket({
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2"
      });
    });

    expect(actualContextState?.basketItems).toEqual([
      {
        id: 1,
        colour: "blue",
        name: "Test dress 1",
        price: 5.99,
        img: "https://test.com/image1",
        quantity: 1
      },
      {
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2",
        quantity: 1
      }
    ]);

    act(() => {
      actualContextState?.removeFromBasket({
        id: 1,
        colour: "blue",
        name: "Test dress 1",
        price: 5.99,
        img: "https://test.com/image1"
      });
    });

    expect(actualContextState?.basketItems).toEqual([
      {
        id: 9,
        colour: "green",
        name: "Test dress 2",
        price: 17,
        img: "https://test.com/image2",
        quantity: 1
      }
    ]);
  });
});
