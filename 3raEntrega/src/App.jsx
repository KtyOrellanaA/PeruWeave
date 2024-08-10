import { useState } from "react"
import NavBar from "./Components/NavBar/NavBar"
import Logo from "./Components/Logo/Logo"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "../Context/CartContext"



function App() {
    
    return (
        <BrowserRouter>
            <CartProvider>

                <Logo />
                <NavBar/>
                {/* Aquí se activa según el switch */}
                <Routes>
                    {/* Banner y productos en la parte inferior */}
                    <Route
                        path="/" element={<ItemListContainer
                        greeting1="Explora Peru Weave:"
                        greeting2="Donde la calidad y la cultura se entrelazan en cada tejido." />} />
                    {/* Banner con productos filtrados por categorías */}
                    <Route
                        path="/category/:category" element={<ItemListContainer
                        greeting1="Explora Peru Weave:"
                        greeting2="Donde la calidad y la cultura se entrelazan en cada tejido." />} />
                    {/* Detalles del producto seleccionado */}
                    <Route
                        path="/detail/:id" element={<ItemDetailContainer />} />                 
                    {/* <Route exact path="/" element={<ItemDetailContainer />} /> */}
                </Routes>
            
            </CartProvider>
        </BrowserRouter>
    )
}

export default App
