import { Casino, LOCATION, NATIONALITY, Result, User } from "./model/casino";

export const verifyAge=(casino:Casino,users:User[]):Result=>{
	const allowed: User[]=[];
	const unallowed: User[]=[];
	users.forEach((user)=>{
		if (casino.location===LOCATION.EUA) {
			if (user.age>=21) {
				allowed.push(user)
			}else{
				unallowed.push(user)
			}
		}else if(casino.location===LOCATION.BRAZIL){
			if(user.age>=18){
				allowed.push(user)
			}else{
				unallowed.push(user)
			}
		
		}
	
	})
	return{
		brazilians:{
			allowed:allowed
			.filter((user)=>user.nacionality===NATIONALITY.BRAZILIAN)
			.map(u=>u.name),
			unallowed:unallowed
			.filter((user)=>user.nacionality===NATIONALITY.BRAZILIAN)
			.map(u=>u.name)
		},
		americans:{
			allowed:allowed
			.filter((user)=>user.nacionality===NATIONALITY.AMERICAN)
			.map(u=>u.name),
			unallowed:unallowed
			.filter((user)=>user.nacionality===NATIONALITY.AMERICAN)
			.map(u=>u.name)
		}
		}
}