import { LinkedListNode } from "../LinkedList/LikedListNode";
import { LinkedList } from "../LinkedList/ListNode";


export class Stack{
	constructor(
		public frames: LinkedList = new LinkedList()
	){}

	isEmpty():boolean{
		return this.frames.start===null
	}

	push(value:any){
		this.frames.appendToTail(value)
	}

	pop(){
		if (!this.isEmpty()) {
			return null
		}
		let previousNode: LinkedListNode | null  | void= null
		let currentNode: LinkedListNode | null | void= this.frames.start
		while(currentNode!.next){
			previousNode = currentNode
			currentNode = currentNode!.next 
		     }
	       
		     previousNode!.next = null
	       
		     return currentNode
	}

	print(){
		let node : LinkedListNode| null | void= this.frames.start
		let i=1
		while(node ! == null){
			console.log(`Elemento ${i}: `,node!.getData());
			i++
		}
	}
}

const pilha:Stack=new Stack()
pilha.push('Primeiro')
console.log(pilha.print());
