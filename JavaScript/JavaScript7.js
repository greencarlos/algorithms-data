// Singleton Pattern

let Singleton = (funciton(){
  function Car(){}
  // code starts here
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
console.log( "Is same copy?:", instance1 === instance2 )
// true
