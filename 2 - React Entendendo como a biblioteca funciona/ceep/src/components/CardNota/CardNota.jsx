import React, { Component } from 'react';
import './estilo.css'
import {ReactComponent as DeleteSVG} from '../../assets/imgs/delete.svg';

class CardNota extends Component {

   apagar(){
    this.props.apagarNota(this.props.notas.indice)
   }
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.notas.titulo}</h3>
                    <DeleteSVG onClick={this.apagar.bind(this)}/>
                </header>
                <p className="card-nota_texto">{this.props.notas.texto}</p>
            </section>
        );
    }
}

export default CardNota;