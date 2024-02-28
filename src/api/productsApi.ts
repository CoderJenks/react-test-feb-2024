import Api from "./Api";

export interface ProductsResponse {
    products: ProductResponse[];
}

export interface ProductResponse {
    id: number,
    colour: string,
    name: string,
    price: number,
    img: string
}


export async function getAllProducts(): Promise<ProductResponse[]> {
    const { data } = await Api.get<ProductResponse[]>({
        path: `/products`
    });

    return data;
}

export async function getProduct(id: string): Promise<ProductResponse> {
    const { data } = await Api.get<ProductResponse>({
        path: `/products/${id}`
    });

    return data;
}