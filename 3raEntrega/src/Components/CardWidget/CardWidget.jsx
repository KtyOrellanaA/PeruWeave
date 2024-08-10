import { useContext } from "react";
import Logo from "../../../public/Carrito.png";
import { CartContext } from "../../../Context/CartContext";

function CardWidget() {
    const {totalQuantity} = useContext (CartContext)

    return (
        <a className="nav-link pr-5" href="#">
            <img src={Logo} width={"36px"} className="me-3" />
            {totalQuantity}
        </a>
    );
}

export default CardWidget