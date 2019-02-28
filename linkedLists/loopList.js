/*
Write a function to determine whether there is a loop 
in a singly linked list.

A singly linked list with no loop:
1 -> 2 -> 3 -> 4 -> 5 -> 6

A singly linked list with loop:
1 -> 2 -> 3 -> 4 -> 5 -> 6
          ^              |
          \______________/   
            

Good article to read: 
http://blog.ostermiller.org/find-loop-singly-linked-list
*/


// Test code:
function LinkedListNode(value) {
  this.data = value;
  this.next = null;
}

let node10 = new LinkedListNode(10);
let node7 = new LinkedListNode(7);
let node5 = new LinkedListNode(5);
let node3 = new LinkedListN=node(3);
let node1 = new LinkedListNode(1);

node10.next = node7;
node7.next = node5;
node5.next = node3;
node3.next = node1;
node1.next = node5;

let head = node10;

const isCyclical = (node) => {

};


isCyclical(head); // true

console.log(isCyclical(head));
