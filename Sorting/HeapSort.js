// https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php

const heapRoot = (arr, input, i) => {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let max = i

  if (left < arr.length && input[left] > input[max]) {
    max = left
  }
  if (right < arr.length && input[right] > input[max]) {
    max = right
  }

  if (max != i) {
    swap(input, i, max)
    heapRoot(input, max)
  }
}

const swap = (input, indexA, indexB) => {
  const temp = input[indexA]
  input[indexA] = input[indexB]
  input[indexB] = temp
}

const heapSort = (input, arrLen) =>  {
  console.log('origin', input)
  arrLen = input.length

  for (let i = Math.floor(arrLen / 2); i>= 0; i -=1) {
    heapRoot(arrLen, input, i)
  }

  for (i = input.length - 1; i > 0; i--) {
    swap(input, 0, i)
    arrLen--

    heapRoot(input, 0)
  }

  return input
}

const arr1 = [3, 0, 2, 5, -1, 4, 1]
console.log('arr1 ', arr1)
console.log(heapSort(arr1), 'heap 1 sorted')

// Binary Max-Heap
/*      (30)
 *      /  \
 *   (20)  (10)
 *   /  \  /
 * (7) (9)(5)
*/
const arr2 = [30, 20, 10, 7, 9, 5]
//     index: 0,  1,  2,  3, 4, 5     
console.log(" ")
console.log('arr2 ', arr2)
console.log(heapSort(arr2), 'heap 2 sorted')
