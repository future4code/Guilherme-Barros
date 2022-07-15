import { IUserRepository, ROLE, user } from "../../business/ports";
import { User } from "../../model/User";

export const userMock = new User(
	"id_mockado",
	"flavio",
	"flavio@lab.com",
	"flavio123",
	ROLE.NORMAL
    )
    
    export const userMock2 = new User(
	"id_mockado2",
	"flaivo",
	"flaivo@lab.com",
	"flaivo123",
	ROLE.ADMIN
    )
    export const usersMock:User[]=[
	userMock,userMock2
]
export class UserRepositoryMock{
	
	public async getUserById(id: string): Promise<User | undefined> {
		if (id === 'id_mockado') {
		    return userMock
		} else if (id === 'id_mockado2') {
		    return userMock2
		} else {
		    undefined
		}
	    }
	    public async getAllUsers(role:ROLE):Promise<User[] | undefined>{
		if (role === ROLE.ADMIN) {
			return usersMock
		}else{
			undefined
		}
	    }
	    async getProfile(id:string):Promise<User | undefined>{
		if (id === 'id_mockado') {
			return userMock
		}else{
			undefined
		}
	    }
}