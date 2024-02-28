import { render, screen, waitFor, within } from "@testing-library/react"
import MainPage from "../../components/mainPage/MainPage"
import { ProductResponse, getAllProducts } from "../../api/productsApi";

jest.mock("../../api/productsApi")

describe("Main Page", () => {
    test("Renders page header", () => {
        render(
            <MainPage />
        );
        expect(screen.getByText("Main Page")).toBeInTheDocument();
    });

    test("Calls getAllProducts upon initial mount", () => {
        jest.mocked(getAllProducts).mockResolvedValue(
            Promise.resolve<ProductResponse[]>([
                        {
                            id: 1,
                            colour: "blue",
                            name: "Test dress 1",
                            price: 5.99,
                            img: "https://test.com/image1"
                        },
                        {
                            id: 9,
                            colour: "green",
                            name: "Test dress 2",
                            price: 17,
                            img: "https://test.com/image2"
                        }
                    ]
            )
        );

        render(<MainPage />);

        expect(getAllProducts).toHaveBeenCalledTimes(1);
        
    })

    test("Renders product cards with name, price, colour and image", async () => {
        jest.mocked(getAllProducts).mockResolvedValue(
            Promise.resolve<ProductResponse[]>(
                    [
                        {
                            id: 1,
                            colour: "blue",
                            name: "Test dress 1",
                            price: 5.99,
                            img: "https://test.com/image1"
                        },
                        {
                            id: 9,
                            colour: "green",
                            name: "Test dress 2",
                            price: 17,
                            img: "https://test.com/image2"
                        }
                    ]
            )
        );

        render(<MainPage />);
        expect(getAllProducts).toHaveBeenCalledTimes(1);

        await waitFor (() => expect(within(screen.getByTestId("ProductCard-1")).getByText("Test dress 1")).toBeInTheDocument());
        expect(within(screen.getByTestId("ProductCard-1")).getByText("Price: £5.99")).toBeInTheDocument();
        expect(within(screen.getByTestId("ProductCard-1")).getByText("Colour: blue")).toBeInTheDocument();
        expect(within(screen.getByTestId("ProductCard-1")).getByAltText("Test dress 1")).toBeInTheDocument();


        expect(within(screen.getByTestId("ProductCard-9")).getByText("Test dress 2")).toBeInTheDocument();
        expect(within(screen.getByTestId("ProductCard-9")).getByText("Price: £17.00")).toBeInTheDocument();
        expect(within(screen.getByTestId("ProductCard-9")).getByText("Colour: green")).toBeInTheDocument();
        expect(within(screen.getByTestId("ProductCard-9")).getByAltText("Test dress 2")).toBeInTheDocument();
    })
})