import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection"


const app: Express = express();
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


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result
}

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error:any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal
//a) Raw retorna um array com 2 arrays dentro, por isso é necessário especificar com [0][0], pois apenas nessa posição o resultado esperado aparece
//b)

const getActor=async(name:string):Promise<any>=>{
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)
  return result[0][0]
}
//c)
/*const countActors=async(gender:string):Promise<any>=>{
  const result=await connection.raw(`
  SELECT COUNT(*) as count FROM Actor where gender= ${gender}`)
  return result[0][0].count
}*/
//2
//a)
const updateSalary=async(salary:number,id:string):Promise<void>=>{
  await connection("Actor").update({
    salary:salary
  }).where("id",id)
}
//b)
const deleteActor=async(id:string):Promise<void>=>{
  await connection("Actor").delete().where("id",id)
}
//c)
const avgGender=async(gender:string):Promise<any>=>{
 const result= await connection("Actor").avg("salary as avarage")
 .where({gender})
 return result[0].average
}
//Exercício 3
//a)

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
//b)
const countActor=async(gender:string):Promise<any>=>{
  const res=await connection("Actor").count().where({gender})
  return res
}
app.get("/actor",async(req:Request,res:Response)=>{
  try {
    const gender:any=req.query.gender
    const actor:any=await countActor(gender as string)
    res.status(200).send({quantity:actor})
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
  }
})
//Exercício 4
//a)
app.put("/actor",async(req:Request,res:Response)=>{
  try {
    const {id,salary}=req.body;
    await updateSalary(salary,id)
    res.status(200).send({message:"Success"})
  } catch (error:any) {
    res.status(400).send({
      message: error.message,
    });
  }
})
//b)
app.delete("/actor/:id",async (req:Request,res:Response) => {
  try {
    const id=req.params.id
    await deleteActor(id)
    res.status(200).send({message:"Success"})
  } catch (error:any) {
    
  }
})