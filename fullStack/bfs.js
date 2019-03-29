let a = { data: 1 }
let b = { data: 2 }
let c = { data: 3 }
let d = { data: 4 }
let e = { data: 5 }
let f = { data: 6 }
let g = { data: 7 }

a.left = b
a.right = c

b.left = d
b.right = e

c.left = f
c.right = g

//   a
//  / \
// b   c
// /\  /\
//d  e f g  

function bfs(node, queue = []) {
  if (!node) return;
  console.log("Traversal = ", node.data);
  queue = queue.concat(node.left || node.right); 
  return bfs(queue.shift(), queue);
};

console.log(bfs(a))
