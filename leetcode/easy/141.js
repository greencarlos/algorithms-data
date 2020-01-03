// https://leetcode.com/problems/linked-list-cycle/

/*
Given a linked list, determine if it has a cycle in it.
To represent a cycle in the given linked list,
we use an integer pos which represents the position

(0-indexed) in the linked list where tail connects to.
If pos is -1, then there is no cycle in the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true

Explanation:
There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1,2], pos = 0
Output: true

Explanation:
There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: false

Explanation: There is no cycle in the linked list.

Follow up:
Can you solve it using O(1) (i.e. constant) memory?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const a = {val: 3}
const b = {val: 2}
const c = {val: 0}
const d = {val: 4}

const e = {val: 1}
const f = {val: 2}

const g = {val: 1}
// false

a.next = b
b.next = c
c.next = d
d.next = b
// true

e.next = f
f.next = e
// true

var hasCycle = function(head) {
  let fast = head;
  let slow = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true	 
  }
  return false;
};

console.log(hasCycle(a), true)
console.log(hasCycle(e), true)
console.log(hasCycle(g), false)

