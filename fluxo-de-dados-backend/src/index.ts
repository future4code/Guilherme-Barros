import express, {Request,Response} from "express";
import { Produtos } from "./data";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
//1
app.get("/test",(req:Request,res:Response)=>{
	res.send("Tá ok")
})
//3
app.post("/creatProduct",(req:Request,res:Response)=>{
	const name=req.body.name as string
	const price=req.body.price as number
	const newProduct={
		id:Number(generateId()),
		name ,
		price
	}
	Produtos.push(newProduct)
	res.status(201).send(Produtos)
})
//4
app.get("/allProducts",(req:Request,res:Response)=>{
	const produtos=Produtos.map(produto=>produto)
	res.status(200).send(produtos)
})
//5
app.put("/editProduct/:idProduto",(req:Request,res:Response)=>{
	const idProduto =Number(req.params.idProduto);
	const newPrice=req.body.newPrice

	Produtos.map((produto)=>{
		if(produto.id==idProduto){
			produto.price=newPrice
		}else{
			throw new Error("Produto não encontrado");
			
		}
	})
	res.send(Produtos)
})
//6
app.delete("/delete/:idProduto",(req:Request,res:Response)=>{
	const idProduto =Number(req.params.idProduto);
	Produtos.map((produto, index) => {
		if (produto.id === idProduto) {
		    Produtos.splice(index, 1)
		} else {
		    throw new Error('Produto não encontrado')
		}
	    })
	    res.send(Produtos)
})
