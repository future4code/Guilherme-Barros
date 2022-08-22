import { Participant } from './../../src/model/Participant';
import { ParticipantInputDTO } from '../../src/model/Participant';
import { ParticipantBusiness } from './../../src/business/ParticipantBusiness';
export let idGenerator = { generate: jest.fn((): any => {
	return 'any_id'
      }) }
  
export const participantMock={
	id:'any_id',
	name:"anyName",
	lastName:"anyLastName",
		participation:0
}
export const participantDatabase={
	insert: jest.fn(async(input) => { }),
	getAll:jest.fn(async()=>{return {
		id:'any_id',
		name:"anyName",
		lastName:"anyLastName",
		participation:0
	}}),
	
}as any
export const input:ParticipantInputDTO={
		name: 'any_name',
		lastName: 'any_lastName',
		participation: 0
}
export const participantBusiness=new ParticipantBusiness(idGenerator,participantDatabase)