// https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-2.php
// ***Two Sorted Arrays***

function MergeSort(left, right) {

  var i = 0
  var j = 0
  var results = []

  while(i < left.length || j < right.length) {
   if (i === left.length) {
     results.push(right[j])
     j++
    } else if (j === right.length || left[i] <= right[j]) {
      results.push(left[i])
      i++
    } else {
      results.push(right[j])
      j++
    }
  }
  return results
}

console.log(MergeSort([1, 3, 4], [3, 7, 9]))
console.log(MergeSort([10, 30, 44], [32, 79, 91]))
