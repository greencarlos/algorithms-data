const array = [1,4,4,7,7,8,11,19,21,23,24,30]

function binarySearch(arr, target) {
  // starting values
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let currentIndex;
  let currentElement;

  // main loop
  while(minIndex <= maxIndex){
  
  // Get a position near the middle
  currentIndex = Math.floor((minIndex + maxIndex) / 2);

  // Get that element
  //currentElement = arr[currentIndex];
  searchElement = arr[currentIndex];

  // Test it
  if (currentElement < searchElement) {
    // if it's less than we are looking for,
    // look *above* this value
    minIndex = currentIndex + 1;
  }
  else if (currentElement > searchElement) {
  // If it's more than we are looking for,
  // look *below* this value.
  maxIndex = currentIndex - 1;
  } else {
  // We found it; retu
  return currentIndex;
  }
  }
  return false; // worst case run-time
}

// How binary search works? Say given the sorted
// array below - [1,4,4,7,7,8,11,19,21,23,24,30],
// and the target key, 19.

console.log(binarySearch(array, 19))
// 5 
