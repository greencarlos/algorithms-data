// https://leetcode.com/problems/remove-linked-list-elements/

/**
Definition for singly-linked list.
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

Remove all elements from a linked list 
of integers that have value val.

Example:
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5 
**/

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
**/

const one = {val:1};
const two = {val:2};

const three = {val:3};
const four = {val:4};

const five = {val:5};
const six = {val:6};

const six2 = {val:6}

one.next = two;
two.next = six2;

six2.next = three;
three.next = four;

four.next = five;
five.next = six;

var removeElements = function(head, val) {
  if (!head) return head

  if (head.val === val) {
    return removeElements(head.next, val)
  }

  function recurse(link) {
    if (link == null) return

    while (link.next != null && link.next.val == val) {
      link.next = link.next.next
    }
    recurse(link.next)
  }

  recurse(head)
  return head
};

console.log("1->2->6->3->4->5->6")
console.log(removeElements(one, 6), "1->2->3->4->5")

