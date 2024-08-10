import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";


const ItemDetail = ({id, name, img, category, description, stock, price}) => {
    
    const { addItem, isInCart, updateItemQuantity } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const handleAdd = (count) => {
        if (quantity + count <= stock) {
            const newQuantity = quantity + count;
            setQuantity(newQuantity);

            if (isInCart(id)) {
                updateItemQuantity(id, newQuantity);
            } else {
                const productObj = { id, name, price, quantity: newQuantity };
                addItem(productObj);
            }
        } else {
            alert("No puedes agregar más del stock disponible.");
        }
    };

    // // FORMA 2
    // const {addItem, isInCart} = useContext ( CartContext )

    // const handleAdd = (count) => {
    //     const productObj = {
    //         id, name, price, quantity:count
    //     };
    //     addItem (productObj)
    // }
    
    return (
        <div className="detail-card-horizontal">
            <img src={img} className="detail-img-horizontal" alt={name} />
            <div className="detail-body-horizontal">
                <h1 className="detail-title">{name}</h1>
                <p className="detail-category">Categoría: {category}</p>
                <p className="detail-description">{description}</p>
                <h2 className="detail-price">Precio: S/. {price}</h2>
                <h2 className="detail-description">Disponible - {stock}</h2>

                <div>
                    <ItemCount stock={stock} onAdd={handleAdd} />
                    {quantity > 0 && (
                        <Link className="btn-finish-purchase" to='/Cart'>Finalizar compra</Link>
                    )}
                </div>

                {/* FORMA 2
                <div>
                    {
                        isInCart (id) ? (
                            <Link className="btn-finish-purchase" to='/Cart'>Finalizar compra</Link>
                        ): (
                            <ItemCount stock={stock} onAdd={handleAdd} />
                        )
                    }
                </div> */}

            </div>
        </div>
    )
}

export default ItemDetail;