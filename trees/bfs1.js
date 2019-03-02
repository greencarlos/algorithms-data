/* Breath First Search

Searchs graph-like data structures, one level at a time

1. Start a queue

2. Check current node - if false, mark as visited

3. Add all unvisited, connected nodes to queue

4. Check one by one like the previous node and repeat

*/

const bfs = (value, tree) {

  queue = [];
  queue.unshift(tree);

  while(queue.length > 0) {
    curNode = queue.pop();
    if (curNode.value === value) {
      return curNode;
    }
  
  let len = curNode.children.length;

  for (var i = 0; i < len; i++) {
    queue.unshift(curNode.children[i]);
  }
}
  return null;
}




/*
When to use????

- solution is not far from the root

- Tree is very deep and solutions are rare */
