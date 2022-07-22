import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes";
export default class Music extends React.Component {
  state = {
    tracks: [],
    trackName: "",
    artist: "",
    url: "",
   
  };
  changeInputValues = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount = () => {

    this.listaMusicas();
  };
 
  listaMusicas = async () => {

    try {
      const res = await axios.get(
        `${baseUrl}/${this.props.playlistId}/tracks`,
        axiosConfig
      );
      this.setState({ tracks: res.data.result.tracks });
    } catch (err) {
      alert(err);
    }
  };
  deletaMusica = async (id) => {
    try {
      await axios.delete(
        `${baseUrl}/${this.props.playlistId}/tracks/${id}`,
        axiosConfig
      );

      this.listaMusicas();
    } catch (err) {
      alert(err);
    }
  };
  addMusica = async (e) => {
    e.preventDefault()
    try {
      const body = {
        name: this.state.trackName,
        artist: this.state.artist,
        url: this.state.url,
      };
      await axios.post(
        `${baseUrl}/${this.props.playlistId}/tracks`,
        body,
        axiosConfig
      );

      this.listaMusicas();
      this.setState({
        trackName: "",
        artist: "",
        url: "",
      });
    } catch (err) {
      alert(err);
    }
  };
  render() {
    const tracks = this.state.tracks.map((track) => {
      return (
        <p key={track.id}>
          {track.name} - {track.artist}
          <button onClick={() => this.deletaMusica(track.id)}>X</button>
          <audio controls='controls'><source autoplay src={track.url}/></audio>
        </p>
      );
    });
    return (
      <div onSubmit={this.addTrackToPlaylist}>
        <div>
          <label>Música:</label>
          <input
            placeholder="Digite o nome da música"
            name="trackName"
            value={this.state.trackName}
            onChange={this.changeInputValues}
          />
        </div>
        <div>
          <label>Artista:</label>
          <input
            placeholder="Digite o nome do artista"
            name="artist"
            value={this.state.artist}
            onChange={this.changeInputValues}
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            placeholder="Insira o link da música"
            name="url"
            value={this.state.url}
            onChange={this.changeInputValues}
          />
        </div>
        <button type="submit" onClick={this.addMusica}>
          Adicionar música
        </button>
        {tracks}
        
      </div>
    );
  }
}
