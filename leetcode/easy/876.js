// https://leetcode.com/problems/middle-of-the-linked-list/
// Return the middle node of a linked list

/* Given a non-empty, singly linked list with head node head,
return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])

The returned node has value 3.
(The judge's serialization of this node is [3,4,5]).

Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 
and ans.next.next.next = NULL.

Example 2:
Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])

Since the list has two middle nodes with values 3 and 4,
we return the second one.

Note:
The number of nodes in the given list will be between 1 and 100.*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
*/
 
const a = {val: 1}
const b = {val: 2}
const c = {val: 3}
const d = {val: 4}
const e = {val: 5}

a.next = b  
b.next = c
c.next = d
d.next = e
e.next = null

const one = {val: 1}
const two = {val: 2}
const three = {val: 3}
const four = {val: 4}
const five = {val: 5}
const six = {val: 6}

one.next = two
two.next = three
three.next = four
four.next = five
five.next = six
six.next = null

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while(fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
};

console.log(middleNode(a), [3, 4, 5])
console.log(middleNode(one), [4, 5, 6])

