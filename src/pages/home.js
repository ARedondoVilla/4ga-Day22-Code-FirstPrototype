import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Estamos in-pacientes</h1>
                <Link  to="/registro">
                    <button> Log In </button>
                </Link>
                <Link  to="/password">
                    <h6> Recuperar contraseña </h6>
                </Link>
                
            </div>
        </div>
    )
}