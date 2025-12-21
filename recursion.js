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
