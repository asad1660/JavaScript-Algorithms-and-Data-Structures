/* 
This Example is about Math.pow in javascript.
how we can achieve this by doing recursion
*/

function pow(base, power) {
  if (power < 1) return 1;
  return (base *= pow(base, power - 1));
}
console.log(pow(3, 3));
/* 
This Example is about Factorial of a number in javascript.
how we can achieve this by doing recursion
*/
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(3));

/* 
This Example is about Array of a number multiply with the previous one in javascript.
how we can achieve this by doing recursion
*/
function productOfArray(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]));

/* 
This Example is about recursiveRange of a number add with the previous one until 0 in javascript.
how we can achieve this by doing recursion
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
*/
function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}
console.log(recursiveRange(6));
