import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({id, name, img, category, price}) => {
    return (
        // 1RA FORMA: información que se reflejará como listado.

        // <article>
        //     <h1>{name}</h1>
        //     <img src={img} style={{ width: 100 }} alt={name} />
        //     <p>Category: {category}</p>
        //     <h2>{price}</h2>
        //     <Link to={`/detail/${id}`}> Ver Detalle </Link>
        // </article>

        //2 DA FORMA: Haciendo uso de bootstrap
        
        <div className="card" style={{ width: '18rem', margin: '1rem' }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Categoría: {category}</p>
                <p className="card-text2">Precio: S/. {price}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>
    );
}

export default Item;