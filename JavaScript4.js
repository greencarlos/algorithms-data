// bind method
function list(){
  return Array.prototype.slice.call(arguments)
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList(); // [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]

this.x = 10; // window global scope

var testModule = {
  x: 81,
  getX: function() {return this.x;}
};

console.log(testModule.getX());
// 81

var readX = testModule.getX;
console.log(readX());
// 10

var boundedReadX = readX.bind(testModule);
console.log(boundedReadX());
// 81


/*function what(){
  console.log(arguments);
}

what("hello")
what(null)
what(NaN)
what(undefined)
what(true, false)*/
