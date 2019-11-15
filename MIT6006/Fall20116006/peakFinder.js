// https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb
// LECTURE 1 

const arr1 = [
  {ele: 'a', val: 1},
  {ele: 'b', val: 2},
  {ele: 'c', val: 3},
  {ele: 'd', val: 4},
  {ele: 'e', val: 5},
  {ele: 'f', val: 6},
  {ele: 'g', val: 7},
  {ele: 'h', val: 8},
  {ele: 'i', val: 9},
]

const matrix1 = [
  [0, 0, 0, 0],
  [14, 13, 12, 0],
  [15, 9, 11, 17],
  [16, 17, 19, 20]
]

const crazyMatrix1 = [
  [0, 0, 0, 0, 0],
  [0, [1, 1, 1], 0],
  [0, [1, [2], 1], 0],
  [0, [1, 1, 1], 0],
  [0, 0, 0, 0, 0],
]

console.log(crazyMatrix1)

var peakFinder = function(array) {
  let peak = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].val > peak) {
      peak = array[i].val
    }
  }
  return peak
}

console.log(peakFinder(arr1), 9)

