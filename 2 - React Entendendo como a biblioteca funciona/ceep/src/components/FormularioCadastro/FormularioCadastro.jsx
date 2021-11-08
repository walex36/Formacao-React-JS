import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(){
        super();
        this.titulo = "";
        this.text = "";
    }

    handleMudancaTitulo(evento){
        titulo = evento.target.value;
    }
    render() {
        return (
            <form className="form-cadastro">
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTitulo}
                />
                <textarea
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    rows={15}
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