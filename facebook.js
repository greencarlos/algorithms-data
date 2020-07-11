function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/*
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

const four = new ListNode(4);
const two = new ListNode(2, four);
const one = new ListNode(1, two);

const four2 = new ListNode(4);
const three2 = new ListNode(3, four2);
const one2 = new ListNode(1, three2);

const five3 = new ListNode(5)

const four3 = new ListNode(4) 
const two3 = new ListNode(2, four3)
const one3 = new ListNode(1, two3)

console.log(one)
console.log(" ")
console.log(one2)
console.log(" ")
console.log(one3)

// Two pointers
// Check which node is less
// then add it to the list

var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (!l1.next && !l2.next) {
    if (l1.val < l2.val) {
      l1.next = l2
      return l1
    } else {
      l2.next = l1
      return l2
    }
  }
  const dummy = new ListNode(0);
  let node = dummy

  const traverse = (node1, node2, list) => {
    if (!node1 && !node2) return;
//    console.log(list.val)

    if (node2 === null) {
      const listNode = new ListNode(node1.val);
      list.next = listNode;
      traverse(node1, node2.next, list.next);
    } else if (node1 === null) {
      const listNode = new ListNode(node2.val);
      list.next = listNode;
      traverse(node1, node2.next, list.next);
    } else if (node1.val < node2.val || node1.val === node2.val) {
      const listNode = new ListNode(node1.val);
      list.next = listNode;
      traverse(node1.next, node2, list.next);
    } else if (node1.val > node2.val) {
      const listNode = new ListNode(node2.val)
      list.next = listNode
      traverse(node1, node2.next, list.next)
    }
  };

  traverse(l1, l2, node);

  return dummy.next;
};

const a = mergeTwoLists(one, one2)
const b = mergeTwoLists(new ListNode(1), new ListNode(2))
const c = mergeTwoLists(one3, five3)

const traverse = (node) => {
  if (!node) return
  console.log(node.val)
  traverse(node.next)
}

console.log(traverse(a), '1->1->2->3->4->4');
console.log(traverse(b), '1->2')
console.log(traverse(c), '1->2->4->5')
