import { Participant } from "../model/Participant";


export interface IParticipantDatabase{
	insert(participant:Participant):Promise<void>
	getAll():Promise<Participant[]|[]>
}