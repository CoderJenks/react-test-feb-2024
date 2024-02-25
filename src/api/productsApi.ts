import Api from "./Api";

interface ProductsResponse {
    products: productResponse[];
}

interface productResponse {
    id: number,
    colour: string,
    name: string,
    price: number,
    img: string
}


export async function getProducts(): Promise<ProductsResponse> {
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