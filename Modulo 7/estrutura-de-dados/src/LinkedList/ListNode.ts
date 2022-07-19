import { LinkedListNode } from "./LikedListNode";

export class LinkedList{
	constructor(public start:LinkedListNode | null | void){}

	public appendToTail(value:any){
		if (!this.start) {
			this.start=new LinkedListNode(value) 
		}else{
			let currentNode=this.start
			while (currentNode.next) {
				currentNode=currentNode.next
			}
			currentNode.next=new LinkedListNode(value)
		}
	}
	public print():void{
		let node:LinkedListNode | null | void= this.start
		let i=1
		while(node!==null){
			console.log(`Elemento ${i}: `, node!.getData());
			node = node!.getNext();
			i++;
		}
	}
}