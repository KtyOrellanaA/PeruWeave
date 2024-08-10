import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
            <div className="container-fluid p-0 m-0 text-center">
                <img src='../../../public/LOGO_Peru weave_LOGO_DulceHorneado_Color_Horizontal.png' height="120"></img>
            </div>
        </Link>
    )
}

export default Logo;