export class Order{
	constructor(
		private id:string,
		private userId:string,
		private total:number,
		private createdAt: Date
	){}
	getId(){
		return this.id
	}
	getUserId(){
		return this.userId
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
	
	setTotal(total:number){
		this.total=total
	}
	setCreatedAt(createdAt:Date){
		this.createdAt=createdAt
	}
	static toOrderModel(order:order):Order{
		return new Order(order.id,order.userId,order.total,order.createdAt)
	}
}
export type order={
	id:string,
	userId:string,
	total:number,
	createdAt:Date
}
export interface OrderInputDTO{

	orderId:string
	
}