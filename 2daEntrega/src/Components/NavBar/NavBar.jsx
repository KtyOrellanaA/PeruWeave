import { Link } from 'react-router-dom';
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

function NavBar ({cartCount}) {
    return (
        <nav className="navbar navBarDesign navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/category/ropa">Ropa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/category/accesorio"> Accesorio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/category/hogar">Hogar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/category/bolso">Bolso</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CardWidget cartCount={cartCount}/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;