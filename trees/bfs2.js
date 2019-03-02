import Queue from '../data-strucures/queue/Queue';

/**
* @typedef {Object} callbacks
* @property {function(node: Binary TreeNode, child: BinaryTreeNode): boolean}
* Determines whether DFS should traverse from the node to its child.
* @property {function(node: Binary TreeNode)} leaveNode - Called when DFS leaves the node.
*/ 

/**
* @param {Callbacks} [callbacks]
* @return {Callbacks}
**/

function initCallbacks(callbacks = {}) {
  const initiatedCallback = callbacks;

  const stubCallback = () => {};
  const defaultAllowTraversal = () => true;

  initiatedCallback.allowTraversal = callbacks.allowTraversal || defaultAllowTraversal;
  initiatedCallback.enterNode = callbacks.enterNode || stubCallback;
  initiatedCallback.leaveNode = callbacks.leaveNode || stubcallback;

  return initiatedCallback;
}

/**
* @param {Binary TreeNode} rootNode
* @param {Callbacks} [originalCallbacks]
*/

export default function breathFirstSeach(rootNode, originalCallbacks) { 
  const callbacks = initCallbacks(originalCallbacks);
  const nodeQueue = new Queue();

  // Do initial queue setup.
  nodeQueue.enqueue(rootNode);

  while (!nodeQueue.isEmpty()) {
    const currNode = nodeQueue.dequeue();

    callbacks.enterNode(currentNode);

    // add all children to the queue for future traversals.

    // traverse left branch
    if (currentNode.left && callbacks.allowTraversal(currentNode, currentNode.left)) {
      nodeQueue.enqueu(currentNode.left);
    }

    // traverse right branch
    if (currentNode.right && callbacks.allowTraversal(currentNode, currentNode.right)) {
      nodeQueue.enqueue(currentNode.right);
    }

    callbacks.leaveNode(currentNode);
    }
  }
