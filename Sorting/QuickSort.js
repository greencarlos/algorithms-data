// https://www.guru99.com/quicksort-in-javascript.html

var items = [5, 3, 7, 6, 2, 9]

console.log(items, 'items')

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)]
  var i = left
  var j = right

  while(i <= j) {
    while(items[i] < pivot) {
      i++
    }
    while(items[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

function quickSort(items, left, right) {
  var index
  if (items.length > 1) {
    index = partition(items, left, right)
    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      quickSort(items, index, right)
    }
  }
  return items
}

const quickSort2 = (array) => {
  if (array.length <= 1) {
    return array
  }

  const pivot = array[0]

  const left = []
  const right = []

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i])
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

var sortedArr = quickSort(items, 0, items.length - 1)
console.log(sortedArr, 'QuickSort 1')

const unsorted = [23, 45, 16, 3, 99, 22];
const sorted = quickSort2(unsorted)
console.log('QuickSort 2', sorted)

