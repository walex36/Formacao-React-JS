import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {
                    Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => {
                        return (
                            <li key={index} className="lista-notas_item">
                                <CardNota></CardNota>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default ListaDeNotas;