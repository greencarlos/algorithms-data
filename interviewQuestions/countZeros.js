// Given a sorted array, count the number of zeros

// BRUTE FORCE METHOD

const sortedZeros = (array) => {
  let zeros = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeros += 1;
    }
  }
  return zeros;
}
// 
console.log(sortedZeros([0, 0, 0, 0, 0])); // 5
console.log(sortedZeros([0, 0, 0, 0, 1])); // 4
console.log(sortedZeros([0, 0, 0, 1, 1])); // 3
console.log(sortedZeros([0, 0, 1, 1, 1])); // 2
console.log(sortedZeros([0, 1, 1, 1, 1])); // 1
console.log(sortedZeros([1, 1, 1, 1, 1])); // 0


// OPTIMIZED RECURSIVE SOLUTION

const count0 = (a, min = 0, max = a.length - 1) => {
  if (a.length === 0) return 0;
  if (a.length === 1) return a[0] ? 0 : 1;

  const mid = Math.round((max+min)/2);
  // console.log(`    min = ${min}, max = ${max}, mid = ${mid}`);
  // console.log(`    a[mid] = a[${mid}] = ${a[mid]}`);

  if (mid - 1 >= 0)
    console.log(`   a[mid - 1] = a[${mid - 1}] = ${a[mid-1]}`);

  if (mid + 1 <= a.length)
    console.log(`  a[mid+1] = a[${mid+1}] = ${a[mid+1]}`);

  /* base cases */
  if (!a[mid]) {
    if ((mid === max) || a[mid+1]) return mid + 1;
  }
  else 
    if ((mid === min) || !a[mid-1]) return mid;

  if (!a[mid]) min = mid+1;
  else max = mid-1;

  return count0(a, min, max);
}

const a0 = [];
const a1 = [0];
const a2 = [1];
const a3 = [0, 0, 0, 0, 0]; // 5
const a4 = [0, 0, 0, 0, 1]; // 4
const a5 = [0, 0, 0, 1, 1]; // 3
const a6 = [0, 0, 1, 1, 1]; // 2
const a7 = [0, 1, 1, 1, 1]; // 1

console.log(`===> num of 0 in a0: [${a0}] = ${count0(a0)}`);
console.log(' ');
console.log(`===> num of 0 in a1: [${a1}] = ${count0(a1)}`);
console.log(' ');
console.log(`===> num of 0 in a2: [${a2}] = ${count0(a2)}`);
console.log(' ');
console.log(`===> num of 0 in a3: [${a3}] = ${count0(a3)}`);
console.log(' ');
console.log(`===> num of 0 in a4: [${a4}] = ${count0(a4)}`);
console.log(' ');
console.log(`===> num of 0 in a5: [${a5}] = ${count0(a5)}`);
console.log(' ');
console.log(`===> num of 0 in a6: [${a6}] = ${count0(a6)}`);
console.log(' ');
console.log(`===> num of 0 in a7: [${a7}] = ${count0(a7)}`);

// O(log n) runtime
// because we keep halving the array/data each iteration