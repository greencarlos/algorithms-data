// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
**/

// Input: 
// (2 -> 4 -> 3) + (5 -> 6 -> 4)

// Output:
// 7 -> 0 -> 8

// 342 + 465 = 807
const two1 = {val: 2}
const four1 = {val: 4}
const three1 = {val: 3}

const five1 = {val: 5}
const six1 = {val: 6}
const fourAgain1 = {val: 4}

two1.next = four1
four1.next = three1
three1.next = null

five1.next = six1
six1.next = fourAgain1
fourAgain1.next = null

console.log(two1, 'p1 root1')
console.log(five1, 'p1 root2')

/*
var addTwoNumbers = function(l1, l2) {
  let str1 = ''
  let str2 = ''

  traverse = (node, str) => {
    if (!node) return str 
    console.log(node, 'node')
    console.log(str, 'str')
    str += node.val
    return traverse(node.next, str)
  }

  traverse(l1, str1)
  traverse(l2, str2)

  return (str1, 'strings', str2)
};
*/

var addTwoNumbers = function(l1, l2) {
  var List = new ListNode(0)
  var head = List
  var sum = 0
  var carry = 0

  while(l1 !== null || l2 !== null || sum>0) {
    if (l1 !== null) {
      sum = sum + l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum = sum + l2.val
      l2 = l2.next
    }
    if (sum >= 10) {
      carry = 1
      sum = sum - 10
    }

    head.next = new ListNode(sum)
    head = head.next

    sum = carry
    carry = 0
  }
  return List.next
}

console.log(" ")
const str1 = "7 -> 0 -> 8 -> null"
console.log(addTwoNumbers(two1, five1), str1)
