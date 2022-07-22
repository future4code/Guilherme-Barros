import { v4 as generateId } from "uuid";
type Produto={
	id:number,
	name:string,
	price:number
}
export const Produtos:Produto[]=[
	{id:Number(generateId()),
	name:"Mizuno",
	price:300.00},
	{id:Number(generateId()),
	name:"Arroz",
	price:5.00},
	{id:Number(generateId()),
	name:"Feijão",
	price:3.00}
]