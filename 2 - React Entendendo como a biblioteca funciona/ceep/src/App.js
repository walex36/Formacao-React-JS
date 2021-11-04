import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";

class App extends Component {

  render() {
    return (
      <>
        <FormularioCadastro></FormularioCadastro>
        <ListaDeNotas></ListaDeNotas>
      </>
    );
  }
}

export default App;
