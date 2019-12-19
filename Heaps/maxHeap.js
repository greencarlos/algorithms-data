// Max heap where the root is the largest value
const heap1 = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]  
// Tree Order: 1,  2,  3,  4, 5, 6, 7, 8, 9, 10
// Nearly a complete binary tree

/*            1
            (16)
          2 /  \ 3
         (14)  (10)
       4 / \5  6/ \7
      (8) (7) (9) (3)
      / \  /
    (2)(4)(1)
     8  9  10 */ 
let arrayLength

// Build Max Heap
function maxHeap(input, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < arrayLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrayLength && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    maxHeap(input, max)
  }
}

function swap(input, indexA, indexB) {
  let temp = input[indexA];

  input[indexA] = input[indexB];
  input[indexB] = temp;
}

// Sort the heap
function heapSort(input) {
  arrayLength = input.length
  
  for (let i = Math.floor(arrayLength / 2); i >= 0; i -=1) {
    maxHeap(input, i)
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i)
    arrayLength--;

    maxHeap(input, 0)
  }
}

const heap2 = [3, 0, 2, 5, -1, 4, 1]
heapSort(heap1)
heapSort(heap2)
console.log(heap1, 'heap 1')
console.log(heap2, 'heap 2')
