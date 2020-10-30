function bracketMatch(text) {
  let count = 0
  let unmatched = 0
  
  for (let char of text) {
    if (char === "(") {
      count += 1
    } else if (char === ")") {
      count -= 1
    }
    
    if (count < 0) {
      count = 0
      unmatched += 1
    }
  }
  
  return count + unmatched
}

console.log(bracketMatch("(())"), 0)
console.log(bracketMatch("(()"), 1)
console.log(bracketMatch("())("), 2)

/*

"(" -> opening
")" -> closing


 0 1 2 index
"( ( )" output: 1
 1 2 1  count
 0 0 0   unmatched

 0 1 2 3 index
"( ( ) )" output: 0
 1 2 1 0   count
 0 0 0 0 unmatched

 0 1 2 3 index
"( ) ) (" output: 2
 1 0 0 1    count
 0 0 1 1    unmatched

Brute Force: Stack L.I.F.O.
Time O(n) iterate over the string
Space O(n) stack stack

If we hit an opening bracket we can
add it to the stack otherwise, if we 
hit a closing brack and the last element

on the stack is an opening, then we can
add it to the stack. But if it's not
then we would add our closing bracket to the stack

Optimized:
Time O(n) elements in the string
Space O(1) for two variables

count = 0
unmatched = 0

We can just count how many times we 
hit a opening, increment count
everytime we hit a closing we decrement

so if our count is less than zero,
increment unmatched by one and 
reset our count to 0
*/
