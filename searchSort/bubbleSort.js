// https://dev.to/emmawedekind/bubble-sort-in-javascript-2con?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email

const arr = [14, 6, 3, 66, 12, 4, 30, 90, 5, 56, 65];
const person = [
    "name", "harry",
    "age", "21",
    "name","john",
    "age", "23",
    "name", "jack",
    "age", 25
];

console.log(arr, "original array")
console.log(person, 'person\'s array')

const bubbleSort1 = arr => {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
	    arr[i] = arr[i + 1];
	    arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("------------")
console.log(bubbleSort1(arr), 'bubble sort 1');
console.log(bubbleSort1(person), 'bubble sort 1');

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
      }
    })
  } while (swapped);
}

console.log(" ")
console.log("------------")
console.log(bubbleSort2(arr), 'bubble sort 2')
console.log(bubbleSort2(person), 'bubble sort 2')

// https://codingmiles.com/sorting-algorithms-bubble-sort-using-javascript/

function bubbleSort3(items) {
  var length = items.length;
  for (let i = 0; i < length; i++) { // num of passes
    for (let j = 0; j < (length - i - 1); j++) { // Notice that j < (length - )

      // compare the adjacent positions
      if (items[j] > items[j + 1]) {
    
      // swap nums
      var tmp = items[j] // temp var to hold the curr number

      items[j] = items[j + 1] // replace curr num with adjacent num
      items[j + 1] = tmp // replace adjacent num with curr
      }
    }
  }
  return items
}

console.log(" ")
console.log("------------")
console.log(bubbleSort3(arr), 'bubble sort 3')
console.log(bubbleSort3(person), 'bubble sort 3')

function bubbleSort4(items) {
  var length = items.length;
  for (var i = (length - 1); i >= 0; i--) {
    // num of passes
    for (var j = (length - i); j > 0; j--) {
      // compare the adjacent positions
      if (items[j] < items[j - 1]) {
        // Swap the nums
        var tmp = items[j]
        items[j] = items[j - 1]
        items[j - 1] = tmp
      }
    }
  }
  return items
}

console.log(" ")
console.log("------------")
console.log(bubbleSort4(arr), 'bubble sort 4')
console.log(bubbleSort4(person), 'bubble sort 4')
