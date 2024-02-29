import { AxiosHeaders } from "axios";
import Api from "../../api/Api";
import { getProduct, getAllProducts } from "../../api/productsApi";

jest.mock("../../api/Api", () => ({
  get: jest.fn()
}));

describe("ProductsApi", () => {
  describe("getAllProducts", () => {
    test("Resolves to the response body returned by Api.get", async () => {
      const mockedApiResponse = {
        data: {
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
        },
        status: 200,
        statusText: "OK",
        config: {
          headers: new AxiosHeaders()
        },
        headers: {}
      };
      jest.mocked(Api).get.mockResolvedValue(mockedApiResponse);

      const actualResponse = getAllProducts();

      await expect(actualResponse).resolves.toEqual({
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
      });
    });
  });
  describe("getProduct", () => {
    test("Passes the id in the path to Api.get", () => {
      const mockedApiResponse = {
        data: {
          product: {
            id: 3,
            colour: "Indigo",
            name: "Test dress 3",
            price: 23.99,
            img: "https://test.com/image3"
          }
        },
        status: 200,
        statusText: "OK",
        config: {
          headers: new AxiosHeaders()
        },
        headers: {}
      };
      jest.mocked(Api).get.mockResolvedValue(mockedApiResponse);

      getProduct("3");

      expect(Api.get).toHaveBeenCalledWith(
        expect.objectContaining({
          path: "/products/3"
        })
      );
    });
    test("Resolves to the response body returned by Api.get", async () => {
      const mockedApiResponse = {
        data: {
          product: {
            id: 4,
            colour: "Maroon",
            name: "Test dress 4",
            price: 23.99,
            img: "https://test.com/image4"
          }
        },
        status: 200,
        statusText: "OK",
        config: {
          headers: new AxiosHeaders()
        },
        headers: {}
      };
      jest.mocked(Api).get.mockResolvedValue(mockedApiResponse);

      const actualResponse = getProduct("4");

      await expect(actualResponse).resolves.toEqual({
        product: {
          id: 4,
          colour: "Maroon",
          name: "Test dress 4",
          price: 23.99,
          img: "https://test.com/image4"
        }
      });
    });
  });
});
