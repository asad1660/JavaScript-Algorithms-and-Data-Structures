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

/* 
This Example is about Fibonacci sequence in javascript.
how we can achieve this by doing recursion
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
*/

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(10));
/* 
This Example is about reverse string in javascript.
how we can achieve this by doing recursion
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("awesome"));
/* 
This Example is about isPalindrome in javascript.
how we can achieve this by doing recursion
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
*/

function isPalindrome(str) {
  if (str == reverse(str)) return true;
  else return false;
}

console.log(isPalindrome("tacocat"));
