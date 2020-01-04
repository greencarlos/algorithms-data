// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const nums1 = [-9, -8, 1, 7, 3, 5, 2, 4]
const nums2 = [1, 12, 100];
const nums3 = [1, 12, 100];
const nums4 = [1, 12, 100];

console.log(nums1, 'original 1')
console.log(nums2, 'original 2')

const a = nums1.sort((a,b) => (a -b))
const b = nums1.sort()

console.log(a, 'nums 1')
console.log(b, 'nums 1')

const c = nums2.sort();
console.log(c); // [1, 100, 12]

const d = nums3.sort((left, right) => left - right);
console.log(d); // [1, 12, 100]

const e = nums4.sort((left, right) => {
  const strLeft = String(left);
  const strRight = String(right);
  if (strLeft < strRight) return -1;
  if (strLeft > strRight) return 1;
  return 0;
});

console.log(e); // [1, 100, 12]
