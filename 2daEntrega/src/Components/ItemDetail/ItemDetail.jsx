import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css";

const ItemDetail = ({name, img, category, description, stock, price}) => {
    return (
        // 1RA FORMA:

        // <article>
        //     <h1>{name}</h1>
        //     <img src={img} style={{ width: 300 }} alt={name} />
        //     <p>Category: {category}</p>
        //     <p>{description}</p>
        //     <h2>{price}</h2>
        //     <ItemCount stock={stock} />
        //     {/* <p>{stock}</p> */}
        // </article>

        //2DA FORMA
        <div className="detail-card-horizontal">
            <img src={img} className="detail-img-horizontal" alt={name} />
            <div className="detail-body-horizontal">
                <h1 className="detail-title">{name}</h1>
                <p className="detail-category">Categoría: {category}</p>
                <p className="detail-description">{description}</p>
                <h2 className="detail-price">Precio: S/. {price}</h2>
                <ItemCount stock={stock} />
            </div>
        </div>
    )
}

export default ItemDetail