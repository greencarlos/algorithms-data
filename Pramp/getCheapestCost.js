function getCheapestCost(rootNode, sum = 0) {
  let minCost = Infinity 

  for (let node of rootNode.children) {
    if (node.children.length !== 0) {
      sum += node.cost;
      getCheapestCost(node, sum);
    } else {
      result.push(sum);
      minCost = Math.min(sum)
    }
  }

  return minCost
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

/*
    sum = 0

                 0  add node's cost 0 
               / | \
              5  3   6
             /  / \  /\ 
            4  2   0 1 5
                \   \
                 1  10
                  \
                   1
*/



/*


N-Ary Tree

DFS, try to recusrively find
the sum for each node path

As we traverse each child node
we add can calculate the current sum

What is output?, just the node?
return sum

When we hit a child node we can add our
sum to a result array 

Then return the min of our result array

*/
