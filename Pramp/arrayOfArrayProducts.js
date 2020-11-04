function arrayOfArrayProducts(arr) {
  if (arr.length < 2) return [];
  let product = 1;
  const prefix = Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    prefix[i] = product;
    product *= arr[i];
  }

  product = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    prefix[i] *= product;
    product *= arr[i];
  }

  return prefix;
}

console.log(arrayOfArrayProducts([8, 10, 2]), [20, 16, 80]);
console.log(arrayOfArrayProducts([2, 7, 3, 4]), [84, 24, 56, 42]);
