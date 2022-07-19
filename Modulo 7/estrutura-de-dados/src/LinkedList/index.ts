import { LinkedListNode } from "./LikedListNode";
import { LinkedList } from "./ListNode";

const primeiro:LinkedListNode=new LinkedListNode('primeiro')
const lista:LinkedList=new LinkedList(primeiro)

lista.appendToTail("Segundo")

console.log(lista.print());
