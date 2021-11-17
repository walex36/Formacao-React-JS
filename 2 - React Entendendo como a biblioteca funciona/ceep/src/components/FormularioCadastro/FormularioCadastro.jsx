import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this.titulo = "";
        this.text = "";
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.text = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.text);
    }

    render() {
        return (
            <form className="form-cadastro" 
             onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    rows={15}
                    onChange={this._handleMudancaTexto.bind(this)}
                />

                <button
                    className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;