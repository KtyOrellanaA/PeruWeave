import { useEffect, useState } from "react";
import { getProducts , getProductsByCategory } from "../../asyncMock";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const ItemListContainer = ({greeting1, greeting2}) => {
        const [products, setProducts] = useState ([])
        const {category} = useParams ()
        console.log(category);
        
        useEffect (() => {
            if (!category) {
                getProducts()
                .then ( (res) => {
                    setProducts(res)
                })
                .catch ( (err) => console.log (err))
            } else {
                getProductsByCategory (category)
                    .then ( (res) => {
                        setProducts (res)
                    })
                    .catch ( (err) => console.log(err))
            }
        }, [category]) //Aqui no iba id
        
    return (
        <div>
            <Carousel greeting1={greeting1} greeting2={greeting2} />
            <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer;