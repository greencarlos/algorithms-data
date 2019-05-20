(function(){
  // body
  console.log("IIFE")
})()

(function(){
  // body of function
  console.log("body of a function")
})()

(function(w, d, $){
 // body
  console.log("Immediately Invoked")
}(window, document. jQuery))

var module = (function(){
  // private
  return {
  // public
  }
}())

var salary = "$1000";

(function(){
  console.log("Original salary was " + salary);

  var salary = "$5000";

  console.log("Original salary was " + salary);
})();
