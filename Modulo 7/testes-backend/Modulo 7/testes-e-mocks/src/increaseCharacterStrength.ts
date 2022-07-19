import { Character } from "./model/characters";

export const increaseCharacterStrength=(character: Character,newStrength:number,validator:(input:Character)=>boolean)=>{
	if (!validator(character)) {
		throw new Error("Invalid Character");
	}
	if (newStrength < character.forca) {
		throw new Error("Invalid Strength");
	}
	character.forca=newStrength
}