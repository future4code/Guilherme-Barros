import React from "react";
import axios from "axios";

export default class Cadastro extends React.Component {
  state = {
    valorInputNome: "",
    valorInputEmail: "",
  };

  mudaInputNome = (e) => {
    this.setState({ valorInputNome: e.target.value });
  };

  mudaInputEmail = (e) => {
    this.setState({ valorInputEmail: e.target.value });
  };

  criaUsuario = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.valorInputNome,
      email: this.state.valorInputEmail,
    };
    const headers = {
      headers: {
        Authorization: "guilherme-barros-joy",
      },
    };
    axios
      .post(URL, body, headers)
      .then((res) => {
        alert(`Usuário ${this.state.valorInputNome} criado com sucesso!`);
      })
      .catch((err) => {
        alert(err.response.data);
      }).finally(()=>{
	this.setState({ valorInputNome: "", valorInputEmail: "" });
      })
  };

  render() {
    return (
      <div>
        <br />
        <input
          placeholder="Nome"
          value={this.state.valorInputNome}
          onChange={this.mudaInputNome}
        ></input>
        <input
          placeholder="Email"
          value={this.state.valorInputEmail}
          onChange={this.mudaInputEmail}
        ></input>
        <button onClick={this.criaUsuario}>Criar Usuário</button>
      </div>
    );
  }
}
