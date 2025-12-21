/* 
This Example is about Math.pow in javascript.
how we can achieve this by doing recursion


*/

function pow(base, power) {
  if (power < 1) return 1;
  return (base *= pow(base, power - 1));
}
console.log(pow(3, 3));
