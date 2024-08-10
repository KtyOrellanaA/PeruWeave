import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState (initial);

    const increment = () => {
        if (count < stock) {
            setCount ((prev) => prev + 1 );
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount ((prev) => prev - 1 );
        }
    };

    return (
        <div>
            <div className="item-count">
                <button className="btn-count" onClick={decrement}>-</button>
                <span className="count-display">{count}</span>
                <button className="btn-count" onClick={increment}>+</button>
            </div>
            <div>
                <button className="item-count btn-count2" onClick={ ()=> onAdd (count) }>Agregar carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;