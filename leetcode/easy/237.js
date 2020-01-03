// https://leetcode.com/problems/delete-node-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
*/

const a = {val: 4}
const b = {val: 5}
const c = {val: 1}
const d = {val: 9}

a.next = b
b.next = c
c.next = d

var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
  return node
};

console.log(deleteNode(a, 5), "4->5->1->9")

