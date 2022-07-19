import express,{ Response,Request } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Account, Users } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
const Errors: { [key: string]: { status: number; message: string } } = {
	INVALID_PARAMETERS: {
	    status: 422,
	    message: "O userType deve ser ADMIN ou NORMAL",
	},
	USER_NOT_FOUND: { status: 404, message: "Usuário não encontrado." },
	TYPE_INVALID:{status:422,message:"O Tipo de um dos parâmetros é inválido"},
	MISSING_PARAMETERS: {
	    status: 422,
	    message: "Alguma informação está faltando, verifique os parâmentros.",
	},
	UNAUTHORIZED: {
	    status: 401,
	    message: "O usuário deve ter mais de 18 anos.",
	},
	USER_ALREADY_EXISTS: {
	    status: 409,
	    message: "Usuário com este CPF já possui conta.",
	},
	SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado." },
    }
const verificaIdade=(data:string):boolean=>{
	const dataAtual=new Date().getTime();

	const nascimento:number= Date.parse(data.split("/").reverse().join("/"))

	const idade = (dataAtual - nascimento) * (3.17*10**-11)
	return idade >= 18
}
const dataAtualFormatada=(data:Date)=>{
        let dia  = data.getDate().toString();
        let diaF = (dia.length == 1) ? '0'+dia : dia
       let mes  = (data.getMonth()+1).toString() //+1 pois no getMonth Janeiro começa com zero.
       let mesF = (mes.length == 1) ? '0'+mes : mes
        let anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}
//Retorna todos os usuários
app.get("/users",(req:Request,res:Response)=>{
	res.status(200).send(Users)
})
//Criar um usuário
app.post("/users/newUser",(req:Request,res:Response)=>{
	try {
		const {name,cpf,dataNascimento,saldo,extract}=req.body
	const newUser={
		name,
		cpf,
		dataNascimento,
		saldo,
		extract
	}
	const validaCPF=Users.find(user=>user.cpf===cpf)
	if (validaCPF) {
		throw new Error(Errors.USER_ALREADY_EXISTS.message);
		
	}
	if (!verificaIdade(dataNascimento)) {
		throw new Error(Errors.UNAUTHORIZED.message);
		
	}
	Users.push(newUser)
	res.status(201).send(Users)
	} catch (error:any) {
		switch (error.message) {
			case Errors.UNAUTHORIZED.message:
			    res
				.status(Errors.UNAUTHORIZED.status)
				.send(Errors.UNAUTHORIZED.message)
			    break
			case Errors.USER_ALREADY_EXISTS.message:
			    res
				.status(Errors.USER_ALREADY_EXISTS.status)
				.send(Errors.USER_ALREADY_EXISTS.message)
			    break
			default:
			    res
				.status(Errors.SOMETHING_WENT_WRONG.status)
				.send(Errors.SOMETHING_WENT_WRONG.message)
		    }
	}	
})
//Saldo pelo CPF
app.get("/user/:cpf",(req:Request,res:Response)=>{
try {
	const cpf:string = req.params.cpf
	const userByCPF:Account| undefined=Users.find((user)=>{
		cpf===user.cpf
	})
	if(!cpf){
		throw new Error(Errors.MISSING_PARAMETERS.message)
	}
	if (!userByCPF) {
		throw new Error(Errors.USER_NOT_FOUND.message);
	}
	res.status(200).send(userByCPF?.saldo)
} catch (error:any) {
	switch (error.message) {
		case Errors.USER_NOT_FOUND.message:
		    res
			.status(Errors.USER_NOT_FOUND.status)
			.send(Errors.USER_NOT_FOUND.message)
		    break;
		case Errors.MISSING_PARAMETERS.message:
		res
			.status(Errors.MISSING_PARAMETERS.status)
			.send(Errors.MISSING_PARAMETERS.message)
			break;	
		default:
		    res
			.status(Errors.SOMETHING_WENT_WRONG.status)
			.send(Errors.SOMETHING_WENT_WRONG.message)
	    }
}
})
//Adiciona valor ao saldo
app.put("/users/:cpf",(req:Request,res:Response)=>{
	try {
	const {name,saldo,valor,data,descricao}=req.body
	const {cpf}=req.params
	const user=Users.find(user=>user.cpf===cpf)
	const validaNome=Users.find(user => user.name === name)
	if(!name || !cpf || !saldo){
		throw new Error(Errors.MISSING_PARAMETERS.message);
	}
	if(!user || !validaNome){
		throw new Error(Errors.USER_NOT_FOUND.message);
	}
	if (descricao!=="Depósito em dinheiro") {
		throw new Error(Errors.TYPE_INVALID.message);	
	}
	if(isNaN(saldo)){
		throw new Error(Errors.TYPE_INVALID.message);
	}
	user.saldo+=saldo
	user.extract.push({valor,data,descricao})
	res.status(200).send(user)
		
	} catch (error:any) {
		switch (error.message) {
			case Errors.USER_NOT_FOUND.message:
			    res
				.status(Errors.USER_NOT_FOUND.status)
				.send(Errors.USER_NOT_FOUND.message)
			    break;
			case Errors.MISSING_PARAMETERS.message:
			res
				.status(Errors.MISSING_PARAMETERS.status)
				.send(Errors.MISSING_PARAMETERS.message)
				break;	
			case Errors.TYPE_INVALID.message:
				res
					.status(Errors.TYPE_INVALID.status)
					.send(Errors.TYPE_INVALID.message)
				break;
			default:
			    res
				.status(Errors.SOMETHING_WENT_WRONG.status)
				.send(Errors.SOMETHING_WENT_WRONG.message)
		    }
	}
})
//Pagar uma conta
app.post("/user/:cpf",(req:Request,res:Response)=>{
	let {data,descricao,valor}=req.body
	const cpf=req.params.cpf
	const user=Users.find(user=>user.cpf===cpf)
	if (!data) {
		let newData=new Date()
		let data=dataAtualFormatada(newData)
		user?.extract.push({data,descricao,valor})
	}
	if (!user) {
		throw new Error(Errors.USER_NOT_FOUND.message);
		
	}
	user?.extract.push({data,descricao,valor})
	res.status(200).send(user)
})
