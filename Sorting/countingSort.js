const countingSort = (arr, min, max) => {
  const count = {}
  const sortedArr = []

  for (let i = 0; i <= arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1
  }

  for (let i = min; i<= max; i++) {
    while(count[i] > 0) {
      sortedArr.push(i)
      count[i]--
    }
  }
  return sortedArr
}

console.log(countingSort([3, 6, 5, 5, 9], 3, 9));
