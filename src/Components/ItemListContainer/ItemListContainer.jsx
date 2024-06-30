import "./ItemListContainer.css";

// const categorias = ['Chompas', 'Ponchos', 'Bufandas', 'Gorros']
const categories = [
    {id: 1, name: "Chompas", img:"../../../public/Ropa/Chompa01.jpeg"},
    {id: 2, name: "Ponchos", img:"../../../public/Ropa/Poncho01.jpeg"},
    {id: 3, name: "Casacas", img:"../../../public/Ropa/Casaca01.jpeg"},
    {id: 4, name: "Bufandas", img:"../../../public/Accesorios/Chalinas01.jpeg"},
    {id: 5, name: "Gorros", img:"../../../public/Accesorios/Gorro01.jpeg"},
    {id: 6, name: "Guantes", img:"../../../public/Accesorios/Guantes01.jpeg"},
    {id: 7, name: "Mantas", img:"../../../public/Hogar/Mantas01.jpeg"},
    {id: 8, name: "Cojines", img:"../../../public/Hogar/Cojines01.jpeg"},
]

function ItemListContainer({greeting1, greeting2}) {
    // console.log(categorias);

    return (
        <div>
            <div>
                <h2 className="text-center greeting1">{greeting1}</h2>
                <p className="text-center greeting2">{greeting2}</p>
            </div>
            <div className="card-container">
                {categories.map(item => (
                    <div key={item.id} className="card" style={{width: '18rem'}}>
                        <img src={item.img} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;