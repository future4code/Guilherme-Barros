import { participant } from './../types/participant';
import { InvalidLastName, InvalidName } from "../error/CustomError"

export class Participant{
	constructor(
		private id:string,
		private name:string,
		private lastName:string,
		private participation:number 
	){
		if(id) this.setId(id)
		if(name) this.setName(name)
		if(lastName) this.setLastName(lastName)
		if(participation) this.setParticipation(participation)
	}
	getId(){
		return this.id
	}
	getName(){
		return this.name
	}
	getLastName(){
		return this.lastName
	}
	getParticipation(){
		return this.participation
	}
	setId(id:string){
		this.id=id
	}
	setName(name:string){
		if (name.length < 4 || typeof name !== 'string') {
			throw new InvalidName();
			  }
			  
		this.name=name
	}
	setLastName(lastName:string){
		if (lastName.length < 4 || typeof lastName !== 'string') {
			throw new InvalidLastName();
			  }
		this.lastName=lastName
	}
	setParticipation(participation:number){
		
		this.participation=participation
	}
	static toParticipantModel(participant:participant):Participant{
		return new Participant(participant.id,participant.name,participant.lastName,participant.participation)
	}
}

export interface ParticipantInputDTO{
	name:string,
	lastName:string,
	participation:number
}