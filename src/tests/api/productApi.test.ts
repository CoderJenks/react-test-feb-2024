import { AxiosHeaders } from "axios";
import Api from "../../api/Api"
import { getProducts } from "../../api/productsApi";

jest.mock("../../api/Api", () => ({
    get: jest.fn()
}));

describe("getProducts", () => {
    test("Resolves to the response body returned by Api.get", async () => {
        const mockedApiResponse = {
            data: {
                products: [
                    {
                        id: 1,
                        colour: "blue",
                        name: "Test dress 1",
                        price: "5.99",
                        img: "https://test.com/image1"
                    },
                    {
                        id: 9,
                        colour: "green",
                        name: "Test dress 2",
                        price: "17",
                        img: "https://test.com/image2"
                    }
                ]
            },
            status: 200,
            statusText: "OK",
            config: {
                headers: new AxiosHeaders()
            },
            headers: {}
        }
        jest.mocked(Api).get.mockResolvedValue(mockedApiResponse);

        const actualResponse = getProducts();

        await expect(actualResponse).resolves.toEqual({
            products: [
            {
                id: 1,
                colour: "blue",
                name: "Test dress 1",
                price: "5.99",
                img: "https://test.com/image1"
            },
            {
                id: 9,
                colour: "green",
                name: "Test dress 2",
                price: "17",
                img: "https://test.com/image2"
            }
        ]})
    });
})