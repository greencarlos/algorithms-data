// https://leetcode.com/problems/reverse-linked-list-ii/

/* Reverse a linked list from position m to n. Do it in one-pass.
Note: 1 ≤ m ≤ n ≤ length of list.

Example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const one = {val: 1}
const two = {val: 2}
const three = {val: 3}
const four = {val: 4}
const five = {val: 5}

one.next = two
two.next = three
three.next = four
four.next = five
five.next = null

var reverseBetween = function(head, m, n) {
  let dummy = new ListNode()
  dummy.next = head
  let leftTail = dummy
  let rightHead = head.next
  for(let i = 1; i < n; i++) {
    if (i < m) leftTail = leftTail.next
    rightHead = rightHead.next
  }
  leftTail.next = reverseList(leftTail.next, n - m + 1)
  while(true){
    if (!leftTail.next) {
      leftTail.next = rightHead
      break
    }
    leftTail = leftTail.next
  }
  return dummy.next
}

function reverseList(head, k = Infinity) {
  if (!head) return null
  let currNode = head
  let prevNode = null
  let nextNode = null
  while(currNode && --k >-1) {
    nextNode = currNode.next
    currNode.next = prevNode
    prevNode = currNode
    currNode = nextNode
  }
  return prevNode
}

console.log(reverseBetween(one, 2, 4))
console.log(reverseBetween("1->4->3->2->5"))
