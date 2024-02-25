import Api from "./Api";

export interface ProductsResponse {
    products: productResponse[];
}

export interface productResponse {
    id: number,
    colour: string,
    name: string,
    price: number,
    img: string
}


export async function getAllProducts(): Promise<ProductsResponse> {
    const { data } = await Api.get<ProductsResponse>({
        path: `/products`
    });

    return data;
}

export async function getProduct(id: string): Promise<productResponse> {
    const { data } = await Api.get<productResponse>({
        path: `/products/${id}`
    });

    return data;
}