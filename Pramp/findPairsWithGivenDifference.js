/*
function findPairsWithGivenDifference(arr, k) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] === k) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

function findPairsWithGivenDifference(arr, k) {
  const result = []
  const hash = {}

  for (let ele of arr) {
    hash[ele] = k + ele
  }

  for (let ele of arr) {
    if (hash.hasOwnProperty(k + ele)) {
      result.push([hash[ele], ele])
    }
  }

  return result
}
*/

function findPairsWithGivenDifference(arr, k) {
  const result = []
  const hash = {}

  for (let x of arr) {
    hash[x - k] = x
  }

  for (let y of arr) {
    if (hash.hasOwnProperty(y)) {
      result.push([hash[y], y])
    }
  }

  return result
}

const arr1 = [0, -1, -2, 2, 1];
const out1 = [
  [1, 0],
  [0, -1],
  [-1, -2],
  [2, 1],
];

console.log(findPairsWithGivenDifference(arr1, 1));
console.log(out1);

const arr2 = [1, 7, 5, 3, 32, 17, 12];
console.log(findPairsWithGivenDifference(arr2, 17), []);

/*
input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]


x - y = k
input, arr k, diff between two values
output, 

*/
