// https://leetcode.com/problems/reverse-linked-list/

/* 
Reverse a singly linked list.

Input: 1->2->3->4->5->NULL

Output: 5->4->3->2->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
**/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// a -> b -> c
a = {v: 1};
b = {v: 2};
c = {v: 3};

a.next = b;
b.next = c;

// Iteratively 
/*
var reverseList = function(head) {
  let pre = null
  while(head) {
    const next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}
*/

// Recursive
var reverseList = function(head) {
  return head ? reverse(head, null) : head
};

function reverse(node, previous) {
  let newHead = node
  if (node.next) newHead = reverse(node.next, node)
  node.next = previous
  return newHead
}

// c -> b -> a
console.log(reverseList(a))
