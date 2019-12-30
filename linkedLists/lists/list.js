// Lists are one of the most common organizing tools people use in their day-to-day lives.
// We have to-do lists, grocery lists, top-ten lists etc.
// As a ADT (abstract data type) a list is an ordered sequence of data.

// List properties:

// listSize(property) number of elements in list
// pos(property) current position in list
// length(property) returns the number of elements in list

// clear(function) clears all elements from list
// toString(function) returns string representation of list
// getElement(function) returns element at current position

// insert(function) inserts new element after exisitng element 
// append(function) adds new element to end of list
// remove(function) removes element from list

// front(function) sets current position to first element of list
// end(function) sets current position to last element of list
// prev(function) moves moves current position back one element

// next(function) moves current position forward one element
// currPos(function) returns the current position in list
// moveTo(function) moves the current position to a specified position

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [] // initializes an empty array to store elements

  this.find = function(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i
      }
    }
    return -1
  } 

  this.toString = function() {
    return this.listSize
  }  

  // adding an element to a list
  this.append = function(element) {
    this.dataStore[this.listSize++] = element
  }

  this.remove = function(element) {
    var foundAt = this.find(element)
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1)
      --this.listSize;
      return true
    }
    return false
  }  

  // Determining the number of elements
  this.length = function() {
    return this.listSize
  }

  // retrive a lists elements
  this.toString = function() {
    return this.dataStore
  }

  // inserting an element into a list
  this.insert = function(element, after) {
    var insertPos = this.find(after) 
    if (insertPos > 1) {
      this.dataStore.splice(insertPos+1, 0, element)
      ++this.listSize
      return true
    }
    return false
  }

  // removing all elements
  this.clear = function() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
  }

  // determine if a given value is in a list
  this.contains = function(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return true
      }
    }
    return false
  }

  // Traversing a list
  this.front = function() {
    this.pos = 0
  }

  this.end = function() {
    this.pos = this.listSize-1;
  }

  this.prev = function() {
    if (this.pos > 0) {
      --this.pos
    }
  }

  this.next = function() {
    if (this.pos < this.listSize -1) {
      ++this.pos
    }
  }


}

var names = new List()
names.append("Cynthia")
names.append("Raymond")
names.append("Barbara")
console.log(names.toString())
names.remove("Raymond")
console.log(names.toString())
console.log(names)
names.clear()
console.log(names)
