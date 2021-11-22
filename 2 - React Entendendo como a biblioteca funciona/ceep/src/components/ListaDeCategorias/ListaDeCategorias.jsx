import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends React.Component{

    _handleEventoInput(e) {
        e.preventDefault();
        e.stopPropagation();
        this.textCategoria = e.target.value;
        if (e.key === "Enter" && this.textCategoria !== "") {
            this.props.criarCategoria(this.textCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}
                </ul>

                <input className="lista-categorias_input"
                    type="text"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;