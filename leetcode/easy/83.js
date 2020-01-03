// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/*
Given a sorted linked list, 
delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3 
*/
/*
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

const one1 = {val: 1}
const oneClone1 = {val: 1}
const two1 = {val: 2}

one1.next = oneClone1
oneClone1.next = two1 

console.log(one1, 'root 1')

const one2 = {val: 1}
const oneClone2 = {val: 1}
const two2 = {val: 2}
const three2 = {val: 3}
const threeClone2 = {val: 3}

one2.next = oneClone2
oneClone2.next = two2
two2.next = three2
three2.next = threeClone2

console.log(one2, 'root 2')

var deleteDuplicates = function(head) {
  if (!head) return head

  var node = head.next
  var prev = head

  while (node) {
    if (node.val !== prev.val) {
      prev.next = node
      prev = node
    }
    node = node.next
  }
  prev.next = null
  return head
};

console.log(" ")
console.log('root 1: 1->1->2')
console.log(deleteDuplicates(one1))
console.log('output 1: 1->2')

console.log(" ")
console.log('root 2: 1->1->2->3->3')
console.log(deleteDuplicates(one2))
console.log('output 2: 1->2->3')
