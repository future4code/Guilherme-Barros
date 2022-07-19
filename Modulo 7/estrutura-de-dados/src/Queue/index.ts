import { LinkedList } from "../LinkedList/ListNode"

export class Queue{
	constructor(public items: any[] = []){}
	isEmpty():boolean{
		return this.items.length===0
	}
	enqueue(value:any){
		const index=this.items.length
		this.items[index]=value
	}
	dequeue():LinkedList | null{
		const removedItem = this.items[0]

		for (let i = 0; i < this.items.length; i++) {
		   this.items[i] = this.items[i + 1];
		}
	  
		this.items.length--
	  
		return removedItem
	}
}