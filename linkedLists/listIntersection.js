function ListNode(val) {
  this.val = val;
  this.next = null;
}

const a1 = new ListNode(1);
const a2 = new ListNode(2);

const b1 = new ListNode(1);
const b2 = new ListNode(2);
const b3 = new ListNode(3);

const c1 = new ListNode(1);
const c2 = new ListNode(2);
const c3 = new ListNode(3);

a1.next = a2;
b1.next = b2;
b2.next = b3;

b3.next = c1;
a2.next = c1;

c1.next = c2;
c2.next = c3;

const four = new ListNode(4);
const one = new ListNode(1);

const five = new ListNode(5);
const six = new ListNode(6);
const oneClone = new ListNode(1);

const eight = new ListNode(8);
const fourClone = new ListNode(4);
const fiveClone = new ListNode(5);

four.next = one;
one.next = eight;

five.next = six;
six.next = oneClone;
oneClone.next = eight;

eight.next = fourClone;
fourClone.next = fiveClone;

const one2 = new ListNode(1);
const nine2 = new ListNode(9);
const one2Clone = new ListNode(1);

const three2 = new ListNode(3);
const two2 = new ListNode(2);
const four2 = new ListNode(4);

one2.next = nine2;
nine2.next = one2Clone;
one2Clone.next = two2;

three2.next = two2;
two2.next = four;

const two3 = new ListNode(2);
const six3 = new ListNode(6);
const four3 = new ListNode(4);

const one3 = new ListNode(1);
const five3 = new ListNode(5);

two3.next = six3;
six3.next = four3;

one3.next = five3;

/*
CTCI problem solving
1. Read / Listen
2. Examples
3. Talk about what is going on 
4. Brute Force (Time/Space O(n))
5. Optimized / Steps (Time/Space O(n))
6. Write the code
7. Test

What is going on? 

Given two nodes determine if their lists
intersect

There are three different approaches to solve
this question. 

1) You can do brute force like you would two for 
loops and check if a[i] === b[j] 

2) The second approach is to use a hash map.

3) The optimized is to use two pointers.

Technically, all recursive solution have O(n) Space
for each recursive call.
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 **/

// Recursive Brute Force
// Time O(m*n) Space [Excluding Recursion] O(1)
/*
Runtime: 4852 ms, faster than 5.01% of JavaScript online submissions for Intersection of Two Linked Lists.
Memory Usage: 50.5 MB, less than 5.07% of JavaScript online submissions for Intersection of Two Linked Lists.
*/

var getIntersectionNode = function(nodeA, nodeB) {
  if (!nodeA || !nodeB) return null

  const traverse = (n1, n2) => {
    if (!n1) return null
    if (n1 === n2) return n1
    return traverse(n1.next, n2)
  }

  let result = traverse(nodeA, nodeB)
  if (!result) {
    return getIntersectionNode(nodeA, nodeB.next)
  } else {
    return result
  }
};

// Iterative Brute Force
// Time O(m*n) Space O(1)
/*
Runtime: 1784 ms, faster than 5.01% of JavaScript online submissions for Intersection of Two Linked Lists.
Memory Usage: 43.4 MB, less than 50.82% of JavaScript online submissions for Intersection of Two Linked Lists.
*/

var getIntersectionNode = function(nodeA, nodeB) {
  if (!nodeA || !nodeB) return null
  let n1 = nodeA
  let n2 = nodeB

  while(n2 !== null) {
    while(n1 !== null) {
      if (n1 === n2) return n1
      n1 = n1.next
    }
    n2 = n2.next
    n1 = nodeA
  }

  return null
}

// Recursive Hash Table
// Time & Space O(n)
/* 
Runtime: 116 ms, faster than 33.27% of JavaScript online submissions for Intersection of Two Linked Lists.
Memory Usage: 44.7 MB, less than 11.63% of JavaScript online submissions for Intersection of Two Linked Lists.
*/

var getIntersectionNode = function(nodeA, nodeB, hashSet = new Set()) {
  if (!nodeA || !nodeB) return null

  const hashNodes = node => {
    if (!node) return
    hashSet.add(node)
    hashNodes(node.next)
  }

  hashNodes(nodeA)

  const checkNodes = node => {
    if (!node) return null
    if (hashSet.has(node)) {
      return node
    }
    return checkNodes(node.next)
  }

  return checkNodes(nodeB)
}

// Iterative Hash Table
// Time & Space O(n)
/*
Runtime: 108 ms, faster than 40.07% of JavaScript online submissions for Intersection of Two Linked Lists.
Memory Usage: 44.3 MB, less than 14.90% of JavaScript online submissions for Intersection of Two Linked Lists.
*/

var getIntersectionNode = function(nodeA, nodeB, hashSet = new Set()) {
  if (!nodeA || !nodeB) return null
  let n1 = nodeA
  let n2 = nodeB

  while(n1 !== null) {
    hashSet.add(n1)
    n1 = n1.next
  }

  while(n2 !== null) {
    if (hashSet.has(n2)) {
      return n2
    }
    n2 = n2.next
  }

  return null
}

// Recursive Two Pointers
// Time O(n) & Space [Excluding Recursion] O(1)
/*
Runtime: 116 ms, faster than 33.27% of JavaScript online submissions for Intersection of Two Linked Lists.
Memory Usage: 45.1 MB, less than 7.01% of JavaScript online submissions for Intersection of Two Linked Lists.
*/

var getIntersectionNode = function(nodeA, nodeB) {
  if (!nodeA || !nodeB) return null

  const traverse = (n1, n2) => {
    if (!n1 && !n2) return null
    if (n1 === n2) return n1
    if (n1 === null) {
      return traverse(nodeB, n2)
    }

    if (n2 === null) {
      return traverse(n1, nodeA)
    }

    return traverse(n1.next, n2.next)
  }

  return traverse(nodeA, nodeB)
}

// Iterative Two Pointers
// Time O(n) & Space O(1)
/*
Runtime: 112 ms, faster than 35.06% of JavaScript online submissions for Intersection of Two Linked Lists.
Memory Usage: 43.8 MB, less than 21.46% of JavaScript online submissions for Intersection of Two Linked Lists.
*/

var getIntersectionNode = function(nodeA, nodeB) {
  if (!nodeA || !nodeB) return null;
  let n1 = nodeA;
  let n2 = nodeB;

  while (true) {
    if (n1 === n2) return n1;

    if (n1 === null && n2 === null) {
      return null;
    }

    if (n1 === null) {
      n1 = nodeB;
    } else if (n2 === null) {
      n2 = nodeA;
    } else {
      n1 = n1.next;
      n2 = n2.next;
    }
  }
};

//console.log(a1, 'roots', b1)
console.log(getIntersectionNode(a1, b1), 'c1');
//console.log(five, 'root 2', four)
console.log(getIntersectionNode(five, four), '8');
//console.log(one2, 'root 3', three2)
console.log(getIntersectionNode(one2, three2), '2');
//console.log(two3, 'root 4', one3)
console.log(getIntersectionNode(two3, one3), null);
