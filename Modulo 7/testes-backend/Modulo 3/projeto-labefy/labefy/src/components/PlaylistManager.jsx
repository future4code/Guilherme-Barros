import React from "react";
import Music from "./Music";
import ViewPlaylists from "./ViewPlaylists";
export default class PlaylistManager extends React.Component {
  
  state = {
    currentPage: "listaPlaylists",
    playlistId: "",
  };
  changePage = (pagina, playlistId) => {
    this.setState({
      currentPage: pagina,
      playlistId: playlistId,
    });
  };
  render() {
    const renderPagina = () => {
      if (this.state.currentPage === "listaPlaylists") {
        return (
          <ViewPlaylists
            changePage={this.changePage}
            playlistId={this.state.playlistId}
          />
        );
      } else if (this.state.currentPage === "musics") {
        return (

          <Music
            playlistId={this.state.playlistId}
          />
        );
      }
    };
    return <>{renderPagina()}</>;
  }
}
