// import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

function NavBar () {

    return (
        <nav className="navbar navBarDesign navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Renderizados condicionales */}
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/category/ropa">Ropa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/category/accesorio"> Accesorio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/category/hogar">Hogar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/category/bolso">Bolso</NavLink>
                        </li>                        
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CardWidget/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;