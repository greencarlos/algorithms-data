const bubbleSort = (arr) => {
  let swap
  let n = arr.length - 1
  let x = arr

  do {
    swap = false
    for (let i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        let temp = x[i]
        x[i] = x[i + 1]
        x[i + 1] = temp
        swap = true
      }
    }
    n--
  } while (swap)
  return x.reverse()
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
