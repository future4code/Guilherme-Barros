import React from "react";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import PlaylistManager from "./components/PlaylistManager";
export default class App extends React.Component {
  state = {
    currentPage: "playlistManager",
  
  };

  mudaPagina = (pagina) => {
    this.setState({ currentPage: pagina });
  };

  render() {
    const renderPagina = () => {
      if (this.state.currentPage === "criaPlaylist") {
        return <Playlist />;
      } else if (this.state.currentPage === "playlistManager") {
        return <PlaylistManager />;
      }
    };
    return (
      <>
        <Header mudaPagina={this.mudaPagina} />

        {renderPagina()}
      </>
    );
  }
}
