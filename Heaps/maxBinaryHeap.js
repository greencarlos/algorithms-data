/*

MaxHeap:  [16, 14, 10, 8, 7, 9, 2, 3, 4, 1]
           1   2   3   4  5  6  7  8  9  10

           1
          (16)
        2/   \ 3
      (14)   (10)
    4/   \5   6/ \7
   (8)  (7) (9) (3)
  8/\9  /10
(2) (4)(1)
  
*/

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
    this.next = null;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.heap.push(newNode);
    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.priority > this.heap[currentNodeParentIdx].priority
    ) {
      const parent = this.heap[currentNodeParentIdx];
      this.heap[currentNodeParentIdx] = newNode;
      this.heap[currentNodeIdx] = parent;
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

  remove() {
    if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }
    const toRemove = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;
    let [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
    let currentChildIdx =
      this.heap[right] && this.heap[right].priority >= this.heap[left].priority
        ? right
        : left;
    while (
      this.heap[currentChildIdx] &&
      this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority
    ) {
      let currentNode = this.heap[currentIdx];
      let currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
    }
    return toRemove;
  }
}

const max = new MaxHeap()

max.insert(16)
max.insert(14)
max.insert(10)
max.insert(8)
max.insert(7)
max.insert(8)
max.insert(7)
max.insert(9)
max.insert(2)
max.insert(3)
max.insert(4)
max.insert(1)

console.log(max)
