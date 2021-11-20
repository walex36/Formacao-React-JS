import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

    render() {
        return (
            <ul className="lista-notas">
                {
                    this.props.notas.map((nota, index) => {
                        return (
                            <li key={index} className="lista-notas_item">
                                <CardNota indice={index} notas={nota} apagarNota={this.props.apagarNota}></CardNota>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default ListaDeNotas;