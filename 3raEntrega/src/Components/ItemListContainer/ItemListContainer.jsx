import { useEffect, useState } from "react";
import { getProducts , getProductsByCategory } from "../../asyncMock";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const ItemListContainer = ({greeting1, greeting2}) => {
        const [products, setProducts] = useState ([])
        const [loading, setLoading] = useState (true)
        const {category} = useParams ()
        
        useEffect (() => {
            setLoading(true); // Activar el estado de carga al inicio del efecto

            if (!category) {
                getProducts()
                    .then ( (res) => {
                        setProducts(res)
                    })
                    .catch ( (err) => console.log (err))
                    .finally(() => setLoading(false))
            } else {
                getProductsByCategory (category)
                    .then ( (res) => {
                        setProducts (res)
                    })
                    .catch ( (err) => console.log(err))
                    .finally(() => setLoading(false))
            }
        }, [category])

        if (loading) {
            return <h1 className="loading-message">Cargando productos ...</h1>
        }
        
    return (
        <div>
            <Carousel greeting1={greeting1} greeting2={greeting2} />
            <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer;