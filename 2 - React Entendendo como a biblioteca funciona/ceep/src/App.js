import ListaDeNotas from "./components/ListaDeNotas";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudoPrincipal">
          <ListaDeCategorias
            categorias={this.categorias}
            criarCategoria={this.categorias.criarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas} 
            apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
