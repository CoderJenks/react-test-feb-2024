import { AxiosHeaders } from "axios";
import Api from "../../api/Api";
import { getMenu } from "../../api/menuApi";

jest.mock("../../api/Api", () => ({
    get: jest.fn()
}));

describe("MenuApi", () => {
    describe("getMenu", () => {
        test("Resolves to the response body returned by Api.get", async () => {
            const mockedApiResponse = {
                data: {
                    menu: [
                        {
                          "name": "Main Items",
                          "img": "https://test.com/menuimage1",
                          "children": [
                            {
                              "name": "Sub Items 1",
                              "categories": [
                                "Cat1",
                                "Cat2",
                                "Cat3"
                              ]
                            },
                            {
                              "name": "Sub Items 2",
                              "categories": [
                                "Cat4",
                                "Cat5",
                                "Cat6"
                              ]
                            }
                          ]
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
    
            const actualResponse = getMenu();
    
            await expect(actualResponse).resolves.toEqual({
                menu: [
                    {
                      "name": "Main Items",
                      "img": "https://test.com/menuimage1",
                      "children": [
                        {
                          "name": "Sub Items 1",
                          "categories": [
                            "Cat1",
                            "Cat2",
                            "Cat3"
                          ]
                        },
                        {
                          "name": "Sub Items 2",
                          "categories": [
                            "Cat4",
                            "Cat5",
                            "Cat6"
                          ]
                        }
                      ]
                    }
                  ]})
        });
    })
})
