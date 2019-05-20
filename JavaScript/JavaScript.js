// Closure Scope
// a scope that remains alive after the function created
// has returned
//
function createAdd(){
  var param1 = 5;

  function addition(){
    var param2 = 10;
    return param1 + param2;
  }
  return addition;
}

let add = createAdd();
console.log(add()); // 15

// What is wrong with this code?
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++){
  setTimeout(function() {
    console.log('i: ' + i);
  }, 3000);
}

for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('i: ' + i);
  }, 3000);
}

for (var i = 0; i < arr.length; i++){
  setTimeout(function(i) {
    return function() {
      console.log('i : ' + i);
    }
  }(i), 100);
}
