import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <div className="container">
            <div className="jumbotron">
                 <h1>Buscador de enfermedades </h1>
                <input type="text"></input>
                <Link to="/disease"> 
                    <input type="submit" value="Busca"></input>
                </Link>
            </div>
        </div>
    )
}