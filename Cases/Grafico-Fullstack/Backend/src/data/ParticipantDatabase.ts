import { Participant } from "../model/Participant";
import { BaseDatabase } from "./BaseDatabase";
import { IParticipantDatabase } from "./IParticipantDatabase";

export class ParticipantDatabase extends BaseDatabase implements IParticipantDatabase{
	private static TABLE_NAME ='Participant'
	async insert(participant: Participant): Promise<void> {
		try {
		
			
			await this.getConnection()
			.insert({
				id:participant.getId(),
				name:participant.getName(),
				lastName:participant.getLastName(),
				participation:participant.getParticipation()
			}).into(ParticipantDatabase.TABLE_NAME)
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		}
	}
	async getAll(): Promise<[] | Participant[]> {
	try{
const result=this.getConnection()
.select('*')
.from(ParticipantDatabase.TABLE_NAME)
return result
	}catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		}
	}

}