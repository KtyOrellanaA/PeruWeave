import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({initial = 1, stock}) => {
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
        <div className="item-count">
            <button className="btn-count" onClick={decrement}>-</button>
            <span className="count-display">{count}</span>
            <button className="btn-count" onClick={increment}>+</button>
        </div>
    );
};

export default ItemCount