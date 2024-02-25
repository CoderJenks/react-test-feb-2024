import { render, screen } from "@testing-library/react"
import MainPage from "../../components/mainPage/MainPage"
import { ProductsResponse, getAllProducts } from "../../api/productsApi";

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
            Promise.resolve<ProductsResponse>({
                    products: [
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
            })
        );

        render(<MainPage />);

        expect(getAllProducts).toHaveBeenCalledTimes(1);
        
    })

})