******************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
*******************************************************************************************
** Feedback:
** Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting ** the group :) Link: Lihttps://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
**********************************************************************************************

Print Linked List Elements in Reverse order. Write a program to print elements of a linked list in reverse order by using same single linked list. What is your cannot use an extra data structure, or modifying the linked list?

// Jack: work on your local environment and move the solution to the bottom of the page
function reverseLinkedList(node) {
	// your code here
}

*Assume that a linked list node looks like this:
function LinkedListNode(value) {
  this.data = value;
  this.next = null;
}

Test code:
let node10 = new LinkedListNode(10);
let node7 = new LinkedListNode(7);
let node5 = new LinkedListNode(5);
let node3 = new LinkedListNode(3);

// connecting nodes
node10.next = node7;
node7.next = node5;
node5.next = node3;

let head = node10;

reverseLinkedList(head);

Output:
3
5
7
10

2) Given a linked list node, remove the node after it. The function should just update the linked list and return nothing.

function deleteNode(node) {
if(node.next == null)
{
return;
}
Else{
Node.next = node.next.next;
}
Return node;
}

Example:
Let’s say you have this linked list:
10  ->  7  ->  5  ->  3  -> 1

Given a node with the data 5, you want to remove the node after it, which has the data 3.

After removing the node, the linked list becomes:
10  ->  7  ->  5  -> 1

Test code:
function LinkedListNode(value) {
  this.data = value;
  this.next = null;
}

let node10 = new LinkedListNode(10);
let node7 = new LinkedListNode(7);
let node5 = new LinkedListNode(5);
let node3 = new LinkedListNode(3);
let node1 = new LinkedListNode(1);

// connecting nodes
node10.next = node7;
node7.next = node5;
node5.next = node3;
node3.next = node1;

deleteNode(node5);






3) Write a function to determine whether there is a loop in a singly linked list.

A singly linked list with no loop:
1 -> 2 -> 3 -> 4 -> 5 -> 6

A singly linked list with loop:


Good article to read: http://blog.ostermiller.org/find-loop-singly-linked-list

function isCyclical(node) {
  // your code here
}

Test code:
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

isCyclical(head); // true





/***** Solution Pooja--Iterative******/
function reverseLinkedList(node) {
   LinkedList prev = null;
LinkedList curr = head;
while(curr!=null)
{
LinkedList temp = current.next;
Current.next = prev;
Prev = curr;
Curr = temp;
}
Return prev;
}

/**** Carlos Green ******/

Problem 1:

function reverseLinkedList(node) {
  if (node.next === null) return;
  reverseLinkedList(node.next); 
  console.log(node.data);
}

***************Pooja************
function reverseLinkedList(node) {
if(node == null || node.next == null)
{
Return node;
}
ListNode p = reverseLinkedList(node.next)

Node.next.next = node;
Node.next = null;
Return p;
}
}

********Pooja************
class Solution {
    public void deleteNode(ListNode node) {
        node.next.val = node.next.next.val;
        node.next = node.next.next;
        
    }
}

******************Pooja***********
function isCyclical(node){
ListNode slow = head;
ListNode fast = head.next;
  if(head == null || head.next== null)
        {
            return false;
        }

while(slow!=fast)
{
if(fast==null || fast.next==null)
{
Return false;
}
Slow = slow.next;
fast= fast.next.next;
}
Return true;
}

******** Jack *******
function reverseLinkedList(node) {
  // base case - stop recursion once the node becomes null
  if (node === null) return;

  // recursion
  reverseLinkedList(node.next); 

  // print node
  console.log(node.data);
}
/************ Shalini (java solution) **********/
    public static void reverseLinkedList(LinkedListNode node) {
        if (node.next != null)
            reverseLinkedList(node.next);
        System.out.println(node.data);
    }

    public static void deleteNode(LinkedListNode node) {
        if (node.next != null){
            node.next = node.next.next;
        }
    }

   public static boolean isCyclical (LinkedListNode node){
        LinkedListNode slow = node;
        LinkedListNode fast = node.next;
        
        while (slow != null && fast!=null && fast.next!=null && slow!=fast){
            slow = slow.next;
            fast = fast.next.next;
        }
        return (slow == fast);
    }

Problem 2:
/********Pradeep********/
function deleteNode(head, node){
	if(head == null || node == null){
		return;
	}
	if(node == head){
		head = head.next;
		node.delete();
	} else{
		curr = head;
		while(curr.next != node){
			curr = curr.next;
		}
		curr.next = curr.next.next;
		node.delete();
	}
}


/***** Jack *****/
2) function deleteNode(node){
 node.next = node && node.next && node.next.next || null;
};



