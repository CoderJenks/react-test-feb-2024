import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export interface ApiBaseParams {
    path: `/${string}`
}

function getEndpointUrl(endpointPath: string): string {
    return baseUrl + endpointPath;
}


const Api = {
    get<TResponse>(request: ApiBaseParams): Promise<AxiosResponse<TResponse>>{
        return axios.get(getEndpointUrl(request.path));
    }
}

export default Api;