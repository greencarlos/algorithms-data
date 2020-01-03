// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/

/*
Given the head of a linked list, 
we repeatedly delete consecutive sequences of nodes that 
sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list. 
You may return any such answer.

(Note that in the examples below, 
all sequences are serializations of ListNode objects.)

Example 1:
Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.

Example 2:
Input: head = [1,2,3,-3,4]
Output: [1,2,4]

Example 3:
Input: head = [1,2,3,-3,-2]
Output: [1]
*/

const a = {val: 1}
const b = {val: 2}
const c = {val: -3}
const d = {val: 3}
const e = {val: 1}

const input1 = [1,2,-3,3,1]
const output1 = [3,1]

a.next = b
b.next = c
c.next = d
d.next = e


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
var removeZeroSumSublists = function(head) {
  const dummy = { next: head };
  const sum = new Int16Array(1001);
  const nodes = [dummy];
  let changed = false;
  let cur = head;
  let idx = 1;
  let sumStart = 1
  while(cur) {
    for(let i = sumStart; i <= idx; ++i) {
      sum[i] += cur.val;
      if (sum[i] === 0) {
        sumStart = i + 1;
        nodes[i - 1].next = cur.next;
        changed = true;
      }
    }
    nodes[idx++] = cur;
    cur = cur.next;
  }
  return changed ? removeZeroSumSublists(dummy.next) : dummy.next;
};

const head1 = a
console.log(head1, 'head1')

// return head
console.log(removeZeroSumSublists(head1), [3, 1])


/*
const head2 = [1,2,3,-3,4]
const output2 = [1,2,4]

const head3 = [1,2,3,-3,-2]
const output3 = [1]
*/

