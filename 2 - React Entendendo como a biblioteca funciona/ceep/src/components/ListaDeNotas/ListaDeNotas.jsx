import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {
                    Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => {
                        return (
                            <li key={index}>
                                <div>{categoria} - {index}</div>
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