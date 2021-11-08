import ListaDeNotas from "./components/ListaDeNotas";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";

class App extends Component {

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro></FormularioCadastro>
        <ListaDeNotas></ListaDeNotas>
      </section>
    );
  }
}

export default App;
