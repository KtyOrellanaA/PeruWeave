import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Carousel from "../Carousel/Carousel";
import { db } from "../../services/firebase";

const ItemListContainer = ({greeting1, greeting2}) => {
        const [products, setProducts] = useState ([])
        const [loading, setLoading] = useState (true)
        const {category} = useParams ()
        
        useEffect (() => {
            setLoading(true);

            const collectionRef = category
                ? query(collection(db, "Productos"), where("category", "==", category))
                : collection(db, "Productos");

            getDocs(collectionRef)
                .then((response) => {
                    const productsData = response.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setProducts(productsData);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }, [category]);

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