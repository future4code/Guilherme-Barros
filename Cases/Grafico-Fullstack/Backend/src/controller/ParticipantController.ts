import { Request, Response } from "express";
import { ParticipantBusiness } from "../business/ParticipantBusiness";
import { ParticipantDatabase } from '../data/ParticipantDatabase';
import { ParticipantInputDTO } from "../model/Participant";
import { IdGenerator } from "../services/IdGenerator";


const participantDatabase=new ParticipantDatabase()
const idGenerator=new IdGenerator()
export class ParticipantController{
	async insert(req:Request,res:Response):Promise<void>{
		try {
			const{name,lastName,participation}=req.body
			const input:ParticipantInputDTO={
				name,
				lastName,
				participation
			}
			const participantBusiness=new ParticipantBusiness(idGenerator,participantDatabase)
			await participantBusiness.insert(input)
			res.status(200).send("Participante adicionado")
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async getAll(req:Request,res:Response):Promise<void>{
		try {
			const participantBusiness=new ParticipantBusiness(idGenerator,participantDatabase)
			const result=await participantBusiness.getAll()
			res.status(200).send(result)
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
}