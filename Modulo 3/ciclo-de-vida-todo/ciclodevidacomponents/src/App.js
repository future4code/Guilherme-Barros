import React from 'react'
import styled from 'styled-components'
import './styles.css'
const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Projeto Labenu',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Exercício Labenu',
          completa: true // Indica se a tarefa está completa (true ou false)
        }
      ],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    const textoTarefas = this.state.tarefas;
    const tarefaString = JSON.stringify(textoTarefas);
    window.localStorage.setItem("textoTarefas", tarefaString)
  };

  componentDidMount() {
    const tarefaStrings = window.localStorage.getItem("textoTarefas");

    if(tarefaStrings) {
      const textoTarefas = JSON.parse(tarefaStrings);
      this.setState({ tarefas: textoTarefas });
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
  }

  criaTarefa = () => {
      const tarefas={
        id: Date.now(), // aqui, pode deixar o valor Date.now() para todas as tarefas as serem criadas
        texto: this.state.inputValue,// aqui, o texto da tarefa virá do input controlado guardado no estado
        completa: false // aqui, pode deixar o valor false para todas as tarefas as serem criadas, pq a tarefa sempre vai começar como não completa.
      }

      const novaTarefa=[...this.state.tarefas,tarefas]
      this.setState({tarefas:novaTarefa})
      this.setState({inputValue:''})
  }

  selectTarefa = (id) => {
  const novaListaTarefas=this.state.tarefas.map((tarefa)=>{
    if(id==tarefa.id) {
      const newTarefa={
        ...tarefa,
        completa: !tarefa.completa
      }
      return newTarefa
    }else{
      return tarefa
    }
    
  }) 
  this.setState({tarefas:novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value});

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App