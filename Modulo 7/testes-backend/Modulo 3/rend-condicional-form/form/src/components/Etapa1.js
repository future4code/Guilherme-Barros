import react from "react";
import Etapa2 from "./Etapa2";

export default class Etapa1 extends react.Component {
	
 render(){

  return (
    <div className="App">
	       
	    <h3>ETAPA 1 - DADOS GERAIS</h3>
	<div>
     <p>1. Qual o seu nome?</p>
     <input type='text'></input>
     </div>
     <div>
     <p>2. Qual sua idade?</p>
     <input type='text'></input>
    </div>
    <div>
     <p>3. Qual o seu email?</p>
     <input type='text'></input>
    </div>
    <div>
     <p>4. Qual a sua escolaridade?</p>
     <select>
	<option value="Ensino médio incompleto">Ensino médio incompleto</option>
     <option value="Ensino médio completo">Ensino médio completo</option>
     <option value="Ensino superior incompleto">Ensino superior incompleto</option>
     <option value="Ensino superior completo">Ensino superior completo</option>
     </select>
    </div>
    <br/>
    </div>
    
  );
 }
  
}