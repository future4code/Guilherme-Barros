import './App.css';
import { useState } from 'react';
import { limpaMatches } from './services/HttpClient';
import { ChangeScreen } from './components/ChangeScreen';
function App() {
 
 
  const [matches, setMatches] = useState([])




  return (
    <div className="App">
      <header className="App-header">
     
   <ChangeScreen setMatches={setMatches} matches={matches}/>
   <button onClick={()=>limpaMatches(setMatches)}>Limpar Swipes e Matches</button>
      </header>
     
    </div>
  );
}

export default App;
