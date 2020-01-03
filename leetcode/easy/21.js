// https://leetcode.com/problems/merge-two-sorted-lists/

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

const one1 = {val: 1}
const two1 = {val: 2}
const four1 = {val: 4}

one1.next = two1
two1.next = four1

const one2 = {val: 1}
const three2 = {val: 3}
const four4 = {val: 4}

one2.next = three2
three2.next = four4


const one3 = {val: 1}
const two3 = {val: 2}
const four3 = {val: 4}

one3.next = two3
two3.next = four3

const three4 = {val: 3}
const eight4 = {val: 8}
const nine4 = {val: 9}
const ten4 = {val: 10}

three4.next = eight4
eight4.next = nine4
nine4.next = ten4

console.log(one1, 'root 1')
console.log(one2, 'root 2')

console.log(one3, 'root 3')
console.log(three4, 'root 4')

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
**/

var mergeTwoLists = function(l1, l2) {
  let res = new ListNode()
  let cur = res

  while(l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = new ListNode(l1.val)
      l1 = l1.next
      cur = cur.next
    } else {
      cur.next = new ListNode(l2.val)
      l2 = l2.next
      cur = cur.next
    }
  }
  cur.next = l1 || l2
  return res.next
};

console.log(mergeTwoLists(one1, one2), "1->1->2->3->4->4")
console.log(mergeTwoLists(one3, three4), "1->2->3->4->8->9->10")
