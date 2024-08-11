import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
    const {cart, getTotal, totalQuantity} = useCart ()
    const total = getTotal ()

    if (totalQuantity === 0 ) {
        return <h1>No hay items en el carrito </h1>
    }

    return (
        <div>
            {cart.map ((item) => (
                <CartItem key ={item.id} {...item}/>
            ))}
            <h3>Total: S/. {total}</h3>
            <div>
                <button className="btn-count2">Limpiar carrito</button>
            </div>
            <div>
                <Link to="/checkout" className="btn-count2">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart