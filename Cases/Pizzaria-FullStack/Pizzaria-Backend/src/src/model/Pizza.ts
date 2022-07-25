export class Pizza{
	constructor(
		private id:string,
		private name:string,
		private price:number,
		private img_url:string,
		private ingredients:string[]
	){}
	getId(){
		return this.id;
	    }
	
	    getName(){
		return this.name
	    }
	getPrice(){
		return this.price
	}	
	getImgUrl(){
		return this.img_url
	}
	getIngredients(){
		return this.ingredients
	}
	setId(id: string){
		this.id = id;
	    }
	
	    setName(name: string){
		this.name = name;
	    }
	setPrice(price:number){
		this.price=price
	}
	setImgUrl(img_url:string){
		this.img_url=img_url
	}
	setIngredients(ingredients:string[]){
		this.ingredients=ingredients
	}
	static toPizzaModel(pizza:pizza):Pizza{
		return new Pizza(pizza.id,pizza.name,pizza.price,pizza.img_url,pizza.ingredients)
	}
}
export type pizza={
	id:string,
	name:string,
	price:number,
	img_url:string,
	ingredients:string[]
}
export interface PizzaInputDTO{
	name:string,
	price:number,
	img_url:string,
	ingredients:string[]
}