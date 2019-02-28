a = { v: 1 }; // root node
b = { v: 2 };
c = { v: 3 };
d = { v: 4 };
e = { v: 5 };
f = { v: 6 };
g = { v: 7 };
h = { v: 8 };

// Breath First Traversal
// ->        { v: 1 }
//            /  |  \
// ->        2   3   4
//              / \    
// ->          5   6
//                /  \ 
// ->            7    8

a.children = [b, c, d];

c.children = [e, f];

f.children = [g, h];

// Breath First Traversal

const bft = (n, c = []) => {
    if (!n) return;
    console.log("Breadth First Traversal = ", n.v);
    c = c.concat(n.children || []);
    return bft(c.shift(), c);
}
console.log(bft(a));

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// undefined

dft = (n, c = []) => {
  if(!n) return;
  console.log("Depth First Traversal = ", n.v);
  c = c.concat(n.children || []);
  return dft(c.pop(), c);
};

// preOrder?


console.log(dft(a));
// Output:
// 1
// 4
// 3
// 6
// 8
// 7
// 5
// 2
// undefined