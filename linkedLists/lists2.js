/**
1. Traverse Linked List
2. Reverse Print 
3. Reverse Linked List
4. IsCircular
**/

const a = {val: 1}
const b = {val: 2}
const c = {val: 3}
const d = {val: 4}
const e = {val: 5}

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(a)

// Traverse Linked List
const Traverse = (root) => {
  if (!root) return
  console.log(root.val)
  return Traverse(root.next)
}

// reverse print 
const ReversePrint = (root) => {
  if (!root) return
  ReversePrint(root.next)
  console.log(root.val)
}

// reverse a linked list
const ReverseList = (root) => {
  let pre = null
  while(root) {
    let next = root.next
    root.next = pre
    pre = root 
    root = next
  }
  return pre
}

// IsCircular
// cRuDe sOlUtIoN
const IsCircular = (root) => {
  let slower = root
  let faster = root

  while(root) {
    root = root.next
    if (!root) return false
    slower = root.next
    faster = root.next.next
    if (slower === faster) return true
  }
}

console.log(Traverse(a), 'Traverse')
console.log(ReversePrint(a), 'Reverse Print')
console.log(ReverseList(a)), 'Reverse List'
console.log(IsCircular(a), 'IsCircular')

