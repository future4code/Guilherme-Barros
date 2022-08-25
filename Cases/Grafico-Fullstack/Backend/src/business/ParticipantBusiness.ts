import { ParticipantDatabase } from "../data/ParticipantDatabase";
import { CustomError } from "../error/CustomError";
import { Participant, ParticipantInputDTO } from "../model/Participant";
import { IdGenerator } from "../services/IdGenerator";
import { ParticipantRepository } from "./ParticipantRepository";

export class ParticipantBusiness implements ParticipantRepository{
	constructor(
		private idGenerator:IdGenerator,
		private participantDatabase:ParticipantDatabase
	){}
	async insert(input: ParticipantInputDTO): Promise<void> {
	try {
		const {name,lastName,participation}=input
		if(!name || !lastName || !participation){
			throw new CustomError(401,"Parâmetros faltando para a criação de um participante");
		}
		const id=this.idGenerator.generate()
		const participant=new Participant(
			id,
			name,
			lastName,
			participation
		)
		if (participation<0) {
			throw new CustomError(401,"Participação inválida");
			
		}
		this.participantDatabase.insert(participant)
	}catch (error:any) {
		throw new Error(error.sqlMessage || error.message);
	}
	}
	async getAll(): Promise<Participant[] | []|Participant> {
		try {
			const participants=this.participantDatabase.getAll()
			if(!participants){
				throw new CustomError(404,"Nenhum participante cadastrado");
			}
			return participants
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		}
	}
	
}