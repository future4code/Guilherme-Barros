import { product } from "../../types/product";
import { BaseDatabase } from "../BaseDatabase";
import { IProductDatabase } from "./IProductDatabase";

export class ProductDatabase extends BaseDatabase implements IProductDatabase{
	insert(product: product): Promise<void> {
		throw new Error("Method not implemented.");
	}
	searchById(id: string): Promise<product[] | []> {
		throw new Error("Method not implemented.");
	}
	searchByName(name: string): Promise<product[] | []> {
		throw new Error("Method not implemented.");
	}
	searchByTag(tag: string): Promise<product[] | []> {
		throw new Error("Method not implemented.");
	}
	
}