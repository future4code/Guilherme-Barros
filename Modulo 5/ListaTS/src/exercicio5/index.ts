type User={
	name:string,
	email:string,
	role:string
}
const retornaEmailsAdmin=(array:User[])=>{
	const emails=array.filter(user=>user.role==="admin")
	.map(user=>user.email)
	return emails
}
console.log(retornaEmailsAdmin( [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] ));
