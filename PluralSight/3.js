function list() {  
  return[].slice.call(arguments)
  // return [].slice.apply(arguments)
}
var leadingThirtysevenList = list.bind(null, 37);
var list2 = leadingThirtysevenList();
console.log(list2);
