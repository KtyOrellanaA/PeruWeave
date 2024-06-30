import { useState } from "react"
import NavBar from "./Components/NavBar/NavBar"
import Logo from "./Components/Logo/Logo"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"


function App() {
    const [cartCount, setCartCount] = useState (5)
    
    return (
        <>
        <Logo />
        <NavBar cartCount = {cartCount}/>
        <ItemListContainer greeting1="Explora Peru Weave:" greeting2="Donde la calidad y la cultura se entrelazan en cada tejido."/>
        </>
    )
}

export default App
