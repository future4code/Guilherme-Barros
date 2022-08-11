import { Participant, ParticipantInputDTO } from "../model/Participant";


export interface ParticipantRepository{
	insert(input:ParticipantInputDTO):Promise<void>
	getAll():Promise<Participant[]|[]>
}