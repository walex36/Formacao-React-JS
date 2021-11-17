import ListaDeNotas from "./components/ListaDeNotas";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro>
        <ListaDeNotas notas={this.state.notas}></ListaDeNotas>
      </section>
    );
  }
}

export default App;
