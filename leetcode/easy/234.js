// https://leetcode.com/problems/palindrome-linked-list/

/*
Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?
*/


//Input: 1->2
const one = {val: 1}
const two = {val: 2}

one.next = two

console.log(one, 'root 1')

//Input: 1->2->2->1
const a = {val: 1}
const b = {val: 2}
const c = {val: 2}
const d = {val: 1}

a.next = b
b.next = c
c.next = d

console.log(a, 'root 2')

//Input: 1234
const foo = {val:1}
const bar = {val: 2}
const hello = {val: 3}
const world = {val: 4}

foo.next = bar
bar.next = hello
hello.next = world

console.log(bar, 'root 3')

const coolio1 = {val: -129}
const coolio2 = {val: -129}

coolio1.next = coolio2

console.log(coolio1, 'coolio1')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) return true
  const r = []
  while(head) {
    r.push(head.val)
    head = head.next
  }

  for (let i = 0; i < r.length / 2; i++) {
    if (r[i] !== r[r.length - 1 - i]) return false
  }

  return true
};

console.log(isPalindrome(one), false)
console.log(isPalindrome(a), true)
console.log(isPalindrome(foo), false)
console.log(isPalindrome(coolio1), true)
