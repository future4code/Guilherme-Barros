import { Character } from "./model/characters";

export const validateCharacter=(character:Character):boolean=> {
	const {nome,vida,defesa,forca}=character
	if(!nome || vida === undefined || defesa === undefined || forca === undefined){
		return false
	}
	if (vida <= 0 || defesa <= 0 || forca <= 0) {
		return false
	}
	return true
}
