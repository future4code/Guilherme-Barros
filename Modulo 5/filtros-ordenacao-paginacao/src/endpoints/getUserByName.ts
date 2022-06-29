import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";

//1 a)
export  async function selectUserByName(name:string):Promise<any> {
	const result = await connection.raw(`
	   SELECT * FROM aula48_exercicio
	   WHERE name = '${name}';
	`)
      
	return result[0]
      }
      
     export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
	try {
	   const name=req.query.name
	   const users = await selectUserByName(name as string)
      
	   if(!users.length){
	      res.statusCode = 404
	      throw new Error("No user found")
	   }
      
	   res.status(200).send(users)
	   
	} catch (error: any) {
	   console.log(error)
	   res.send(error.message || error.sqlMessage)
	}
      }