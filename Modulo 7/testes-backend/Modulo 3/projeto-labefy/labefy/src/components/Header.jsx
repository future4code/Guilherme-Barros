import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Labefy</h1>
        <nav>
          <button onClick={() => this.props.mudaPagina("criaPlaylist")}>
            Criar Playlist
          </button>
          <button onClick={() => this.props.mudaPagina("playlistManager")}>
            Lista de Playlists
          </button>
        </nav>
      </>
    );
  }
}
