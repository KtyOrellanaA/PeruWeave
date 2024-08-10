import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState ();
    const [loading, setLoading] = useState (true)
    const {id} = useParams ();

    useEffect ( () => {
        getProductById (id)
            .then ( (res) => {
                setProduct (res)
                // console.log(product);
            })
            .catch ( (err) => console.log (err))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return <h1 className="loading-message">Cargando detalles ...</h1>
    }

    return (
        <div>
            {product && <ItemDetail {...product} />}
        </div>
    )
}
