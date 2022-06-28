import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";

export default async function getFiveUsers(size:number,offset:number):Promise<any> {
  const result = await connection.raw(`
     SELECT * FROM aula48_exercicio
      LIMIT ${size} OFFSET ${offset};
  `)

  return result[0]
}

export const getUsersFiveByFive = async(req: Request,res: Response): Promise<void> =>{
  try {
	 
	 let page = Number(req.query.page)
     let size = 5
     let offset = size*(page-1)
     if(isNaN(size) || size < 1) {
	size = 5
      }
	 
     const users = await getFiveUsers(size,offset)

     if(!users.length){
        res.statusCode = 404
        throw new Error("No users found")
     }

     res.status(200).send(users)
     
  } catch (error: any) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}

