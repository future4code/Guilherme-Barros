import { Request, Response } from "express";
import { off } from "process";
import { connection } from "../data/connection";

export default async function filteringUsers(name:string,type:string,sort:string,order:string,size:number,offset:number):Promise<any> {
  const result = 
  await connection("aula48_exercicio")
  .where("name","like",`%${name}%`)
  .where("type","like",`%${type}%`)
  .orderBy(sort, order)
  .limit(size)
  .offset(offset)
  return result
}

export const getFilteringUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
	let type=req.query.type as string;
	let name=req.query.name as string;
	  let sort=req.query.sort as string;
	 let order=req.query.order as string;
	 let page = Number(req.query.page)
     let size = 5
     let offset = size*(page-1)

     if (!name || !type) {
	     name="*";
	     type="*"
     }
     if(isNaN(size) || size < 1) {
	size = 5
      }
	if(!page){
		page=1
	}
	  if(!order || order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC"){
		  sort="name"
		order="ASC"
	  }
     const users = await filteringUsers(name,type,sort,order,size,offset)

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

