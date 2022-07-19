import { Character } from "./model/characters";

export const decreaseCharacterDefense=(character: Character,newDefense:number,validator:(input:Character)=>boolean)=>{
	if (!validator(character)) {
		throw new Error("Invalid Character");
	}
	if (newDefense > character.defesa) {
		throw new Error("Invalid Defense");
	}
	character.defesa=newDefense
}