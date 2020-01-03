// https://leetcode.com/problems/intersection-of-two-linked-lists/

/** * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
*/

const four = {val:4}
const one1 = {val:1}

four.next = one1

const five1 = {val:5}
const zero = {val:0}
const one2 = {val:1}

five1.next = zero
zero.next = one2

const eight = {val:8}
const four2 = {val:4}
const five2 = {val:5}

one2.next = eight
one1.next = eight

eight.next = four2
four2.next = five2

//console.log(four, 'root 1')
//console.log(five1, 'root 2')
//console.log(eight, 'intersect')

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null

  let point1 = headA
  let point2 = headB

  while(point1 !== point2) {
    point1 = point1.next
    point2 = point2.next

    if (point1 === point2) return point1

    if (!point1) {
      point1 = headB
    }

    if (!point2) {
      point2 = headA
    }
  }

  return point1
};

console.log(getIntersectionNode(four, five1))

