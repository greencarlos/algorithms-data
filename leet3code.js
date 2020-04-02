var maxDepth = function(root) {
  if (!root) {
    return 0
  }

  let queue = []

  queue.push([root, 1])
  let global = 0

  while(queue.length !== 0) {
    let curr = queue.shift()
    let node = curr["0"]
    let max = curr["1"]
    global = Math.max(curr, global)

    if (node.left) {
      queue.push([node.left, max+1])
    }
    if (node.right) {
      queue.push([node.right, max+1])
    }
  }

  return global
}
