import React from "react";
import ListaUsers from "./components/ListaUsers.jsx";
import Cadastro from "./components/Cadastro.jsx";

export default class App extends React.Component {
  state = {
    telaCadastro: true,
  };

  telaUsuarios = () => {
    this.setState({ telaCadastro: !this.state.telaCadastro });
  };

  render() {
    return (
      <>
        <button onClick={this.telaUsuarios}>Trocar de Tela</button>
        {this.state.telaCadastro ? <Cadastro /> : <ListaUsers />}
      </>
    );
  }
}
