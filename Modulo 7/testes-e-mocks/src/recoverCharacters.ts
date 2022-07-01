import { Character } from "./model/characters";

export const recoverCharacters=(characters:Character[],validator:(input:Character)=>boolean)=>{
	if (characters.length<2 || characters.length > 2) {
		throw new Error("Invalid array");
	}
	characters.forEach((character)=>{
	if (!validator(character)) {
		throw new Error("Invalid Character");	
	}
	character.vida=1500
	})
}