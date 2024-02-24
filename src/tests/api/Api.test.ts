import axios from "axios";
import Api from "../../api/Api";

// API URL kept in environment folder, in production environment this would be set for staging, pre-production and production
const baseUrl = process.env.REACT_APP_API_URL;
jest.mock("axios", () => ({
    ...jest.requireActual("axios"),
    get: jest.fn()
}));

describe ("API", () => {
    beforeEach(() => {
        jest.resetModules();
    });
    afterEach(() => {
        jest.clearAllMocks();
    })
    test("Api.get returns the Axios response body", async () => {
        const expectedResponse = {
            data: [{ id: 1, name: "Name1"}]
        };

        jest.mocked(axios.get).mockResolvedValueOnce(expectedResponse);

        const apiResponse = await Api.get({
            path: "/fetch"
        });

        expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/fetch`);
        expect(apiResponse).toEqual(expectedResponse);
    });

    test("Api.get rejects with the error from Axios", async () => {
        jest.mocked(axios.get).mockRejectedValue("Error Message");

        try {
            await Api.get({
                path: "/fetch"
            });
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/fetch`);
            // eslint-disable-next-line jest/no-conditional-expect
            expect(e).toBe("Error Message");
        }
    })
})