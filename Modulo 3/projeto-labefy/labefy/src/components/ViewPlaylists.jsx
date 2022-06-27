import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes";

export default class ViewPlaylists extends React.Component {

  state = {
    playlists: [],
    telaViewPlaylists: true,
    
  };

  componentDidMount = () => {
    this.getPlaylists();
  };

  getPlaylists = async () => {
    try {
      const res = await axios.get(baseUrl, axiosConfig);
 
      this.setState({ playlists: res.data.result.list });

    } catch (err) {
      alert(err);
    }
  };
  deletePlaylist = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`, axiosConfig);

      this.getPlaylists();
    } catch (err) {
      alert(err);
    }
  };
  render() {
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <ul key={playlist.id}>
          <button
            onClick={() =>
              this.props.changePage("musics", playlist.id)
            }
          >
            Abrir Playlist
          </button>
          <li >
            {" "}
            {playlist.name}
            <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
          </li>
        </ul>
      );
    });
    return <>{this.state.playlists.length? playlists : <p>Carregando...</p>}</>;
  }
}
