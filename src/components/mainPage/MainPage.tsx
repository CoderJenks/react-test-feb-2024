import { useEffect } from "react";
import { getAllProducts } from "../../api/productsApi";



const MainPage = () => {
    useEffect(() => {
        getAllProducts();
        console.log("hi there!")
    },[])

    return (
        <h1 className="MainPage__Header">
            Main Page
        </h1>
    )
}

export default MainPage;