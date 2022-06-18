// no index.ts:

import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./users";

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

//1
//a. Método GET
//b. /users
app.get("/users",(req:Request,res:Response)=>{
   const usuarios=users.map(users=>users)
   res.status(200).send(usuarios)
})
//2
//a. 
app.get("/users/type",(req:Request,res:Response)=>{
   try {
      const typeQuery: any = req.query.type
      
      let type: string = typeQuery?.toUpperCase()

      if (type === 'NORMAL' || type === 'ADMIN') {
          const usersByType = users.filter((item: any) => {
              return item.type === type
          }).map((item: any) => { return item })
          res.send(usersByType)
      } else {
          throw new Error("Types inválidos")
      }
  } catch (error: any) {
      res.send(error.message)
  }
})

//b. Construindo um enum que tenha apenas os valores apropriados para type
enum UserType {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}
//3
//a. Query, pois um nome é uma informação mais pessoal
app.get("/users/name",(req:Request,res:Response)=>{
   try {
      const nameQuery:any=req.query.name
      let finded:boolean=false
      const userByName=users.filter((user:any)=>{
      return   user.name.toLowerCase().includes(nameQuery.toLowerCase())
      }).map(user=>user)
      userByName.length > 0 ? finded = true : finded = false

      if(finded === true){ res.send(userByName) }else{ throw new Error("Nome não encontrado")}
      
   } catch (error:any) {
      res.send(error.message)
   }
})
//4
app.post("/users/adduser",(req:Request,res:Response)=>{
   try {
      const {id=users.length+1,name,email,type,age}=req.body

      const newUser={
         id,name,email,type,age
      }
      users.push(newUser)
      res.send(users)
      if(!id || !name || !email || !type || !age){
         throw new Error("Adicione um body para a requisição");
         
      }
  }catch(error: any){
      res.send(error.message)
  }
})
/*O método PUT serveria melhor para editar um usuário
existente, pois usando como um POST teria que passar 
todos os parâmetros, inclusive parâmetros que o usuário
não teria acesso*/