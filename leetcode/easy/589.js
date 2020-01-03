// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

const tree = {
  $id: '1',
  children: [
    {
      $id: '2',
      children: [
        {$id: '5', children: [], val: 5},
        {$id: '6', children: [], val: 6},
      ],
      val: 3,
    },
    {$id: '3', children: [], val: 2},
    {$id: '4', children: [], val: 4},
  ],
  val: 1,
};

var postorder = function(root) {
  let solArr = []

  const traverseTree = (node) => {
    if (!node) return
    solArr.push(node.val)
    node.children.forEach((child) => traverseTree(child))
  }

  traverseTree(root)
  return solArr
};

console.log(postorder(tree))
