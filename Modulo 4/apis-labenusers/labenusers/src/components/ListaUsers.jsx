import React from "react";
import axios from "axios";


export default class ListaUsers extends React.Component {
  state = {
    users: [],
    valorInputNome: "",
  };
  mudaInputNome = (e) => {
    this.setState({ valorInputNome: e.target.value });
  };

  componentDidMount = () => {
    this.buscarUsuarios();

  };


  buscarUsuarios = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
      headers: {
        Authorization: "guilherme-barros-joy",
      },
    };

    axios
      .get(URL, headers)
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        alert(err.res.data);
      });
  };
  buscaUsuarioPorNome = (nome) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${nome}&email=`;
    const headers = {
      headers: {
        Authorization: "guilherme-barros-joy",
      },
    };
    axios
      .get(URL, headers)
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  deleteUser = (id) => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const headers = {
      headers: {
        Authorization: "guilherme-barros-joy",
      },
    };
    const confirmation = window.confirm("Deseja remover o usuário?");
    if (confirmation) {
      axios
        .delete(URL, headers)
        .then((res) => {
          alert(`Usuário deletado com sucesso`);
          this.buscarUsuarios()
        })
        .catch((err) => {
          alert("Ocorreu um problema, tente novamente!");
        });
    } else {
      alert("Usuário mantido");
    }
  };
  render() {
    const listUsers = this.state.users
      .map((user) => {
        return (
          <ul>
            <li key={user.id}>
              {user.name}
              <button onClick={() => this.deleteUser(user.id)}>X</button>
            </li>
          </ul>
        );
      })
      .filter((user) => {
        return (
          <ul>
            <li key={user.id}>
              {user.name}
              <button onClick={() => this.deleteUser(user.id)}>X</button>
            </li>
          </ul>
        );
      });

    return (
      <div>
        <br />
        {listUsers}
        <hr />
        <h4>Procurar Usuário</h4>
        <input
          placeholder="Nome exato para busca"
          value={this.state.valorInputNome}
          onChange={this.mudaInputNome}
        ></input>
        <button
          onClick={() => this.buscaUsuarioPorNome(this.state.valorInputNome)}
        >
          Salvar Edição
        </button>
      </div>
    );
  }
}
