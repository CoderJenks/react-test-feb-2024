import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <>
            <nav className="NavBar">
                <Link to="/">Home</Link>
                <Link to="/checkout">Checkout</Link>
            </nav>
        </>
    )
}

export default NavBar