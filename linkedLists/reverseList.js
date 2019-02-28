// Linked Lists

/*
Linked List Elements in Reverse order. 

Write a program to print elements of 
a linked list in reverse order by using same single linked list. 
What is your cannot use an extra data structure, 
or modifying the linked list?
*/

function LinkedListNode(value) {
  this.data = value;
  this.next = null;

}

let node10 = new LinkedListNode(10);
let node7 = new LinkedListNode(7);
let node5 = new LinkedListNode(5);
let node3 = new LinkedListNode(3);

node10.next = node7;
node7.next = node5;
node5.next = node3;


// Output:
// 3
// 5
// 7
// 10

function reverseLinkedList(node) {
  if (!node) return;
  console.log(node.data);
  reverseLinkedList(node.next);
}

console.log(reverseLinkedList(node10));
