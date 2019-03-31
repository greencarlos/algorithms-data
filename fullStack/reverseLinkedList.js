let nodeA = {
	data: "A",
	next: null,
};

let nodeB = {
	data: "B",
	next: null,
};

let nodeC = {
	data: "C",
	next: null,
};

let nodeD = {
	data: "D",
	next: null,
};

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

let root = nodeA;


const solution = (node) => {
  if (!node) return
  solution(node.next)
  console.log(node.data)
}
/*
const solution = (node) => {
  for (key in node) {
    console.log(node[key])
  }
}
*/

console.log(solution(nodeA))

/* const reverse = (node) => {
  let stack = []

  while(node !== null) {
  stack.push(node.data)
  }
  //while(!stack) {
  //console.log(stack.pop())
  }
} */

// console.log(reverse(nodeA))

/*
Given the mock data above, the output will look like this:
D
C
B
A*/
