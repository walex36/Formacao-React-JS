import ListaDeNotas from "./components/ListaDeNotas";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);

    this.setState({ notas: arrayNotas });
  }

  criarCategoria(novaCategoria) {
    const novoArrayCategoria = [...this.state.categorias, novaCategoria];
    const novoEstado = {
      ...this.state,
      categorias: novoArrayCategoria
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudoPrincipal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            criarCategoria={this.criarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas} 
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
