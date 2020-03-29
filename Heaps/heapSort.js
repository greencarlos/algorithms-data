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

const arr = [3, 0, 2, 5, 4, 1]
console.log(heapSort(arr))
