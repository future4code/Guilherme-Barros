import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes";
export default class Playlist extends React.Component {
  state = {
    telaPlaylists: true,
    valorInputPlaylist: "",
  };
  changeInputPlaylist = (e) => {
    this.setState({ valorInputPlaylist: e.target.value });
  };

  criaPlaylist = async () => {
    const body = {
      name: this.state.valorInputPlaylist,
    };

    try {
      await axios.post(baseUrl, body, axiosConfig);
      alert(`Playlist ${this.state.valorInputPlaylist} criada!`);
      this.setState({ valorInputPlaylist: "" });
    } catch (err) {
      alert(err);
    }
  };
  render() {
    return (
      <>
        <h1>Cadastrar Playlist</h1>
        <input
          type="text"
          placeholder="Digite o nome da Playlist..."
          onChange={this.changeInputPlaylist}
          value={this.state.valorInputPlaylist}
        />
        <button onClick={this.criaPlaylist}>Criar</button>
      </>
    );
  }
}
