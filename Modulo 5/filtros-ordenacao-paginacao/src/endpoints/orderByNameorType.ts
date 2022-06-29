import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";

export default async function orderByNameorType(sort:string,order:string,size:number,offset:number):Promise<any> {
  const result = await connection.raw(`
     SELECT *
     FROM aula48_exercicio
     ORDER BY ${sort} ${order} LIMIT ${size} OFFSET ${offset};
  `)

  return result[0]
}

export const getOrdenedUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
	

	  let sort=req.query.sort as string;
	 let order=req.query.order as string;
	 let page = Number(req.query.page)
     let size = 5
     let offset = size*(page-1)
     if(isNaN(size) || size < 1) {
	size = 5
      }
	  if(sort !== "name" && sort !== "type"){
		  sort="email"
	  }
	  if(!order || order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC"){
		order="ASC"
	  }
     const users = await orderByNameorType(sort,order,size,offset)

     if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
     }

     res.status(200).send(users)
     
  } catch (error: any) {
     console.log(error)
     res.send(error.message || error.sqlMessage)
  }
}

