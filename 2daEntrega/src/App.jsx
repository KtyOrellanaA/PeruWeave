import { useState } from "react"
import NavBar from "./Components/NavBar/NavBar"
import Logo from "./Components/Logo/Logo"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"

function App() {
    const [cartCount, setCartCount] = useState (5)
    
    return (
        <BrowserRouter>
            <Logo />
            <NavBar cartCount = {cartCount}/>
            {/* Aquí se activa según el switch */}
            <Routes>
                <Route path="/" element={<ItemListContainer
                    greeting1="Explora Peru Weave:"
                    greeting2="Donde la calidad y la cultura se entrelazan en cada tejido." />} />
                <Route path="/category/:category" element={<ItemListContainer
                    greeting1="Explora Peru Weave:"
                    greeting2="Donde la calidad y la cultura se entrelazan en cada tejido." />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />                 
            </Routes>
        </BrowserRouter>
    )
}

export default App
