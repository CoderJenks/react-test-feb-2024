import { useParams } from "react-router-dom";

function useProductId(): string {
    const { productId } = useParams();

    if (!productId) {
        throw new Error("Missing productId from params");
    }

    return productId;
}

export default useProductId;