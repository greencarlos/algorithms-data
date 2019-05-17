// https://dev.to/emmawedekind/bubble-sort-in-javascript-2con?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email

const arr = [14, 6, 3, 66, 12, 4];
console.log("original array =", arr)

const bubbleSort1 = arr => {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
	console.log(arr)
        let temp = arr[i];
	arr[i] = arr[i + 1];
	arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("------------")

console.log("bubble sort 1")
console.log(bubbleSort1(arr));

console.log("------------")

console.log("bubble sort 2")

const bubbleSort2 = arr => {
  let swapped;
    console.log(arr);
  do {
    swapped = false;
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
      // save the value to a variable
      let temp = item;
      arr[index] = arr[index + 1];
      arr[index + 1] = temp;
      swapped = true;
    console.log(arr);
      }
    })
  } while (swapped);
}

console.log(bubbleSort2(arr))
