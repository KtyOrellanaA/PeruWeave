import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

function NavBar ({cartCount}) {
    return (
        // bg-body-tertiary 
        <nav className="navbar navBarDesign navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ropa</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Chompas</a></li>
                                <li><a className="dropdown-item" href="#">Ponchos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Accesorios</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Bufandas</a></li>
                                <li><a className="dropdown-item" href="#">Gorros</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hogar</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Mantas</a></li>
                                <li><a className="dropdown-item" href="#">Cojines</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
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