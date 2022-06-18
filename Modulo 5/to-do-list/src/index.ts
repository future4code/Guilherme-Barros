import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { v4 as generateId } from 'uuid';
import moment from "moment";
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

//1. Criar usuário 
const createUser = async (
	name: string,
	nickname: string,
	email: string
      ): Promise<void> => {
	await connection
	  .insert({
	    id: Number(generateId()),
	    name: name,
	   nickname:nickname,
	   email: email,
	  })
	  .into("User");
      };
app.post("/user", async (req: Request, res: Response)=>{
	try{ const {name,nickname,email}=req.body;
	if(!name || !nickname || !email){
		throw new Error("Faltando parâmetro na requisição");
	}
	await createUser(
		name,
		nickname,
		email
	)
	   res.status(200).send({message: "Sucess"});
	}catch(error:any){
	   //deu tudo errado
	   res.status(400).send({message: error.message});
	}
     });
//2. Pegar usuário pelo id
const userById=async (id:string):Promise<any> => {
	const res=await connection("Usuario")
	.select("id","name").from("Usuario").where({id})
	return res
}
     app.get("/user/:id", async (req: Request, res: Response)=>{
	try{ const id=req.params.id
		const user=await userById(id)
		if(!id){
			throw new Error("Parâmetro faltando");
			
		}
		if (user===[]) {
			throw new Error("Usuário não encontrado");	
		}

	   res.status(200).send(user);
	}catch(error:any){
	   //deu tudo errado
	   res.status(400).send({message: error.message});
	}
     });
//3. Editar usuário
const editUser=async (id:string,name:string,nickname:string):Promise<void> => {
	await connection("Usuario").update({
		name:name,
		nickname:nickname
	}).where({id})
}
app.put("/user/edit/:id", async (req: Request, res: Response)=>{
	try{ const id=req.params.id
		const name=req.body.name;
		const nickname=req.body.nickname;
		await editUser(id,name,nickname)
	   res.status(201).send({message: "Usuário atualizado com sucesso"});
	}catch(error:any){
		//deu tudo errado
		res.status(400).send({message: error.message});
	     }
     });
//4. Cria Tarefa
const createTask=async (title:string,description:string,limitDate:Date,creatorUserId:number):Promise<void> => {
	await connection
	.insert({
		id:Number(generateId()),
		title:title,
		description:description,
		limitDate:moment(limitDate,`DD/MM/YYYY`).format(`YYYY-MM-DD`),
		creatorUserId:creatorUserId
	}).into("Tarefa")
}
app.post("/task", async (req: Request, res: Response)=>{
	try{ const {title,description,limitDate,creatorUserId}=req.body;
	if(!title || !description || !limitDate || !creatorUserId){
		throw new Error("Faltando parâmetro na requisição");
	}else{
		await createTask(title,description,limitDate,creatorUserId)
	}
	
	   res.status(201).send({message: "Tarefa criada com sucesso"});
	}catch(error:any){
	   //deu tudo errado
	   res.status(400).send({message: error.message});
	}
     });
//5. Pegar tarefa pelo id
const getTaskById=async (id:string):Promise<any> => {
	const res=await connection("Tarefa").join("Usuario","Tarefa.creatorUserId","Usuario.id")
	.select("Tarefa.*","Usuario.nickname as creatorUserNickname")
	.where("Usuario.id",Number(id))
	return res
}
app.get("/task/:id", async (req: Request, res: Response)=>{
	try{ const id=req.params.id
		const task=await getTaskById(id)
		if(task===[]){
			throw new Error("Tarefa não encontrada");
			
		}
	   res.status(200).send(task);
	}catch(error:any){
		//deu tudo errado
		res.status(400).send({message: error.message});
	     }
     });
//6. Pegar todos os Usuários
const getAllUsers=async ():Promise<any> => {
	const res=await connection("Usuario").select("id","nickname")
	.from("Usuario")
	return res
}
app.get("/user/all", async (req: Request, res: Response)=>{
	try{
		const users=getAllUsers();
	   res.status(200).send(users);
	}catch(error:any){
		//deu tudo errado
		res.status(400).send({message: error.message});
	     }
     });
//7. Pegar tarefas criadas por um usuário
const getTaskOfUser=async (id:string):Promise<any> => {
	const result = await connection("Tarefa")
        .join('Usuario', 'Tarefa.creatorUserId', 'Usuario.id')
        .select("Tarefa.*", "Usuario.nickname as creatorUserNickname" )
        .where('Usuario.id', Number(id))
	return result
}
app.get("/task", async (req: Request, res: Response)=>{
	try{const id=req.query.creatorUserId
		if (!id) {
			throw new Error("Ausência de parâmetro id");
			
		}
		const tasks=getTaskOfUser(id as string);
		if (await tasks===[]) {
			res.status(404).send([])
			
		}
	   res.status(200).send(tasks);
	}catch(error:any){
		//deu tudo errado
		res.status(400).send({message: error.message});
	     }
     });
//8. Pesquisar usuário
const getUsersByQuery=async (name:string):Promise<any> => {
	const result = await connection("Usuario")
        .select('id','nickname')
        .from("Usuario")
        .whereLike('nickname', `%${name}%`)
	.orWhereLike('email',`%${name}%`)
	return result
}
app.get("/user", async (req: Request, res: Response)=>{
	try{const name=req.query.name
		if (!name) {
			throw new Error("Ausência de parâmetro name");
			
		}
		const users=getUsersByQuery(name as string);
		if (await users===[]) {
			res.status(404).send([])
			
		}
	   res.status(200).send(users);
	}catch(error:any){
		//deu tudo errado
		res.status(400).send({message: error.message});
	     }
     });
//9. Atribuir um usuário responsável a uma tarefa
const createResponsibleUser=async (taskId:string,userId:string):Promise<void> => {
	await connection
	.insert({
		task_id:taskId,
		responsible_user_id:userId
	}).into("UsuarioResponsavel")
}
app.post("/task", async (req: Request, res: Response)=>{
	try{ const {task_id,responsible_user_id}=req.body;
	if(!task_id|| !responsible_user_id){
		throw new Error("Faltando parâmetro na requisição");
	}else{
		await createResponsibleUser(task_id,responsible_user_id)
	}
	
	   res.status(201).send({message: "Usuario responsável criado com sucesso"});
	}catch(error:any){
	   //deu tudo errado
	   res.status(400).send({message: error.message});
	}
     });
//10. Pegar usuários responsáveis por uma tarefa
const getUsersResponsibleByTask=async (id:number):Promise<any> => {
	const res=await connection("UsuarioResponsavel")
	.join("Usuario","UsuarioResponsavel.responsible_user_id","Usuario.id")
	.join("Tarefa","UsuarioResponsavel.id","Tarefa.id")
	.select("Usuario.id as id","Usuario.nickname as nickname")
	.where("UsuarioResponsavel.task_id",id)
	.from("Usuario")
	return res
}
app.get("/task/:id/responsible", async (req: Request, res: Response)=>{
	try{
		const id=Number(req.params.id)
		const user=getUsersResponsibleByTask(id);
	   res.status(200).send(user);
	}catch(error:any){
		//deu tudo errado
		res.status(400).send({message: error.message});
	     }
     });
