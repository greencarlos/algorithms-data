// https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php

var array_length

function heap_root(input, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
    max = left
  }
  if (right < array_length && input[right] > input[max]) {
    max = right
  }

  if (max != i) {
    swap(input, i, max)
    heap_root(input, max)
  }
}

function swap(input, index_A, index_B) {
  var temp = input[index_A]

  input[index_A] = input[index_B]
  input[index_B] = temp
}

function heapSort(input) {

  array_length = input.length


  for (var i = Math.floor(array_length / 2); i >= 0; i--) {
    heap_root(input, i)
  }

  for (i = input.length - 1; i > 0; i--){
    swap(input, 0, i)
    array_length--;
    heap_root(input, 0)
  }
  return input
}

var arr = [3, 0, 2, 5, -1, 4, 1]
console.log('original arr', arr)
console.log(heapSort(arr))

