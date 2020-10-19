var bubbleSort = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]]
          continue
        }
      }
  }
  return arr
}


console.log(bubbleSort([5, 3, 1, 2, 4]), [1, 2, 3, 4, 5])
