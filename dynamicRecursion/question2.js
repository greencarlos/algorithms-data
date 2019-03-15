/* 2) Compute the value of power function power(x, n),
given two integers x (base) and n (exponent, which is non-negative). Use recursion.

Next, see if you can improve this with branching recursion
*/

/*
function power(x,n){

 console.log( '--');

 if (n == 0) {

   return x;

 }


 return x * power(x, n - 1);

}
*/

function power(x, n) {
  console.log("x = ", x);
  console.log("n = ", n);
  if (n == 0) return x;
  return x * power(x, n - 1)
} 

console.log(power(2, 3)) // 8
console.log(power(2, 4)) // 16

