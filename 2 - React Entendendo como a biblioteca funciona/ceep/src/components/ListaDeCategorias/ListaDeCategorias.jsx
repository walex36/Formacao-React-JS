import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends React.Component {
    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <input className="lista-categorias_input" type="text" />
            </section>
        );
    }
}

export default ListaDeCategorias;