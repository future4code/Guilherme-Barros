import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state={posts: [
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "julia",
      fotoUsuario: 'https://picsum.photos/50/10',
      fotoPost: 'https://picsum.photos/200/132'
    },
    {
      nomeUsuario: "joao",
      fotoUsuario: 'https://picsum.photos/50/15',
      fotoPost: 'https://picsum.photos/200/130'
    },
    
  ],
  valorInputNome: "",
  valorInputfotoUser: "",
  valorInputfotoPost: ""}
  
adicionaPost=()=>{
  const novoPost={
    nomeUsuario:this.state.valorInputNome,
    fotoUsuario:this.state.valorInputfotoUser,
    fotoPost:this.state.valorInputfotoPost
  }
  const novoPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novoPosts });
}
  onChangeInputNome=(e)=>{
    this.setState({valorInputNome:e.target.value})
  }
  onChangeInputfotoUser=(e)=>{
    this.setState({valorInputfotoUser:e.target.value})
  }
  onChangeInputfotoPost=(e)=>{
    this.setState({valorInputfotoPost:e.target.value})
  }
  render() {
    const users=this.state.posts.map((post)=>{
      return <Post
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
    />
    })

    return (
      <MainContainer>
        <input
          value={this.state.valorInputNome}

          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />
        <input

          value={this.state.valorInputfotoUser}

          onChange={this.onChangeInputfotoUser}
          placeholder={"Foto de Usuário"}
        />
        <input

          value={this.state.valorInputfotoPost}

          onChange={this.onChangeInputfotoPost}
          placeholder={"Foto do Post"}
        />
        <button onClick={this.adicionaPost}>Adicionar</button>
        {users}
        
      </MainContainer>
    );
  }
}

export default App;
