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
const Errors:{[chave:string]:{status:number,message:string}}={
	MISSING_PARAMETER:{status:422,message:"Faltando algum parâmetro, consulte a documentação."},
	TYPE_NAME_INVALID:{status:422,message:"Tipo do parâmetro name inválido"},
	TYPE_PRICE_INVALID:{status:422,message:"Tipo do parâmetro price inválido"},
	VALUE_PRICE_INVALID:{status:422,message:"Valor do parâmetro price zerado ou menor que zero"},
	SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"}
}

app.post("/creatProduct",(req:Request,res:Response)=>{
	try{const name=req.body.name as string
	const price=req.body.price as number
	if(!name || !price){
		throw new Error(Errors.MISSING_PARAMETER.message)
	}
	if(typeof name !== "string"){
		throw new Error(Errors.TYPE_NAME_INVALID.message)
	}
	if(typeof price !== "number"){
		throw new Error(Errors.TYPE_PRICE_INVALID.message)
	}
	if(price<0 || price == 0){
		throw new Error(Errors.VALUE_PRICE_INVALID.message)
	}

	const newProduct={
		id:Number(generateId()),
		name ,
		price
	}
	Produtos.push(newProduct)
}	catch(error:any){
	switch (error.message) {
		case Errors.MISSING_PARAMETER.message:
			res.status(Errors.MISSING_PARAMETER.status).send(Errors.MISSING_PARAMETER.message)
			break;
		case Errors.TYPE_NAME_INVALID.message:
			res.status(Errors.TYPE_NAME_INVALID.status).send(Errors.TYPE_NAME_INVALID.message)
			break;
		case Errors.TYPE_PRICE_INVALID.message:
			res.status(Errors.TYPE_PRICE_INVALID.status).send(Errors.TYPE_PRICE_INVALID.message)
			break;
		case Errors.VALUE_PRICE_INVALID.message:
			res.status(Errors.VALUE_PRICE_INVALID.status).send(Errors.VALUE_PRICE_INVALID.message)
			break;
			default:
				res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
			break;
	}
}
res.status(201).send(Produtos)
})
//4
app.get("/allProducts",(req:Request,res:Response)=>{
	const produtos=Produtos.map(produto=>produto)
	res.status(200).send(produtos)
})
//5
const ErrorsEdit:{[chave:string]:{status:number,message:string}}={
MISSING_PARAMETER:{status:422,message:"Ausência de Parâmetro price"},
TYPE_PRICE_INVALID:{status:422,message:"Tipo do parâmetro price inválido"},
VALUE_PRICE_INVALID:{status:422,message:"Valor do parâmetro price zerado ou menor que zero"},
PRODUCT_NOT_FOUND:{status:404,message:"Produto não encontrado"},
SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"}
}
app.put("/editProduct/:idProduto",(req:Request,res:Response)=>{
	try{
	const idProduto =Number(req.params.idProduto);
	const newPrice=req.body.newPrice
	const price=req.body.price
	if(!price){
		throw new Error(ErrorsEdit.MISSING_PARAMETER.message)
	}
	if(typeof price !== "number"){
		throw new Error(ErrorsEdit.TYPE_PRICE_INVALID.message)
	}
	if(price<0||price==0){
		throw new Error(ErrorsEdit.VALUE_PRICE_INVALID.message)
	}
	if(!idProduto){
		throw new Error(ErrorsEdit.PRODUCT_NOT_FOUND.message)
	}
	Produtos.map((produto)=>{
		if(produto.id==idProduto){
			produto.price=newPrice
		}else{
			throw new Error("Produto não encontrado");
			
		}
	})
	
	}catch(error:any){
		switch (error.message) {
			case ErrorsEdit.MISSING_PARAMETER.message:
				res.status(ErrorsEdit.MISSING_PARAMETER.status).send(ErrorsEdit.MISSING_PARAMETER.message)
				break;
			case ErrorsEdit.TYPE_PRICE_INVALID.message:
				res.status(ErrorsEdit.TYPE_PRICE_INVALID.status).send(ErrorsEdit.TYPE_PRICE_INVALID.message)
				break;
			case ErrorsEdit.VALUE_PRICE_INVALID.message:
				res.status(ErrorsEdit.VALUE_PRICE_INVALID.status).send(ErrorsEdit.VALUE_PRICE_INVALID.message)
				break;
			case ErrorsEdit.PRODUCT_NOT_FOUND.message:
				res.status(ErrorsEdit.PRODUCT_NOT_FOUND.status).send(ErrorsEdit.PRODUCT_NOT_FOUND.message);
				break;
				default:
					res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
				break;
		}
	}
	res.send(Produtos)
})
//6
const ErrorsDelete:{[chave:string]:{status:number,message:string}}={
	MISSING_PARAMETER:{status:422,message:"Ausência de Parâmetro price"},
	SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"}
}
app.delete("/delete/:idProduto",(req:Request,res:Response)=>{
	try {
		const idProduto =Number(req.params.idProduto);
	if(!idProduto){
		throw new Error(ErrorsDelete.MISSING_PARAMETER.message);
	}
	
	Produtos.map((produto, index) => {
		if (produto.id === idProduto) {
		    Produtos.splice(index, 1)
		} else {
		    throw new Error('Produto não encontrado')
		}
	    })
	} catch (error:any) {
		switch (error.message) {
			case ErrorsDelete.MISSING_PARAMETER.message:
				res.status(ErrorsDelete.MISSING_PARAMETER.status).send(ErrorsDelete.MISSING_PARAMETER.message)
				break;
			default:
				res.status(ErrorsDelete.MISSING_PARAMETER.status).send(ErrorsDelete.MISSING_PARAMETER.message)
				break;
		}	
	}
	
	    res.send(Produtos)
})
