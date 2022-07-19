class LinkedListNode{
	constructor(
	   public value: any,
	   public next: LinkedListNode | null = null
	){}
	getData(){
		return this.value
	}
	getNext(){
		return this.next
	}
     }
     
     export {LinkedListNode}