import react from "react";

export default class Etapa3 extends react.Component {
 render(){
  return (
    <div className="App">
     <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
     <div>
     <p>5. Por que não terminou o curso de graduação?</p>
     <input type='text'></input>
     </div>
     <div>
     <p>6. Você fez algum curso complementar?</p>
     <select>
	<option value="nenhum">Nenhum</option>
     <option value="tecnico">Curso Técnico</option>
     <option value="ingles">Curso de inglês</option>
     </select>
    </div><br/>
    </div>
  );
 }
  
}