import { Children, createContext, useState } from "react";

export const CartContext = createContext ();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    console.log(cart);

    // Verifica si un producto está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    // Agrega un producto al carrito o actualiza la cantidad si ya está en el carrito
    const addItem = (productoToAdd) => {
        if (isInCart(productoToAdd.id)) {
            updateItemQuantity(productoToAdd.id, productoToAdd.quantity);
        } else {
            setCart((prev) => [...prev, productoToAdd]);
        }
    };

    // Actualiza la cantidad de un producto en el carrito
    const updateItemQuantity = (id, quantity) => {
        setCart((prev) =>
            prev.map((prod) =>
                prod.id === id
                    ? { ...prod, quantity }
                    : prod
            )
        );
    };

    // Obtiene la cantidad total de productos en el carrito
    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach((prod) => {
            accu += prod.quantity;
        });
        return accu;
    };

    // Vacía el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Remueve un producto del carrito
    const removeItem = (id) => {
        setCart((prev) => prev.filter((prod) => prod.id !== id));
    };

    const totalQuantity = getTotalQuantity();

    const obj = {
        cart,
        isInCart,
        addItem,
        updateItemQuantity,
        clearCart,
        removeItem,
        totalQuantity,
    };

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    );
};

//  -------------------------------------------

//     //Funcionalidad de agregar al carrito
//     const addItem = (productoToAdd) => {
//         if (!isInCart (productoToAdd.id)) {
//             setCart ( prev => [...prev, productoToAdd])
//         } else {
//             console.error ("El producto ya está en el carrito")
//         }
//     }

//     const getTotalQuantity = () => {
//         let accu = 0;
//         cart.forEach (prod => {
//             accu += prod.quantity 
//         })

//         return accu;
//     }

//     const totalQuantity = getTotalQuantity ()
    
//     //Vaciar el carrito
    
//     //Remover un item
    
//     //Totalizador de elementos en el carrito
//     const obj = { cart, isInCart, addItem, totalQuantity }
//     return (
//         <CartContext.Provider value={obj}>
//             {children}
//         </CartContext.Provider>
//     )   

// }