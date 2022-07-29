import { product } from "../types/product";

export class Product{
	constructor(
		private id:string,
		private name:string,
		private tags:string[]
	){}
	static toUserModel(product: product): Product {
		return new Product(product.id, product.name, product.tags);
	      }
}
export interface ProductInputDTO{
	name:string,
	tags:string[]
}
