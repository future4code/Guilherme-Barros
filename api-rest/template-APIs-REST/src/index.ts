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
type user = {
   id: number,
   name: string,
   email: string,
   type: string,
   age: number
}

//a.
//b. 