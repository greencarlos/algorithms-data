const Heap = require('./Heap');

function MinHeap(heap_size) {
  //initialize parent class passing in heap size
  Heap.call(this, heap_size);
  //sub class of Head
  console.log('Minheap Initialized!');
}
//setup the prototypal inheritance change so MinHeap can inherit from Heap
MinHeap.prototype = Object.create(Heap.prototype);
//Setup constructure of MinHeap to be itself instead of something else
MinHeap.prototype.constructor = MinHeap;

/*
    Add Addition methods to MinHeap.
*/

//Insert new value into collection
MinHeap.prototype.insert = function(value) {
  if (this.count >= this.items.length) {
    try {
      throw 'Error';
    } catch (e) {
      console.log('Sorry Collection is Full. Please Adjust heap size');
      return;
    }
  }
  //append value to the end of the array
  this.items[this.count] = value;
  //put the value in the right position
  this.trickleUp(this.count);
  this.count++;
};

MinHeap.prototype.removeHighestPriority = function() {
  //return if there is nothing in the collection
  if (this.count === 0) {
    return;
  }

  //get the highest priority
  var min = this.getHighestPriority();

  this.items[0] = this.items[this.count - 1];
  this.items.splice(this.count - 1);
  this.count--;
  //put the value in the right position
  this.trickleDown(0);

  //console.log(min + ' was the highest priority that was removed');
  return min;
};

//heapify operation
MinHeap.prototype.trickleUp = function(index) {
  //console.log('Trickling Up');
  var parentIndex = this.getParentIndex(index);

  if (
    parentIndex !== -1 &&
    this.getElementAtIndex(index) < this.getElementAtIndex(parentIndex)
  ) {
    this.swap(parentIndex, index);
    this.trickleUp(parentIndex);
  }
};

//heapify operation
MinHeap.prototype.trickleDown = function(index) {
  //console.log('Trickling Down');

  //get right and left child indices
  var leftIndex = this.getLeftChildIndex(index);
  var rightIndex = this.getRightChildIndex(index);

  //store the bigger index value of the two (left and right)
  var smallerIndex = -1;
  if (leftIndex !== -1 && rightIndex !== -1) {
    //assign the larger index
    smallerIndex =
      this.getElementAtIndex(leftIndex) < this.getElementAtIndex(rightIndex)
        ? leftIndex
        : rightIndex;
  } else if (leftIndex !== -1) {
    smallerIndex = leftIndex;
  } else if (rightIndex !== -1) {
    smallerIndex = rightIndex;
  }

  //If none of those worked, then shop the trickle down
  if (smallerIndex === -1) {
    return;
  }

  if (this.getElementAtIndex(smallerIndex) < this.getElementAtIndex(index)) {
    this.swap(smallerIndex, index);
    this.trickleDown(smallerIndex);
  }
};

var minHeap = new MinHeap(9);

minHeap.insert(42);
minHeap.insert(90);
minHeap.insert(93);
minHeap.insert(97);
minHeap.insert(55);
minHeap.insert(79);
minHeap.insert(73);
minHeap.insert(21);
minHeap.insert(83);
minHeap.insert(83);
minHeap.insert(84);
minHeap.insert(81);

console.log(minHeap);
