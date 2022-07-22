import { Character } from "./model/characters";
import { validateCharacter } from "./validateCharacter";

export const performAttack=(attacker:Character,defender:Character)=>{
	if(!validateCharacter(attacker) || !validateCharacter(defender)){
		throw new Error("Invalid Character");
	}
	if(attacker.forca > defender.defesa){
		defender.vida-=attacker.forca - defender.defesa
	}
}

export const performAttackInversionDependency=(attacker:Character,defender:Character,validator:(input:Character)=>boolean)=>{
	if(!validator(attacker) || !validator(defender)){
		throw new Error("Invalid Character");
	}
	if(attacker.forca > defender.defesa){
		defender.vida-=attacker.forca - defender.defesa
	}
}