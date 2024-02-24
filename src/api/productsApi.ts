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