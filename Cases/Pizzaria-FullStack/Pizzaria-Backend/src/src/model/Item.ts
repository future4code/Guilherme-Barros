export class Item{
	constructor(
		private id:string,
		private pizzaId:string,
		private status:string,
		private order_id:string,
		private quantity:number
		
	){}
	getId(){
		return this.id
	}
	
	getPizzaId(){
		return this.pizzaId
	}
	getStatus(){
		return this.status
	}
	getOrderId(){
		return this.order_id
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
	setStatus(status:Status){
		this.status=status
	}
	setOrderId(order_id:string){
		this.order_id=order_id
	}
	setQuantity(quantity:number){
		this.quantity=quantity
	}
	
	
	static toItemModel(item:item):Item{
		return new Item(item.id,item.pizzaId,item.status,item.order_id,item.quantity)
	}
}
export type item={
	id:string,
	pizzaId:string,
	status:Status.ACTIVE,
	order_id:string,
	quantity:number
}
export interface ItemInputDTO{
	pizzaId:string,
	quantity:number
}
export enum Status{
	ACTIVE='ACTIVE',
	INACTIVE='INACTIVE'
}