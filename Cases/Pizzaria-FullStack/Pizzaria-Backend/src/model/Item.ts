export class Item{
	constructor(
		private id:string,
		private pizzaId:string,
		private quantity:number
		
	){}
	getId(){
		return this.id
	}
	
	getPizzaId(){
		return this.pizzaId
	}
	getQuantity(){
		return this.quantity
	}
	
	setId(id:string){
		this.id=id
	}
	
	setPizzaId(pizzaId:string){
		this.pizzaId=pizzaId
	}
	setQuantity(quantity:number){
		this.quantity=quantity
	}
	
	
	static toItemModel(item:item):Item{
		return new Item(item.id,item.pizzaId,item.quantity)
	}
}
export type item={
	id:string,
	pizzaId:string,
	quantity:number
}
export interface ItemInputDTO{
	pizzaId:string,
	quantity:number
}