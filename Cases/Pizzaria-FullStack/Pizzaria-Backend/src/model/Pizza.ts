export class Pizza{
	constructor(
		private id:string,
		private name:string,
		private price:number,
		private imgUrl:string,
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
		return this.imgUrl
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
	setImgUrl(imgUrl:string){
		this.imgUrl=imgUrl
	}
	setIngredients(ingredients:string[]){
		this.ingredients=ingredients
	}
	static toPizzaModel(pizza:pizza):Pizza{
		return new Pizza(pizza.id,pizza.name,pizza.price,pizza.imgUrl,pizza.ingredients)
	}
}
export type pizza={
	id:string,
	name:string,
	price:number,
	imgUrl:string,
	ingredients:string[]
}
export interface PizzaInputDTO{
	name:string,
	price:number,
	imgUrl:string,
	ingredients:string[]
}