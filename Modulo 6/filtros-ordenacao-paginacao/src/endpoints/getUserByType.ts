import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";

//1 a)
export  async function selectUserByType(type:string):Promise<any> {
	const result = await connection.raw(`
	   SELECT * FROM aula48_exercicio
	   WHERE type = '${type}';
	`)
      
	return result[0]
      }
      
     export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
	try {
	   const type=req.params.type
	   const users = await selectUserByType(type as string)
      
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