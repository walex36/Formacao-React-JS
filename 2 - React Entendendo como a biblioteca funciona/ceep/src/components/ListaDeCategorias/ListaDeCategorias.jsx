import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]}

        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categoria.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }

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
                    {this.state.categorias.map((categoria, index) => {
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