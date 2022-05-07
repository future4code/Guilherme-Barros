import React from 'react';
import styled from 'styled-components'
const Tela=styled.div`
display:flex;
justify-content:center;
`
const Layout=styled.div`
max-width: 600px;
height: 100vh;
border: 1px solid black;
flex: 1 1 0%;
display: flex;
flex-direction: column;
`
const Conteudo=styled.div`
flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
`
const Form=styled.div`
display:flex;`

const InputUser=styled.input`
width:100px;
`
const InputMessage=styled.input`
flex: 1 1 0%;`


class App extends React.Component {
  state={mensagem:[
    {
    user:"",
    message:""
  },
  
],
valorInputUser:'',
  valorInputMessage:''
}
  adicionaMensagem=()=>{
    const novaMensagem={
      user:this.state.valorInputUser,
      message:": "+this.state.valorInputMessage
    }
    const novaMensagens=[...this.state.mensagem , novaMensagem]
    this.setState({mensagem:novaMensagens})
  }

  onChangeInputUser=(e)=>{
    this.setState({valorInputUser:e.target.value})
  }

  onChangeInputMessage=(e)=>{
    this.setState({valorInputMessage:e.target.value})
  }
  render() {
    const listaMensagens=this.state.mensagem.map((frase)=>{
      return(
        
         <p> <span> {frase.user}</span>
          {frase.message}</p>
    
      )
    })
  return (
    <Tela>
      <Layout>
      <Conteudo>{listaMensagens}</Conteudo>
      <Form>
       <InputUser
       value={this.state.valorInputUser}
       onChange={this.onChangeInputUser}
          placeholder={"Usuário"}
        />
        <InputMessage
        value={this.state.valorInputMessage}
        onChange={this.onChangeInputMessage}
          placeholder={"Mensagem"}
        />
        <button onClick={this.adicionaMensagem}>Enviar</button>
        </Form>
        </Layout>
    </Tela>
  );
}

}

export default App;
