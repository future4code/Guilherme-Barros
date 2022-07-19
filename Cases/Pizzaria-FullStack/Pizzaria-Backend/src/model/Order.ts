export class Order{
	constructor(
		private id:string,
		private userId:string,
		private itemId:string,
		private total:number,
		private createdAt: Date
	){}
	getId(){
		return this.id
	}
	getUserId(){
		return this.userId
	}
	getItemId(){
		return this.itemId
	}
	
	getTotal(){
		return this.total
	}
	getCreatedAt(){
		return this.createdAt
	}
	setId(id:string){
		this.id=id
	}
	setUserId(userId:string){
		this.userId=userId
	}
	setItemId(itemId:string){
		this.itemId=itemId
	}
	
	setTotal(total:number){
		this.total=total
	}
	setCreatedAt(createdAt:Date){
		this.createdAt=createdAt
	}
	static toOrderModel(order:order):Order{
		return new Order(order.id,order.userId,order.itemId,order.total,order.createdAt)
	}
}
export type order={
	id:string,
	userId:string,
	itemId:string,
	total:number,
	createdAt:Date
}
export interface OrderInputDTO{

	itemId:string
	
}