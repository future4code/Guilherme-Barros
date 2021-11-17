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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'julia'}
          fotoUsuario={'https://picsum.photos/50/10'}
          fotoPost={'https://picsum.photos/200/132'}
        />
        <Post
          nomeUsuario={'joao'}
          fotoUsuario={'https://picsum.photos/50/15'}
          fotoPost={'https://picsum.photos/200/130'}
        />
      </MainContainer>
    );
  }
}

export default App;
