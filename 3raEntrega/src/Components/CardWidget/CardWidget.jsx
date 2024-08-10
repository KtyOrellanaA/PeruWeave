import { useContext } from "react";
import cart from "../../../public/Carrito.png";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

function CardWidget() {
    const {totalQuantity} = useContext (CartContext)

    return (
        <Link className="nav-link pr-5" to="/cart">
            <img src={cart} width={"36px"} className="me-3" />
            {totalQuantity}
        </Link>
    );
}

export default CardWidget